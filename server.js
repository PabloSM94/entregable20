import Koa from 'koa'
import koaBody from 'koa-body'
import serve from 'koa-static'

import { Server as HttpServer } from 'http'

import productosRouter from './routers/productosRouter.js'

const app = new Koa()

app.use(koaBody())
app.use(serve('public'))

app.use(productosRouter)

export default app