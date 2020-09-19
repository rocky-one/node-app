const Koa = require('koa')
const bodyParser = require('koa-bodyparser')()
const cors = require('koa2-cors');
const routers = require('./routers/route')
const response = require('./middlewares/response')

function app() {
    const appKoa = new Koa()

    appKoa.use(bodyParser)
    appKoa.use(cors())
    appKoa.use(routers.routes(), routers.allowedMethods())

    appKoa.use(response.success)
    appKoa.use(response.fail)

    appKoa.listen(3000)
}

module.exports = app