<h1 align="center">
  <img src="https://cdn.discordapp.com/attachments/1134529955330535487/1136009848526491648/7.gif" alt="BOT VERSION"/><br/>NEKO PACKAGE<br/>
  <img src="https://img.shields.io/badge/Discord.js-v14-%2334d058?style=flat-square&logo=npm&logoColor=fff" alt="DJS Version"/>
  <img src="https://img.shields.io/badge/Node.js-v16-%2334d058?style=flat-square&logo=npm&logoColor=fff" alt="Node Version"/>
  <img src="https://img.shields.io/badge/Version-1.0.0-%2334d058?style=flat-square&logo=npm&logoColor=fff" alt="Version"/>
  <img src="https://img.shields.io/badge/Status-Online-%2334d058?style=flat-square&logo=npm&logoColor=fff" alt="Status"/>
</h1>

## 📄 Intraduccion

**NEKO PACKAGE** es un paquete de discord.js que contiene comandos, eventos, funciones y más para facilitar el desarrollo de bots de discordia.
este paquete es de uso exclusivo para bots de discordia, no se recomienda su uso para otros proyectos aparte de los que se desarrollen por `Hanzel 悟`

## 💣 Implementos

| Nombre         | Descripción                                     |
| -------------- | ----------------------------------------------- |
| **Formatos**   | Formatos de texto para mensajes y fechas        |
| **Reddit**     | Busqueda de imagenes en reddit                  |
| **Control**    | Control de errores en el handler y los comandos |
| **Utilidades** | Utilidades para el bot                          |
| **Eventos**    | Eventos para el bot                             |

## Ejemplo de Código

```js
const { redBright, white } = require('chalk');

async function ErrorHandler({ error, status }) {
   console.log(redBright.bold(`[Error]`) + white.bold(` ${error.stack}`));
   const nombre = error.stack
      .split('\n')[1]
      .split('/')
      .slice(-1)[0]
      .split(' ')[0];
   const tiempo = new Date().toLocaleString('es-ES', {
      timeZone: 'America/Argentina/Buenos_Aires',
   });
   console.table(
      [{ Nombre: nombre, Tiempo: tiempo, Estado: status }],
      ['Name', 'Time', 'Status']
   );
}
```

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
    <td align="center">
      <a href="https://luiss-horus.gitbook.io/documentacion/" target="_blank">
      <img src="https://cdn.discordapp.com/avatars/749072448397246495/ae9d347e38b4a92f46c7b28646017cde.jpg" width="100px;" alt=""/><br /><sub><b>Dragoner</b></sub></a><br />
      <a href="https://bit.ly/nightdashboard" title="Code">🤐</a>
    </td>
  </tr>
</table>
