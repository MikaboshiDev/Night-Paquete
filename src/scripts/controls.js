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
const os = require("node:os");

module.exports = class ControlsNight extends EventEmitter {
    constructor(client, options) {
        super();
        if (!client?.options) throw new Error(`${redBright.bold("[Night]")} ${config.errors["1_client"]}`);
        this.client = client;
    }
}