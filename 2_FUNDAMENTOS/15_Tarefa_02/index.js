const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual o seu nome?',
    },
    {
        name: 'p2',
        message: 'Qual a sua idade?',
    },
])
.then((answers) => {
   
    const respnse = `O nome do usuário é ${answers.nome} e ele tem ${answers.idade} anos!`
    console.log(chalk.bgYellow.black(response))
})
.catch((err) => console.log(err))
