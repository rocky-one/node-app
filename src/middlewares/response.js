const success = (ctx) => {
    if(ctx.result) {
        ctx.body = {
            code: 200,
            data: ctx.result
        }
    }
}


module.exports = {
    success
} 