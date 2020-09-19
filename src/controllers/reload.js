const reload = async (ctx, next) => {
    ctx.result = {
        data: '重新启动'
    }
    process.send({
        reload: true
    })
    return next()
}

module.exports = reload