const Sequelize = require("sequelize")
const sequelize = new Sequelize('curso_node', 'root', '', {
    host:"localhost",
    dialect: 'mysql'
})

// Verificando conexao com o banco
// sequelize.authenticate().then(function(){
//     console.log("Conectado com sucesso!")
// }).catch(function(erro){
//     console.log("Falha ao se conectar: "+erro)
// })

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING //campo string com limite de tamanho
    },
    conteudo: {
        type: Sequelize.TEXT //campo string sem limite de tamanho
    }
})

// Postagem.create({
//     titulo: "TITULO POST 1",
//     conteudo: "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf"
// })

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Bruno",
    sobrenome: "Martins",
    idade: 28,
    email: "brunoagmart@gmail.com"
})

// Usuario.sync({force: true})