const db = require('../configs/db')
const models = {}

models.getData = function () {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM public.users ORDER BY product_id DESC')
            .then((data) => {
                resolve(data.rows)
            })
            .catch((ers) => {
                console.log(ers)
                reject(ers)
            })
    })
}

models.getByUsername = function (users) {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM public.users WHERE username = $1', [users])
            .then((data) => {
                resolve(data.rows)
            })
            .catch((ers) => {
                console.log(ers)
                reject(ers)
            })
    })
}

models.addData = function ({ username, hashPassword }) {
    return new Promise((resolve, reject) => {
        db.query(
            'INSERT INTO public.users (username, "password", created_at, update_at) VALUES($1, $2, now(), now())',
            [username, hashPassword]
        )
            .then(() => {
                resolve('Data berhasil disimpan')
            })
            .catch((ers) => {
                reject(ers)
            })
    })
}

module.exports = models
