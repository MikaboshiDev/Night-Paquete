import { logWithLabel } from './controllers/prefijo.controllers';
import licenceAuth from './class/licence';
import WebApi from './class/website';
import { Client } from 'discord.js';

export class ManagerNight extends Client {
   private _client: any;
   private _options: any;
   constructor(_client: any, _options: any) {
      super(_options);
      this._client = _client;
      this._options = _options;

      this.start();
      this.website();
   }

   async start() {
      const licenceLogin = new licenceAuth({
         licence: this._options.licence,
         product: this._options.product,
         version: this._options.version,
      });

      try {
         const data = await licenceLogin.auth();
         if (data?.status_overview !== 'success' && data?.status_code !== 200) {
            logWithLabel('error', `Error: ${data?.status_overview}`);
            process.exit(1);
         }

         if (data?.status_overview === 'success' && data?.status_code === 200) {
            logWithLabel('info', `Success: ${data?.status_overview}`);
         }
      } catch (error) {
         logWithLabel('error', `Error: ${error}`);
         process.exit(1);
      }
   }

   async website() {
      const webClass = new WebApi(this._client, {
         webhook: this._options.webhook,
      });

      try {
         setInterval(async () => {
            await webClass.webClient();
         }, 1000 * 60 * 5);
      } catch (error) {
         logWithLabel('error', `Error: ${error}`);
         process.exit(1);
      }
   }
}
