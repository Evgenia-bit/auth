const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    'auth',
    'postgres',
    'postgres',
    {
        dialect: "postgres",
        host: 'localhost',
        port: 5432,
    }
)