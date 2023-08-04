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

const { Client, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { redBright, green, yellow, cyan } = require("chalk");
const { loginConsole } = require("./modules/console");
const { Manager } = require("./modules/embeds");
const config = require("../config/config.json");
const licenceAuth = require("./class/licence");
const { EventEmitter } = require("events");
var CronJob = require('cron').CronJob;
const { get } = require("axios");
const os = require("node:os");

module.exports = class ManagerNight extends EventEmitter {
    constructor(client, options) {
        super();

        //Client required variable check
        if (!client?.options) throw new Error(`${redBright.bold("[Night]")} ${config.errors["1_client"]}`);
        this.client = client;

        //Licence system variables
        this._licence = options.licence.licence;
        this.api_key = options.licence.api_key;
        this.product = options.licence.product;
        this.version = options.licence.version;
        this._url = options.licence.url;

        //Manager system variables
        this.Channel = options.manager.channel_id
        this.Message = options.manager.message_id
        this.Package = options.manager.package
        this.Addons = options.manager.addons

        this.client.on("ready", async () => {
            await this.managerStatus();
            await this.authLicence();
            setTimeout(async () => {
                await loginConsole(
                    this.Addons,
                    this.Package,
                    this.client
                );
            }, 5000);
        });

        this.client.on("interactionCreate", async (interaction) => {
            await this.menuInteraction(interaction);
        });
    }

    async menuInteraction(interaction) {
        if (interaction.isContextMenuCommand()) {
            const command = this.client.commands.get(interaction.commandName);
            if (command) {
                await command.execute(interaction, this.client);
            } else throw new Error(`${redBright("[Night]")} ${config.errors["1_command"]}`);
        }
    }

    async authLicence() {
        process.setMaxListeners(0);
        this.licence = new licenceAuth(this, {
            url: this._url,
            licence: this._licence,
            product: this.product,
            version: this.version,
            api_key: this.api_key
        });

        if (this.licence === false) {
            console.log(`${redBright.bold("[Night]")} ${config.errors["1_licence"]}`);
            this.client.destroy();
        }
    }

    async managerStatus() {
        var job = new CronJob('0 1,9,17,23,29,35,41,47,53,59 * * * *', async function () {
            await Manager(this.client, this.Channel, this.Message)
        }, null, true, 'Europe/Berlin');
        job.start();
    }
}