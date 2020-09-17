const user = async (ctx, next) => {
    ctx.result = {
        list: [1,2,3]
    }
    return next()
}

module.exports = user