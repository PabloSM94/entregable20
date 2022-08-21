import Router from 'koa-router'
import productosController from '../controllers/productosController.js'

const router = new Router({
    prefix: '/api/productos'
})

router.get('/productos-test', productosController.getRandom)

const routes = router.routes()

export default routes