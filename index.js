const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require("sequelize")

// Config
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    // Conexão com banco de dados MySQL
    const sequelize = new Sequelize('curso_node', 'root', '', {
        host:"localhost",
        dialect: 'mysql'
    })
// Rotas
    app.get('/cad', function(req,res){ // rota get
        res.render('formulario')
    })

    app.post('/add', function(req,res) { // rota post
        res.send('FORMULÁRIO ENVIADO!')
    })

    app.listen(8081, function(){
        console.log("Servidor rodando em http://localhost:8081");
    });