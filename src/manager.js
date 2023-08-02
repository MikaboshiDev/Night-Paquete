const { Client, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputStyle } = require("discord.js")
const { redBright, green, yellow, cyan } = require("chalk");
const config = require("../config/config.json");
const { EventEmitter } = require("events");
const os = require("node:os");

class ManagerNight extends EventEmitter {
    constructor(client, options) {
        super();
        if (!client?.options) throw new Error(`${redBright.bold("[Night]")} ${config.errors["1_client"]}`);
        this.client = client;

        this.Minecraft = options.minecraft.status;
        this.Whatsapp = options.whatsapp.status;
        this.Manager = options.manager.status;
        this.Addons = options.addons.count;
        this.Package = options.package;

        this.client.on("ready", async () => {
            console.log(cyan.bold('MANAGER STATUS━━━━━━━━━━━━━━━━━━━┓'));
            console.log(`${cyan.bold('┃')} Addon Minecraft: ${this.Minecraft === true ? green.bold('Online') : redBright.bold('Offline')}`);
            console.log(`${cyan.bold('┃')} Addon Whatsapp: ${this.Whatsapp === true ? green.bold('Online') : redBright.bold('Offline')}`);
            console.log(`${cyan.bold('┃')} Addon Manager: ${this.Manager === true ? green.bold('Online') : redBright.bold('Offline')}`);
            console.log(`${cyan.bold('┃')} Addon Youtube: ${green.bold('Online')}`);
            console.log(cyan.bold('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'));

            console.log(yellow.bold('STATS COMMANDS━━━━━━━━━━━━━━━━━━━┓'));
            console.log(`${yellow.bold('┃')} Total Prefix: ${green.bold(this.client.precommands.size)}`);
            console.log(`${yellow.bold('┃')} Total Commands: ${green.bold(this.client.commands.size)}`);
            console.log(`${yellow.bold('┃')} Total Events: ${green.bold(this.client.events.size)}`);
            console.log(`${yellow.bold('┃')} Total Addons: ${green.bold(this.Addons)}`);
            console.log(yellow.bold('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'));

            console.log(redBright.bold('BOT INFO━━━━━━━━━━━━━━━━━━━━━━━━━┓'));
            console.log(`${redBright.bold('┃')} Bot Version: ${green.bold(this.Package.version)}`);
            console.log(`${redBright.bold('┃')} Bot Author: ${green.bold(this.Package.author)}`);
            console.log(`${redBright.bold('┃')} Bot Name: ${green.bold(this.client.user.username)}`);
            console.log(`${redBright.bold('┃')} Host Platform: ${green.bold(os.platform())}`);
            console.log(`${redBright.bold('┃')} Host Name: ${green.bold(os.hostname())}`);
            console.log(redBright.bold('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'));
        });

        this.client.on("error", async (error) => {
            console.log(`${redBright.bold("[Night]")} ${config.errors["1_error"]}`)
            console.log(String(error))
        });

        this.client.on("interactionCreate", async (interaction) => {
            await this.menuInteraction(interaction)
        })
    }

    async errorHandler({ error, status }) {
        console.log(`${redBright.bold("[Night]")} ${error.stack}`);
        const nombre = error.stack.split("\n")[1].split("/").slice(-1)[0].split(" ")[0];
        const tiempo = new Date().toLocaleString("es-ES", { timeZone: "America/Argentina/Buenos_Aires" });
        console.table([{ Nombre: nombre, Tiempo: tiempo, Estado: status }], ["Name", "Time", "Status"]);
    }

    async errorCommand({ error, status, name }) {
        console.log(`${redBright.bold("[Night]")} ${error.stack}`);
        const tiempo = new Date().toLocaleString("es-ES", { timeZone: "America/Argentina/Buenos_Aires" });
        console.table([{ Tiempo: tiempo, Estado: status, Comando: name }], ["Name", "Time", "Status", "Command"]);
    }

    async menuInteraction(interaction) {
        if (interaction.isContextMenuCommand()) {
            const command = this.client.commands.get(interaction.commandName);
            if (!command) return;

            await command.execute(interaction, this.client);
        }
    }
}

module.exports = ManagerNight