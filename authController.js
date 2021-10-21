const { User, Role } = require('./models/models')

class AuthController {
    async registration(req, res) {
        try {
            const {username, password} = req.body
            const candidate = User.findOne({where: username})
            if(candidate) {
                return res.json({message: 'Пользователь с таким имененм уже существует!'})
            }
            const user = new User
        } catch (e) {
            console.log(e)
            res.statuc(400).json('Ошибка.......')
        }
    }
    async login(req, res) {
        try {

        } catch (e) {
            console.log(e)
            res.statuc(400).json('Ошибка.......')
        }
    }
    async getUsers(req, res) {
        try {
            const user = await Role.create()
            const admin = await Role.create({value: 'ADMIN'})
            return res.json({user, admin})
        } catch (e) {
            console.log(e)
            res.statuc(400).json('Ошибка.......')
        }
    }
}
module.exports = new AuthController()