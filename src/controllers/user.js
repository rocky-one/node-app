const user = async (ctx, next) => {
    ctx.result = {
        list: [1,2,3,4]
    }
    let time = Math.random()*100 +  Math.random()* 1000
    await new Promise(resolve => {
        setTimeout(() => {
            resolve()
            console.log(process.pid, time)
        },time)
    })
    return next()
}

module.exports = user