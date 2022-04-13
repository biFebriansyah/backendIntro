const models = require('../models/products')
const respone = require('../helpers/respone')
const product = {}

product.getAll = async (req, res) => {
    try {
        const data = await models.getData()
        return respone(res, 200, data)
    } catch (error) {
        return respone(res, 500, error)
    }
}

product.Create = async (req, res) => {
    try {
        const { name, price, category } = req.body
        const data = await models.addData({ name, price, category })
        res.send({ data })
    } catch (error) {
        res.send('Maaf error terjadi')
    }
}

module.exports = product
