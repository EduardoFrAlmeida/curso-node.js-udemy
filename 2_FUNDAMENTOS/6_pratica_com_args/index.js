// externo
const minimist = require('minimist')

// interno
const moduloSoma = require('./soma').soma

const args = minimist(orocess.argv.slice(2))

const a = parseInt(args['a'])
const b = parseInt(args['b'])

soma(a, b)
