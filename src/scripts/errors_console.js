const { redBright, white } = require("chalk");

async function ErrorHandler({ error, status }) {
    console.log(redBright.bold(`[Error]`) + white.bold(` ${error.stack}`));
    const nombre = error.stack.split("\n")[1].split("/").slice(-1)[0].split(" ")[0];
    const tiempo = new Date().toLocaleString("es-ES", { timeZone: "America/Argentina/Buenos_Aires" });
    console.table([{ Nombre: nombre, Tiempo: tiempo, Estado: status }], ["Name", "Time", "Status"]);
}

async function ErrorCommands({ error, status, name, message }) {
    const nombre = error.stack.split("\n")[1].split("/").slice(-1)[0].split(" ")[0];
    const tiempo = new Date().toLocaleString("es-ES", { timeZone: "America/Argentina/Buenos_Aires" });
    console.table([{ Nombre: nombre, Tiempo: tiempo, Estado: status, Comando: name }], ["Name", "Time", "Status", "Command"]);
    message.channel.send({
        content: [
            `❌ Hello ${message.author}, an error has occurred in the command \`${name}\` and has been reported to the developer`,
            `we apologize for the inconvenience. **Error:** \`${error.stack}\``
        ].join("\n")
    });
}

module.exports = { ErrorHandler, ErrorCommands }