const { redBright, greenBright, white } = require("chalk")
const config = require("../../config/config.json");
const Cryptr = require("cryptr");
const axios = require("axios");

const cryptr = new Cryptr('asdf3fd3d3g8djd4asdf3fd3d3g8djd4');
module.exports = class authLicence {
    constructor(manager, options) {
        this.manager = manager
        this.options = options
    }

    async init() {
        const res = await axios.post(
            this.options.url,
            {
                license: this.options.licence,
                product: this.options.product,
                version: this.options.version,
            },
            {
                headers: {
                    Authorization: this.options.api_key,
                }
            }
        ).catch(e => {
            console.log(chalk.red("[Error") + cryptr.decrypt(crypt_data.error));
            process.exit(1);
        });

        if (res.data?.status_overview !== "success" && res.data?.status_code !== 200) {
            console.log(`${redBright(`[Error]`)} ${cryptr.decrypt(config.licence.decline)}`);
            status_code = false;
        } else if (res.data?.status_overview === "success" && res.data?.status_code === 200) {
            console.log(`${greenBright(`[Success]`)} ${cryptr.decrypt(config.licence.accept)}`)
            status_code = true;
        } else {
            console.log(`${redBright(`[Error]`)} ${cryptr.decrypt(config.licence.decline)}`)
            status_code = false;
        }

        return status_code;
    }
}