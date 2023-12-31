<h1 align="center">
  <img src="https://cdn.discordapp.com/attachments/1134529955330535487/1136009848526491648/7.gif" alt="BOT VERSION"/><br/>NEKO PACKAGE<br/>
  <img src="https://app.travis-ci.com/MikaboshiDev/Night-Support.svg?branch=main" alt="Travis Build"/>
  <img src="https://img.shields.io/badge/Node.js-v16-%2334d058?style=flat-square&logo=npm&logoColor=fff" alt="Node Version"/>
  <img src="https://img.shields.io/badge/Version-1.0.5-%2334d058?style=flat-square&logo=npm&logoColor=fff" alt="Version"/>
  <img src="https://img.shields.io/badge/Status-Online-%2334d058?style=flat-square&logo=npm&logoColor=fff" alt="Status"/>
</h1>

## 📄 Intraduccion

**NEKO PACKAGE** es un paquete de discord.js que contiene comandos, eventos, funciones y más para facilitar el desarrollo de bots de discordia.
este paquete es de uso exclusivo para bots de discordia, no se recomienda su uso para otros proyectos aparte de los que se desarrollen por `Hanzel 悟`

## 🪙 Estadisticas

![Package Private](https://repobeats.axiom.co/api/embed/942b1cc2f77ede96220b334dac8b6535c1196ecf.svg 'Repobeats analytics image')

## 📦 Instalacion

Para instalar el paquete solo debes ejecutar el siguiente comando en la terminal de tu proyecto.

```sh
npm i night-controls
```

## 📚 Documentacion

Documentacion del paquete [aqui](https://luiss-horus.gitbook.io/documentacion/), no olvides pasar por el [dashboard](https://bit.ly/nightdashboard) para ver los comandos y eventos que contiene el paquete.
en caso de que tengas dudas o errores con el paquete puedes unirte al [servidor de soporte](https://discord.gg/pgDje8S3Ed) para recibir ayuda.

- [Documentacion](https://bit.ly/nightdevelopment)
- [Dashboard](https://bit.ly/nightdashboard)

## 💻 Ejemplo

El paquete cuenta con clases y funciones especializadas para facilitar el control del bot de discord por medio de log, licencias, addons, etc. para usar el paquete solo debes importarlo en tu archivo principal y crear una instancia de la clase `NightManager, NightControls, NightDarkmode` con los parametros que se muestran a continuacion como ejemplo.

### NightManager (Clase)

```js
const { NightManager } = require("night-controls");
const { r_client } = require("discord.js");
const manager = new NightManager(r_client, {
  package: require("./package.json")
  licence: {
    licence: "ADTY-1234-5678-9101",
    api_key: "1wwd8wd8dw8ew7e7iodvdwdwer",
    product_id: "Bot_Discord",
    version: "1.0.0",
    url: "https://271.0.0.1:3000/api/r_client"
  }
});
```

### NightDarkmode (Clase)

```js
const { NightDarkmode } = require('night-controls');
const { r_client } = require('discord.js');
const darkmode = new NightDarkmode(r_client, {
   general: {
      enabled: true,
      serverId: 'server_id',
   },
});
```

recuerda es un ejemplo por lo que descubrir el resto de funciones y paquetes depende de ti suerte 👍.

## 📝 Licencia

**NEKO PACKAGE** es un proyecto de código abierto con licencia MIT, por lo que puede usarlo para lo que desee, solo no elimine los créditos del paquete.

<table>
  <tr>
    <td align="center">
      <a href="https://luiss-horus.gitbook.io/documentacion/" target="_blank">
      <img src="https://cdn.discordapp.com/avatars/679560282929889331/cddaf2a17070d21133784a48010463bf.webp" width="100px;" alt=""/><br /><sub><b>Horus</b></sub></a><br />
      <a href="https://bit.ly/nightdashboard" title="Code">💻</a></td>
    <td align="center">
      <a href="https://tienda.demonscraft.live/" target="_blank">
      <img src="https://cdn.discordapp.com/avatars/981339172231077959/9cdca50bb301a589697a5965c4d8ec76.jpg" width="100px;" alt=""/><br /><sub><b>Steve Game</b></sub></a><br />
      <a href="https://www.tiktok.com/@demonscraft1?_op=1&_r=1&_t=8dGvpGDEdFd" title="Code">👍</a>
    </td>
  </tr>
</table>

## 📜 Creditos

Este paquete se encuentra en desarrollo de momento por lo que no se garantiza su funcionamiento al 100%, si encuentras algun error o bug puedes reportarlo en el [servidor de soporte](https://discord.gg/pgDje8S3Ed) para que sea solucionado lo mas pronto posible.
