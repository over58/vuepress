const execSync = require('child_process').execSync
const chalk = require('chalk')
const ora = require('ora')
const spinner = ora().start(chalk.blue('start...\n'))
const argv = require('minimist')(process.argv.slice(2))

spinner.text = 'loading'
spinner.color = 'yellow'
const message = argv.m || argv._[0] || 'feat: update article'
const commands = [
  'git add .',
  `git commit -m "${message}"`,
  'git push'
]

commands.forEach((command) => {
  execSync(command)
})

spinner.succeed(chalk.green('success!\n') + chalk.yellow('[[commit-msg]]  ' + message) + chalk.green('\npush 成功！'))
