import productosDao from '../daos/productos/productosDao.js'

const productosController = {
    getRandom: async ctx => {
        ctx.body = {
            productos: await productosDao.getRandom()
        }
        ctx.response.status = 200
    }
}

export default productosController