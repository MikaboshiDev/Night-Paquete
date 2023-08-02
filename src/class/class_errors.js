class errorControls {
    constructor(manager, options) {
        this.manager = manager;
        this.options = options;
    }

    get handler() {
        return this.options.errorHandler;
    }

    get commands() {
        return this.options.errorCmds;
    }

    errorHandler() {
        return async function ({ error, status }) {
            console.log(redBright.bold(`[Error]`) + white.bold(` ${error.stack}`));
            const nombre = error.stack.split("\n")[1].split("/").slice(-1)[0].split(" ")[0];
            const tiempo = new Date().toLocaleString("es-ES", { timeZone: "America/Argentina/Buenos_Aires" });
            console.table([{ Nombre: nombre, Tiempo: tiempo, Estado: status }], ["Name", "Time", "Status"]);
        }
    }

    errorCmds() {
        return async function ({ error, status, name }) {
            const tiempo = new Date().toLocaleString("es-ES", { timeZone: "America/Argentina/Buenos_Aires" });
            console.table([{ Tiempo: tiempo, Estado: status, Comando: name }], ["Name", "Time", "Status", "Command"]);
        }
    }
}

module.exports = { errorControls };