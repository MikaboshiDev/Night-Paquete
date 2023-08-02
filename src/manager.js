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

const { Client, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputStyle } = require("discord.js")
const { redBright, green, yellow, cyan } = require("chalk");
const { loginConsole } = require("./modules/console");
const licenceAuth = require("./scripts/licence");
const config = require("../config/config.json");
const { EventEmitter } = require("events");
const os = require("node:os");

module.exports = class ManagerNight extends EventEmitter {
    constructor(client, options) {
        super();
        if (!client?.options) throw new Error(`${redBright.bold("[Night]")} ${config.errors["1_client"]}`);
        this.client = client;

        this.Minecraft = options.minecraft.status;
        this.Whatsapp = options.whatsapp.status;
        this.Manager = options.manager.status;
        this.Addons = options.addons.count;
        this.Package = options.package;

        this.licence = options.licence.licence;
        this.api_key = options.licence.api_key;
        this.product = options.licence.product;
        this.version = options.licence.version;
        this.url = options.licence.url;

        this.client.on("ready", async () => {
            await loginConsole(this.Minecraft, this.Whatsapp, this.Manager, this.Addons, this.Package, this.client);
        });

        this.client.on("error", async (error) => {
            console.log(`${redBright.bold("[Night]")} ${config.errors["1_error"]}`)
            console.log(String(error))
        });

        this.client.on("interactionCreate", async (interaction) => {
            await this.menuInteraction(interaction)
        })
    }

    async menuInteraction(interaction) {
        if (interaction.isContextMenuCommand()) {
            const command = this.client.commands.get(interaction.commandName);
            if (command) {
                await command.execute(interaction, this.client);
            } else throw new Error(`${redBright.bold("[Night]")} ${config.errors["1_command"]}`);
        }
    }

    async init() {
        process.setMaxListeners(0);
        this.licence = new licenceAuth(this, {
            url: this.url,
            licence: this.licence,
            product: this.product,
            version: this.version,
            api_key: this.api_key
        }).then((data) => {
            if (data === true) return true;
            else return undefined;
        }).catch((error) => {
            console.log(`${redBright.bold("[Night]")} ${error.stack}`)
        })

        if (this.licence === undefined) {
            console.log(`${redBright.bold("[Night]")} ${config.errors["1_licence"]}`)
            process.exit(1);
        }
    }

    errorHandler({ error, status }) {
        console.log(`${redBright.bold("[Night]")} ${error.stack}`);
        const nombre = error.stack.split("\n")[1].split("/").slice(-1)[0].split(" ")[0];
        const tiempo = new Date().toLocaleString("es-ES", { timeZone: "America/Argentina/Buenos_Aires" });
        console.table([{ Nombre: nombre, Tiempo: tiempo, Estado: status }], ["Name", "Time", "Status"]);
    }

    errorCommand({ error, status, name }) {
        console.log(`${redBright.bold("[Night]")} ${error.stack}`);
        const tiempo = new Date().toLocaleString("es-ES", { timeZone: "America/Argentina/Buenos_Aires" });
        console.table([{ Tiempo: tiempo, Estado: status, Comando: name }], ["Name", "Time", "Status", "Command"]);
    }
}