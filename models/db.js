const Sequelize = require("sequelize")

// Conexão com banco de dados MySQL
const sequelize = new Sequelize('curso_node', 'root', '', {
    host:"localhost",
    dialect: 'mysql'
})

// expostando modulo de banco de dados
module.exports = {
    Sequileze: Sequelize,
    sequelize: sequelize
}