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
const os = require("node:os");

/**
 * 
 * @param {Client} client 
 * @param {String} channel_id
 * @param {String} message_id
 */
async function Manager(client, channel_id, message_id) {
    try {
        const createEmbed = (author, fields) => {
            return new EmbedBuilder()
                .setAuthor({ name: author })
                .addFields(fields)
                .setColor("Random")
                .setTimestamp()
                .setFooter({ text: `Process Requested by ${client.user.username}`, iconURL: client.user.displayAvatarURL({ forceStatic: true }) });
        };

        const botInfoFields = [
            { name: "Total Process", value: "`\`\`\`yml\n#1 Shards\n\`\`\``", inline: true },
            { name: "Total Users", value: "`\`\`\`yml\n${client.users.cache.size}\n\`\`\``", inline: true },
            { name: "Ping-API", value: "`\`\`\`yml\n${client.ws.ping}ms\n\`\`\``", inline: true },
            { name: "Total Players", value: "`\`\`\`yml\n${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}\n\`\`\``", inline: true },
            { name: "Total Servers", value: "`\`\`\`yml\n${client.guilds.cache.size}\n\`\`\``", inline: true },
            { name: "Cpu Working", value: "`\`\`\`yml\n${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%\n\`\`\``", inline: true }
        ];

        const coreInfoFields = [
            { name: "Commands", value: "`\`\`\`yml\n${client.commands.size} [/]\n\`\`\`", inline: true },
            { name: "Prefix", value: "`\`\`\`yml\n${client.precommands.size} [!]\n\`\`\`", inline: true },
            { name: "Buttons", value: "`\`\`\`yml\n${client.buttons.size} [-]\n\`\`\`", inline: true },
            { name: "Menus", value: "`\`\`\`yml\n${client.menus.size} [▼]\n\`\`\``", inline: true },
            { name: "Events", value: "`\`\`\`yml\n${client.events.size} [~]\n\`\`\``", inline: true },
            { name: "Modals", value: "`\`\`\`yml\n${client.modals.size} [*]\n\`\`\``", inline: true }
        ];

        const systemInfoFields = [
            { name: "Platform", value: "`\`\`\`yml\n${os.platform()}\n\`\`\``", inline: true },
            { name: "Arch", value: "`\`\`\`yml\n${os.arch()}\n\`\`\``", inline: true },
            { name: "Cpu", value: "`\`\`\`yml\n${os.cpus()[0].model}\n\`\`\``", inline: true },
            { name: "Cpu Working", value: "`\`\`\`yml\n${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%\n\`\`\``", inline: true },
            { name: "Cpu Free", value: "`\`\`\`yml\n${(process.cpuUsage().user / 1024 / 1024).toFixed(2)}%\n\`\`\``", inline: true },
            { name: "Memory Total", value: "`\`\`\`yml\n${(os.totalmem() / 1024 / 1024).toFixed(2)}MB\n\`\`\``", inline: true }
        ];

        const createButtonsRow = () => {
            return new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId("Manager-Reinicio")
                        .setLabel("Restart")
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId("Manager-Database")
                        .setLabel("Database")
                        .setStyle(ButtonStyle.Danger),
                    new ButtonBuilder()
                        .setCustomId("Manager-Sistemas")
                        .setLabel("Systems")
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId("Manager-Emergencia")
                        .setLabel("Emergency")
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId("Manager-Restablecer")
                        .setLabel("Restore")
                        .setStyle(ButtonStyle.Danger)
                );
        };

        const channel = await client.channels.fetch(channel_id);
        const message = await channel.messages.fetch(message_id);
        message.edit({
            embeds: [
                createEmbed("BASE CORE INFORMATION", coreInfoFields),
                createEmbed("GENERAL BOT INFORMATION", botInfoFields),
                createEmbed("SYSTEM INFORMATION", systemInfoFields)
            ], components: [
                createButtonsRow()
            ]
        });
    } catch (error) {
        console.error(`Error while executing Manager function: ${error.message}`);
        console.error(error);
    }
}

module.exports = { Manager };
