const chalk = require('chalk');

function logWithLabel(label, message) {
    const labels = {
        error: chalk.red('[ERROR]'),
        success: chalk.green('[SUCCESS]'),
        debug: chalk.blue('[DEBUG]'),
        info: chalk.yellow('[INFO]'),
    };

    const formattedLabel = labels[label] || label || '';

    console.log(`${formattedLabel} ${message}`);
}

module.exports = {
    logWithLabel,
};
