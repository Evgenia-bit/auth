const express = require('express')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000
const sequelize = require('./db')

const app = express()
app.use(express.json())
app.use('/auth', authRouter)


const start = async ()=> {
    try {
        await sequelize.authenticate() //УСТАНАВЛИВАЕМ ПОДКЛЮЧЕНИЕ К БД
        await sequelize.sync() //СВЕРЯЕТ СОСТОЯНИЕ БД СО СХЕМОЙ ДАННЫХ
        app.listen(PORT, ()=> console.log(`Сервер запущен на порту ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()