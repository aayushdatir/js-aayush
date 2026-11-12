// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Aync task completed")
//         resolve()
//     }, 2000)
// })

// promiseOne.then(function(){
//         console.log("Promise consumed")
//     }
// )


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async Task 2")
//         resolve()
//     }, 2000)
// }).then(function(){
//     console.log("Aysnc resolved 2")
// })


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Promist Three")
//         resolve({user: "Ayush", email:'example@gmail.com'})
//     }, 2000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = true;

        if(!error){
            console.log("Promise from PromiseFour")
            resolve({user: 'Arpan Damele', email:'hellothere@gmail.com'})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then(function(user){
    console.log(user)
    return user.user
}).then(function(data){
    console.log(data)
}).catch(function(error){
    console.log(error)
}).finally(() =>{
    console.log('Finally block will be executed wheather error occur or not')
})


async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    }
    catch{
        console.log("Error occured in fetch!!!!!")
    }
}

getAllUsers()
