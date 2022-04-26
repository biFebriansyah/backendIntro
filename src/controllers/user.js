const models = require('../models/users')
const respone = require('../helpers/respone')
const { HashPasswords } = require('../helpers/hash')
const users = {}

users.getAll = async (req, res) => {
    try {
        const data = await models.getData()
        return respone(res, 200, data)
    } catch (error) {
        return respone(res, 500, error)
    }
}

users.Create = async (req, res) => {
    try {
        const { username, password } = req.body
        const hashPassword = await HashPasswords(password)
        const data = await models.addData({ username, hashPassword })
        return respone(res, 200, data)
    } catch (error) {
        console.log(error)
        res.send('Maaf error terjadi')
    }
}

module.exports = users
