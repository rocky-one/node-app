const Koa = require('koa')
const cluster = require('cluster')
const bodyParser = require('koa-bodyparser')()
const routers = require('./routers/user')
const response = require('./middlewares/response')
const cupCount = require('os').cpus().length
const app = new Koa()

app.use(bodyParser)
app.use(routers.routes(), routers.allowedMethods())
app.use(response.success)
app.listen(3000)
if(cluster.isMaster) {
    // for(let i = 0; i < cupCount; i++) {
    //     cluster.fork();
    // }
}else{
    console.log(2)
}


module.exports = app