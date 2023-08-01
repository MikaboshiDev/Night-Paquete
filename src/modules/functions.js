const { redBright } = require("chalk");
const { get } = require("superagent");

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

module.exports = { 
    delay, nFormatter, waifuApi
}