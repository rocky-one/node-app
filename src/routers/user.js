const Router = require('koa-router')
const user = require('../controllers/user')

const routers = new Router()

routers.get('/user', user)

module.exports = routers