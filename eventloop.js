async function a1 () {
    console.log('a1 start')
    await a2()
    console.log('a1 end')
}
async function a2 () {
    console.log('a2')
}

console.log('script start')

setTimeout(() => {
    console.log('setTimeout')
}, 0)

Promise.resolve().then(() => {
    console.log('promise1')
})

a1()

let promise2 = new Promise((resolve) => {
    resolve('promise2.then')
    console.log('promise2')
})

promise2.then((res) => {
    console.log(res)
    Promise.resolve().then(() => {
        console.log('promise3')
    })
})
console.log('script end')
// console.log('start')

// Promise.resolve().then(() => {
//     console.log('promise 1')
// })

// setTimeout(() => {
//     console.log('setTimeout 1')
//     Promise.resolve().then(() => {
//         console.log('promise 2')
//         Promise.resolve().then(() => {
//             console.log('promise 3')
//         }).then(() => {
//             console.log('promise 4')
//         })
//     }).then(() => {
//         setTimeout(() => {
//             console.log('setTimeout 2')
//             Promise.resolve().then(() => {
//                 console.log('promise 5')
//             })
//         }, 0)
//         console.log('promise 6')
//     })
//     console.log('setTimeout 2')
// }, 0)

// setTimeout(() => {
//     console.log('setTimeout 3')
//     Promise.resolve().then(() => {
//         console.log('promise 7')
//     })
//     console.log('setTimeout 4')
// }, 0)

// Promise.resolve().then(() => {
//     console.log('promise 8')
// })


