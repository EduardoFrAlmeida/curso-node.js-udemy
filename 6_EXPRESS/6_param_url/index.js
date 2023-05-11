const express = require('express')
const app = express()
const port = 3000 // variável ambiente

const path = require("path")

const basePath = path.join(__dirname, 'templates')

const checkAuth = function (req, res, next) {
    req.authStatus = true

    if(req.authStatus) {
        console.log('Está logado, pode continuar')
        next()
    } else {
        console.log('Não está logado, faça o login para continuar')
    }
}

app.use(checkAuth)

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    // leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos buscando um usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {

    console.log(`App rodando na porta ${port}`)

})