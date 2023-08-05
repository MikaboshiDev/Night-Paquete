/*
# Discord Server: https://discord.gg/pgDje8S3Ed
# Github: https://github.com/MikaboshiDev
# Docs: https://bit.ly/nightdevelopment
# Dashboard: https://bit.ly/nightdashboard

# Created by: MikaboshiDev
# Version: 1.0.0
# Discord: azazel_hla

# This file is the main configuration file for the bot.
# Inside this file you will find all the settings you need to configure the bot.
# If you have any questions, please contact us on our discord server.
# If you want to know more about the bot, you can visit our website.
*/

const { loginConsole } = require("./modules/console");
const LicenceAuth = require("./clases/authLicence");
const AuthPackage = require("./clases/authPackage");
const { Client, Intents } = require("discord.js");
const { Manager } = require("./modules/embeds");
const config = require("../config/config.json");

class ManagerNight {
    constructor(client, options) {
        this.client = client;
        this.options = options;

        this.validatePackageKey();
        this.validateClient();
        this.initClient();

        this.licence = new LicenceAuth(this, {
            url: options.licence.url,
            licence: options.licence.licence,
            product: options.licence.product,
            version: options.licence.version,
            api_key: options.licence.api_key,
        });

        this.authPackage = new AuthPackage(this, {
            packageKey: options.manager.packageKey,
        });

        this.startManagerStatusCronJob();
    }

    validatePackageKey() {
        if (!this.authPackage.validatePackageKey()) {
            throw new Error(`${config.errors["1_package_key"]}`);
        }
    }
    
    validateClient() {
        if (!(this.client instanceof Client) || !this.client.options) {
            throw new Error(`${config.errors["1_client"]}`);
        }
    }

    initClient() {
        this.client.once("ready", async () => {
            console.log("Bot is ready!");
            await this.authLicence();
            setTimeout(async () => {
                await this.loginConsole();
            }, 5000);
        });

        this.client.on("interactionCreate", async (interaction) => {
            if (interaction.isContextMenuCommand()) {
                await this.handleContextMenuCommand(interaction);
            }
        });
    }

    async handleContextMenuCommand(interaction) {
        const command = this.client.commands.get(interaction.commandName);
        if (!command) {
            throw new Error(`${config.errors["1_command"]}`);
        }
        await command.execute(interaction, this.client);
    }

    async authLicence() {
        process.setMaxListeners(0);
        const isValidLicence = await this.licence.validate();

        if (!isValidLicence) {
            console.log(`${redBright.bold("[Night]")} ${config.errors["1_licence"]}`);
            this.client.destroy();
        }
    }

    async loginConsole() {
        try {
            await loginConsole(
                this.options.manager.addons,
                this.options.manager.package,
                this.client
            );
        } catch (error) {
            console.error("Error while login to console:", error.message);
        }
    }

    startManagerStatusCronJob() {
        try {
            const job = new CronJob(
                "0 1,9,17,23,29,35,41,47,53,59 * * * *",
                async () => {
                    await Manager(
                        this.client,
                        this.options.manager.channel_id,
                        this.options.manager.message_id
                    );
                },
                null,
                true,
                "Europe/Berlin"
            );
            job.start();
        } catch (error) {
            console.error("Error while starting cron job:", error.message);
        }
    }
}

module.exports = ManagerNight;
