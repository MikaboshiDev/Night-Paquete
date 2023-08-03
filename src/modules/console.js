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

async function loginConsole(Minecraft, Whatsapp, Manager, Addons, Package, Client) {
    console.log(cyan.bold('MANAGER STATUS━━━━━━━━━━━━━━━━━━━┓'));
    console.log(`${cyan.bold('┃')} Addon Minecraft: ${Minecraft === true ? green.bold('Online') : redBright.bold('Offline')}`);
    console.log(`${cyan.bold('┃')} Addon Whatsapp: ${Whatsapp === true ? green.bold('Online') : redBright.bold('Offline')}`);
    console.log(`${cyan.bold('┃')} Addon Manager: ${Manager === true ? green.bold('Online') : redBright.bold('Offline')}`);
    console.log(`${cyan.bold('┃')} Addon Youtube: ${green.bold('Online')}`);
    console.log(cyan.bold('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'));

    console.log(yellow.bold('STATS COMMANDS━━━━━━━━━━━━━━━━━━━┓'));
    console.log(`${yellow.bold('┃')} Total Prefix: ${green.bold(Client.precommands.size)}`);
    console.log(`${yellow.bold('┃')} Total Commands: ${green.bold(Client.commands.size)}`);
    console.log(`${yellow.bold('┃')} Total Events: ${green.bold(Client.events.size)}`);
    console.log(`${yellow.bold('┃')} Total Addons: ${green.bold(Addons)}`);
    console.log(yellow.bold('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'));

    console.log(redBright.bold('BOT INFO━━━━━━━━━━━━━━━━━━━━━━━━━┓'));
    console.log(`${redBright.bold('┃')} Bot Version: ${green.bold(Package.version)}`);
    console.log(`${redBright.bold('┃')} Bot Author: ${green.bold(Package.author)}`);
    console.log(`${redBright.bold('┃')} Bot Name: ${green.bold(Client.user.username)}`);
    console.log(`${redBright.bold('┃')} Host Platform: ${green.bold(os.platform())}`);
    console.log(`${redBright.bold('┃')} Host Name: ${green.bold(os.hostname())}`);
    console.log(redBright.bold('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'));
}

module.exports = { loginConsole }