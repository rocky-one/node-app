const cluster = require('cluster')
const cupCount = require('os').cpus().length
const app = require('./app')

function createFork() {
    const worker = cluster.fork()
    worker.on('message', function(msg){
        if(msg.reload) {
            reload()
        }
    })
}

// 平滑启动
function reload() {
    let workers = Object.keys(cluster.workers)
    let len = workers.length
    let sum = 0
    function kill(key) {
        if(sum === len) return
        const curWorker = cluster.workers[key]
        curWorker.send('disconnect')
        // 开始断开
        curWorker.disconnect()
        // 断开完成  
        curWorker.once('disconnect', function(){  
            console.log('断开完成: '+key)
        });  
        // 新启动一个进程 
        const newWorker = cluster.fork()

        newWorker.on('error', function(err){  
            console.log(err.stack);  
        });  
        // 监听新进程  
        newWorker.once('listening', function(){
            console.log('启动完成: '+newWorker.id)
            kill(workers[++sum]);  
        });  

    }
    kill(workers[0])
}
// 主线程
if(cluster.isMaster) {
    for(let i = 0; i < cupCount; i++) {
        createFork()
    }  
}else{
    app()
    process.on('message', function(msg){  
        if(msg === 'disconnect'){ 
            console.log('exit') 
            process.exit(0);  
        }  
    });  
}