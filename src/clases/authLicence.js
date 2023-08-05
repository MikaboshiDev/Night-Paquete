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

const axios = require("axios");
class LicenceAuth {
    constructor(managerNight, options) {
        this.managerNight = managerNight;
        this.options = options;
    }

    async validate() {
        try {
            const response = await axios.post(
                this.options.url,
                {
                    license: this.options.licence,
                    product: this.options.product,
                    version: this.options.version
                },
                {
                    headers: {
                        Authorization: this.options.api_key
                    }
                }
            );

            if (response.data?.status_overview === "success" && response.data?.status_code === 200) {
                return true;
            } else {
                this.handleInvalidLicense();
                return false;
            }
        } catch (error) {
            console.error("Error while validating the license:", error.message);
            this.handleInvalidLicense();
            return false;
        }
    }

    handleInvalidLicense() {
        console.log(chalk.redBright("[Error] License validation failed."));
        this.managerNight.client.destroy();
    }
}

module.exports = LicenceAuth;
