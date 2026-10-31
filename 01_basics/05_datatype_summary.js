//Primitive datatype
//String, Number, Boolean, Symbol, BigInt, null, undefined

let bigNumber = 234583493494n
console.log(bigNumber)

let num1 = Symbol(123)
let num2 = Symbol(123)

// console.log(num1 === num2)

//Non Primitive
//Array, Objects, Functions

const heros = ["Ironman", "Captain America", "Thor"]

// console.log(heros)

const student = {
    id : 123,
    Name : "Ayush",
    City : "Pune"
}

let myFunction = function(){
    console.log("From function")
}

//type of each datatype

// console.log(typeof myFunction)  //function or function object
// console.log(typeof heros)      //object
console.log(typeof student)    //object
console.log(typeof undefined)  //undefined
console.log(typeof null)      //object
console.log(typeof num1)      //symbol
console.log(typeof bigNumber) //bigint



