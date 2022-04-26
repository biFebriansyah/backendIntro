const db = require('../configs/db')
const format = require('pg-format')
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

models.getAll = async ({ page, limit, order }) => {
    try {
        let query = format('SELECT * FROM products')

        if (order) {
            query = format(query + ' ORDER BY id %s', order)
        }

        if (page && limit) {
            const offset = (page - 1) * limit
            query = format(query + ' LIMIT %s OFFSET %s', limit, offset)
        }

        const { rows } = await db.query('SELECT COUNT(id) as "count" FROM public.products')
        const counts = rows[0].count

        const meta = {
            next:
                page == Math.ceil(counts / limit)
                    ? null
                    : `/api/v1/product/all?order=${order}&page=${Number(page) + 1}&limit=${limit}`,
            prev:
                page == 1
                    ? null
                    : `/api/v1/product/all?order=${order}&page=${Number(page) - 1}&limit=${limit}`,
            counts
        }

        const prods = await db.query(query)
        return { data: prods.rows, meta }
    } catch (error) {
        console.log(error)
    }
}

models.addData = function ({ name, price, image }) {
    const update_at = new Date().toISOString()
    const created_at = new Date().toISOString()

    return new Promise((resolve, reject) => {
        db.query(
            'INSERT INTO public.products ("name", price, created_at, update_at, image) VALUES($1, $2, $3, $4, $5)',
            [name, price, created_at, update_at, image]
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
