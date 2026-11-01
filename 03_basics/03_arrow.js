const user = {
    name: "Nitesh",
    age: 18,
    welcomeMessage: function(){
        console.log(`Welcome ${this.name}`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.name = "Sam"
// user.welcomeMessage()

// console.log(this)

function Func1(){
    console.log(this)
}

// Func1()

const funcValue = () =>{
    console.log(this)
}

// funcValue()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({name:"ayush"})

console.log(addTwo(8, 8))
