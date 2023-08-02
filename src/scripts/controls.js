const { redBright, green, yellow, cyan } = require("chalk");
const config = require("../config/config.json");
const { EventEmitter } = require("events");
const os = require("node:os");

class ControlsNight extends EventEmitter {
    constructor(client, options) {
        super();
        if (!client?.options) throw new Error(`${redBright.bold("[Night]")} ${config.errors["1_client"]}`);
        this.client = client;
    }
}

module.exports = ControlsNight