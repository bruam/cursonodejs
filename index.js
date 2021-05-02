const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

// Config
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
// Rotas

    app.get('/', function(req, res){
        Post.all().then(function(posts){
            res.render('home', {posts: posts})
        })
    })

    app.get('/cad', function(req,res){ // rota get
        res.render('formulario')
    })

    app.post('/add', function(req,res) { // rota post
        // manda informacoes do formulario para o banco
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            // res.send("Post criado com sucesso!")
            res.redirect('/')
        }).catch(function(erro){
            res.send(`Houve um erro: ${erro}`)
        })
        // most4ando dados dos campos titulo e conteudo do formulario
        //res.send(`Texto: ${req.body.titulo} Conteudo: ${req.body.conteudo}`)
    })

    app.listen(8081, function(){
        console.log("Servidor rodando em http://localhost:8081");
    });