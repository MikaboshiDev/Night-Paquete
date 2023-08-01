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

const errorConsole = require("./src/scripts/errors_console.js");
const functionNpm = require("./src/modules/functions.js");
const { EmbedBuilder, Message } = require('discord.js');
const { redBright } = require("chalk");
const { get } = require("superagent");

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



module.exports = {
    redditPublish,
    errorConsole,
    functionNpm
}