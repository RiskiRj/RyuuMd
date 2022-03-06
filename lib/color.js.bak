const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const RyuuLog = (text, color) => {
	return !color ? chalk.cyan('[RYUUKA TEAM] ') + chalk.yellow(text) : chalk.cyan('[RYUUKA TEAM] ') + chalk.keyword(color)(text)
}

module.exports = {
  color,
  RyuuLog
}