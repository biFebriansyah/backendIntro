const db = require('../configs/db')
const models = {}

models.getData = function () {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM public.products')
            .then((data) => {
                resolve(data.rows)
            })
            .catch((ers) => {
                console.log(ers)
                reject(ers)
            })
    })
}

models.addData = function ({ name, price, category }) {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO public.products (name, price, category) VALUES($1, $2, $3)', [
            name,
            price,
            category
        ])
            .then(() => {
                resolve('Data berhasil disimpan')
            })
            .catch((ers) => {
                reject(ers)
            })
    })
}

module.exports = models
