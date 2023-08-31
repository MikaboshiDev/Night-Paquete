import { Client } from 'discord.js';
import licenceAuth from './class/licence';
import chalk from 'chalk';

export class ManagerNight extends Client {
   private _client: any;
   private _options: any;
   constructor(_client: any, _options: any) {
      super(_options);
      this._client = _client;
      this._options = _options;

      this.start();
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
            console.log(chalk.redBright(`[ManagerNight] ${data?.status_overview}`));
            process.exit(1);
         }

         if (data?.status_overview === 'success' && data?.status_code === 200) {
            console.log(chalk.greenBright(`[ManagerNight] ${data?.status_overview}`));
         }
      } catch (error) {
         console.error(chalk.redBright(`[ManagerNight] Error: ${error}`));
         process.exit(1);
      }
   }
}
