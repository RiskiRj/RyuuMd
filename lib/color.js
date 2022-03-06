const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const RyuuLog = (text, color) => {
	return !color ? chalk.cyan('[Riski developer] ') + chalk.yellow(text) : chalk.cyan('[Riski Developer] ') + chalk.keyword(color)(text)
}

module.exports = {
  color,
  RyuuLog
}