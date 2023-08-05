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

const licences = require("../../config/licences.json");
class AuthPackage {
    constructor(managerNight, options) {
        this.managerNight = managerNight;
        this.options = options;
        this.licenceKey = options.packageKey;
    }

    validatePackageKey() {
        const isValidKey = licences.includes(this.licenceKey);
        if (!isValidKey) {
            console.error("Invalid package key. Please provide a valid 12-digit key.");
            this.managerNight.client.destroy();
        }
        return isValidKey;
    }
}

module.exports = AuthPackage;