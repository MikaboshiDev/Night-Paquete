import chalk from 'chalk';

type Labels =
   | 'error'
   | 'success'
   | 'debug'
   | 'shards'
   | 'pterodactyl'
   | 'database'
   | 'dashboard'
   | 'socket'
   | 'api_discord'
   | 'info';

function logWithLabel(label: Labels, message: string) {
   const labels: Record<Labels, string> = {
      error: chalk.red('[ERROR]'),
      success: chalk.green('[SUCCESS]'),
      debug: chalk.blue('[DEBUG]'),
      shards: chalk.yellow('[SHARDS]'),
      pterodactyl: chalk.magenta('[PTERODACTYL]'),
      database: chalk.cyan('[DATABASE]'),
      dashboard: chalk.white('[DASHBOARD]'),
      socket: chalk.cyan('[SOCKET]'),
      api_discord: chalk.yellow('[API_DISCORD]'),
      info: chalk.grey('[INFO]'),
   };

   const formattedLabel = labels[label] || label || '';

   console.log(`${formattedLabel} ${message}`);
}

export { logWithLabel };
