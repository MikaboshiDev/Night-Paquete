import { logWithLabel } from '../controllers/prefijo.controllers';
import { WebhookClient, EmbedBuilder, Client } from 'discord.js';
import { WebApiOptions } from '../interfaces/website.interface';
import axios from 'axios';

export class WebApi {
   private _client: Client;
   private _options: WebApiOptions;

   constructor(client: Client, options: WebApiOptions) {
      this._client = client;
      this._options = options;
   }

   async webClient() {
      const impactEmojis = {
         critical: '🔴',
         major: '🟠',
         minor: '🟡',
         resolved: '✅',
         postmortem: '📋',
      };

      const ram = Math.round(process.memoryUsage().heapUsed / 1024 / 1024);
      const cpu = Math.round(process.cpuUsage().system / 1024 / 1024);
      const servers = this._client.guilds.cache.size;

      try {
         const response = await axios({
            method: 'post',
            url: `http://104.128.49.50:25529/api/status/${this._client.user?.id}/1099013284889370696`,
            data: {
               id: this._client.user?.id,
               image: this._client.user?.displayAvatarURL({
                  forceStatic: false,
                  extension: 'png',
               }),
               status: 'online',
               ram: ram,
               cpu: cpu,
               ping: this._client.ws.ping,
               servers: servers,
               support: 'https://discord.gg/pgDje8S3Ed',
            },
         });

         const webhook = new WebhookClient({ url: this._options.webhook });
         const embed = new EmbedBuilder()
            .setAuthor({
               name: 'Api - Controles',
               iconURL: this._client.user?.displayAvatarURL({
                  forceStatic: false,
                  extension: 'png',
               }),
            })
            .setTitle(`Neko - ${this._client.user?.username}`)
            .setDescription(
               response.data.success
                  ? `${impactEmojis.resolved} Neko is online and ready to go!`
                  : `${impactEmojis.critical} Neko is not online!`
            );

         webhook.send({ embeds: [embed] });
      } catch (error) {
         logWithLabel(
            'error',
            `There was an error sending the webhook: ${error}`
         );
      }
   }
}

export default WebApi;
