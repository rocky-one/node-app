const success = (ctx) => {
    if(ctx.result) {
        ctx.body = {
            code: 200,
            message: '成功',
            data: ctx.result
        }
    }
}

const fail = (ctx, next) => {
    return next().catch(err=> {
        ctx.body = {
            code: 500,
            message: '失败',
            data: null
        }

        return Promise.resolve()
    })
}
module.exports = {
    success,
    fail
} 