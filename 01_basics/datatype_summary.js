//Primitive datatype
//String, Number, Boolean, Symbol, BigInt, null, undefined

let bigNumber = 234583493494n
//console.log(bigNumber)

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
    //console.log("From function")
}

//type of each datatype

// console.log(typeof myFunction)  //function or function object
// console.log(typeof heros)      //object
// console.log(typeof student)    //object
// console.log(typeof undefined)  //undefined
// console.log(typeof null)      //object
// console.log(typeof num1)      //symbol
// console.log(typeof bigNumber) //bigint


//*******************Stack and Heap**************************

//Primitive datatype

let age = 18
// console.log(age);
let updatedAge = age;
updatedAge = 25;

// console.log("Updated age is "+ updatedAge)
// console.log("Older age is "+age)

//Non Primitive stores the data in heap memory

let myObj1 = {
    name: "Ayush",
    mailId: "ayush@gmail.com"
}

let myObj2 = myObj1

myObj2.mailId = "hitesh@gmail.com"

console.log(myObj1.mailId)
console.log(myObj1.mailId)




