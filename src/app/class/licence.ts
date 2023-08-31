import { logWithLabel } from '../controllers/prefijo.controllers';
import axios, { AxiosResponse } from 'axios';
class licenceAuth {
   api_key: string;
   api_url: string;
   options: {
      licence: string;
      product: string;
      version: string;
   };

   constructor(options: { licence: string; product: string; version: string }) {
      this.api_url = 'https://104.128.49.50:25510/api/client';
      this.api_key = 'DDkPTP8vbarqezj7q7D8jOHXMjZzB654zu1wc3oYNbwFYOOXZVL';
      this.options = options;
   }

   async auth(): Promise<any> {
      try {
         const res: AxiosResponse = await axios.post(
            this.api_url,
            {
               licence: this.options.licence,
               product: this.options.product,
               version: this.options.version,
            },
            {
               headers: {
                  Authorization: this.api_key,
               },
            }
         );
         return res.data;
      } catch (err) {
         logWithLabel("debug", `${err}`)
         process.exit(1);
      }
   }
}

export default licenceAuth;
