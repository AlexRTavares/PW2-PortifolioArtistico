const express = require('express')
const app = express()

    app.get('/', function (req, res) {
     res.send('Seja Bem Vindo Visitante!')
    })

    app.listen(3000, ()=> {console.log('Servidor Rodando!'
    )});