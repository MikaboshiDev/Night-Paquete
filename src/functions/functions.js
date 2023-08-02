const { EmbedBuilder, Message } = require('discord.js');
const { redBright } = require("chalk");
const { get } = require("superagent");

/**
 * 
 * @param {Number} num 
 * @param {Number} digits 
 * 
 */
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

module.exports = { nFormatter, waifuApi, redditPublish }