const Router = require('koa-router')
const user = require('../controllers/user')
const reload = require('../controllers/reload')
const routers = new Router()

routers.get('/user', user)

routers.get('/reload', reload)


module.exports = routers