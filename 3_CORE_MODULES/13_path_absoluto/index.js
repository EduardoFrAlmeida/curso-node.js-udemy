const path = require('path')

// path absoluto
console.log(path.resolve('reste.txt'))

// formar patch
const midFolder = 'relatorios'
const fileName = 'matheus.txt'

const finalPath = path.join('/', 'arquivos', midFolder, fileName )

console.log(finalPath)