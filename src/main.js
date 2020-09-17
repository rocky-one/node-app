const cluster = require('cluster');
const cupCount = require('os').cpus().length;

if(cluster.isMaster) {
    // for(let i = 0; i < cupCount; i++) {
    //     cluster.fork();
    // }
}else{
    console.log(2)
}