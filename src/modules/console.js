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
const { Client } = require("discord.js");
const os = require("node:os");

async function loginConsole(addons, package, client) {
    console.log(cyan.bold('HOSTING STATUS━━━━━━━━━━━━━━━━━━━┓'));
    console.log(`${cyan.bold('┃')} Cpu Arquitecture: ${green.bold(os.arch())}`);
    console.log(`${cyan.bold('┃')} Cpu Model: ${green.bold(os.cpus()[0].model)}`);
    console.log(`${cyan.bold('┃')} Memory Free: ${green.bold(`${Math.round(os.freemem() / 1024 / 1024)} MB`)}`);
    console.log(`${cyan.bold('┃')} Machine Uptime: ${green.bold(`${Math.round(os.uptime() / 60 / 60)} Hours`)}`);
    console.log(`${cyan.bold('┃')} Network Interface: ${green.bold(os.networkInterfaces().eth0[0].address)}`);
    console.log(`${cyan.bold('┃')} Network Interface: ${green.bold(os.networkInterfaces().eth0[0].mac)}`);
    console.log(cyan.bold('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'));

    console.log(yellow.bold('STATS COMMANDS━━━━━━━━━━━━━━━━━━━┓'));
    console.log(`${yellow.bold('┃')} Total Prefix: ${green.bold(client.precommands.size)}`);
    console.log(`${yellow.bold('┃')} Total Commands: ${green.bold(client.commands.size)}`);
    console.log(`${yellow.bold('┃')} Total Events: ${green.bold(client.events.size)}`);
    console.log(`${yellow.bold('┃')} Total Addons: ${green.bold(addons)}`);
    console.log(yellow.bold('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'));

    console.log(redBright.bold('BOT INFO━━━━━━━━━━━━━━━━━━━━━━━━━┓'));
    console.log(`${redBright.bold('┃')} Bot Version: ${green.bold(package.version)}`);
    console.log(`${redBright.bold('┃')} Bot Author: ${green.bold(package.author)}`);
    console.log(`${redBright.bold('┃')} Bot Name: ${green.bold(client.user.username)}`);
    console.log(`${redBright.bold('┃')} Host Platform: ${green.bold(os.platform())}`);
    console.log(`${redBright.bold('┃')} Host Name: ${green.bold(os.hostname())}`);
    console.log(redBright.bold('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'));
}

module.exports = { loginConsole }