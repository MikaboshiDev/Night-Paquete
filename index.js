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

import errorConsole from "./src/scripts/errors_console.js";
import { EmbedBuilder, Message } from 'discord.js';
import { get } from "superagent";
import { redBright } from "chalk";

/**
 * 
 * @param {Boolean} pass
 * @param {String} channel
 * @param {String} res
 * 
 */
async function redditPublish(pass, channel, res) {
    if (pass == false) return;
    if (!channel) return;
    const json = await res.json();

    const embed = new EmbedBuilder()
        .setTitle(json[0].data.children[0].data.title)
        .setURL(`https://reddit.com${json[0].data.children[0].data.permalink}`)
        .setImage(json[0].data.children[0].data.url)
        .setColor('Random')
        .setFooter({
            text: `👍 ${json[0].data.children[0].data.ups} | 💬 ${json[0].data.children[0].data.num_comments}`,
            iconURL: 'https://cdn.discordapp.com/emojis/869202202914977822.png?v=1'
        })
        .setTimestamp();
    channel.send({ embeds: [embed] }).catch((err) => {
        console.log(redBright(`[Error]`) + err)
    });
}

/**
 * 
 * @param {String} action
 * 
 */
async function waifuApi(action) {
    try {
        const { body } = await get(`https://api.waifu.pics/sfw/${action}`);
        return body.url;
    } catch (err) {
        console.log(redBright(`[Error]`) + err)
    }
}

/**
 * 
 * @param {Number} delayInms
 * 
 */
function delay(delayInms) {
    try {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(2);
            }, delayInms);
        });
    } catch (e) {
        console.log(String(e.stack).grey.bgRed)
    }
}

function nFormatter(num, digits = 2) {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function (item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}


export default { 
    redditPublish, waifuApi, delay, nFormatter, errorConsole
}