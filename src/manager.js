const { nFormatter, redditPublish, waifuApi } = require("./functions/functions");
const { errorControls } = require("./class/class_errors").default;
const config = require("../config/config.json");
const { redBright, white } = require("chalk");
const { EventEmitter } = require("events");

class ManagerNight extends EventEmitter {
    constructor(client, options) {
        super();
        if (!client?.options) throw new Error(redBright("[Night] ") + config.errors["1_client"]);
        this.functions = { nFormatter, redditPublish, waifuApi };
        this.client = client;
    }
}

module.exports = ManagerNight;

