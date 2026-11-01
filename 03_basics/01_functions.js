//Functions

function myFunc(){
    console.log("This is my Function")
}

// myFunc()

function sum(num1, num2){
    let result = num1 + num2;
    return result
}

let result = sum(3,4)
// console.log(result)

function isLoggedIn(name){
    if(!name){
        console.log("String parameter is empty")
        return
    }
    return `${name} just logged in`
}

// console.log(isLoggedIn(""))

function calculateCartPrice(val1, val2,...num){
    console.log(num)
}

calculateCartPrice(200,300,700,400)

const mobile = {
  brand: "Samsung",
  model: "S24",
  price: 80000
};

function handleObjects(anyObject){
    //console.log(`Brand is ${anyObject.brand} and price is ${anyObject.price}`)
}

// handleObjects(mobile)
// handleObjects({brand: "apple", price: 100000})

function handleArray(anyArray){
    console.log(anyArray[1]);
}

// const myArray = [100, 200, 500, 900]

handleArray([300,67,33,567])

