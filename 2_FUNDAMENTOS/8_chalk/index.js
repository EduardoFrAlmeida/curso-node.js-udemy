const chalk = require('chalk')

const nota = 9

if (nota >= 7) {
    console.log(chalk.green(`Parabéns! Você está aprovado!`))

} else {
    console.log(chalk.bgred(`Você está reprovado!`))
}