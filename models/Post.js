const db = require('./db')

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequileze.STRING
    },
    conteudo: {
        type: db.Sequileze.TEXT
    }
})

// sincronizar banco (executar apenas uma vez)
//Post.sync({force: true})

// exportar model Post
module.exports = Post