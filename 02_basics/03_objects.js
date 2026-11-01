//object litrals

let mySym = Symbol("myKey1")

const jsUser = {
    name: "Ayush",
    age: 18,
    mailId: "ayush@google.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday", "Tuesday"],
    [mySym]: "awdfgsdhf"
}

// console.log(jsUser.age)
// console.log(jsUser["name"])
// console.log(jsUser[mySym])

// jsUser.age = 25;
// console.log(jsUser["age"])
//Object.freeze(jsUser)
// jsUser.age = 100

//  console.log(jsUser["age"])

// console.log(jsUser)

jsUser.gretting = function(){
    console.log("Hello from JSuser");
}

jsUser.gretting()

jsUser.grettingTwo = function(){
    console.log(`Hello from JSUser ${this.name}`)
}

 jsUser.grettingTwo()