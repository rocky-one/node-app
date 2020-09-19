const axios = require('axios')

let nums = 100
let sum = 0
let timer = Math.random() * 100

function getUser(path='user') {
    axios.get('http://localhost:3000/' + path)
    .then(function(response) {
        console.log(response.data)
        sum++
        if(nums > sum) {
            getUser()
        }
    })
}

setTimeout(() => {
    getUser()
}, Math.random() * 100)

setTimeout(() => {
    getUser()
}, Math.random() * 100)

setTimeout(() => {
    getUser()
}, Math.random() * 100)

setTimeout(() => {
    getUser()
}, Math.random() * 100)

setTimeout(() => {
    getUser()
}, Math.random() * 100)


setTimeout(() => {
    getUser()
}, Math.random() * 100)

setTimeout(() => {
    getUser()
}, Math.random() * 100)

setTimeout(() => {
    getUser()
}, Math.random() * 100)

// const setInterval1 = setInterval(() => {
//     sum++
//     timer = Math.random() * 100
//     getUser()
//     if(sum>nums){
//         clearInterval(setInterval1)
//     }
// }, timer)

