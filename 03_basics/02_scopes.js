//Scopes
let a = 300

if(true){
    let a = 20
    // console.log("Inner Loop "+ a)
}

// console.log(a)

function One(){
    let userName = "Aayush"

    function Two(){
        let website = "www.W3school.com"

        console.log(`UserName is ${userName}`)
    }
    // console.log(website)

    Two()
}

//One()
// Func2()
//  myFunc()

let myFunc = function(){
    console.log("In first Function")
}

function Func2(){
    console.log("In second Function")
}

// myFunc()
