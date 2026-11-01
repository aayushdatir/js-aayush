//truthy and falsy
let userLoggedIn = []

if(0n){
    console.log("Userlogged in successfully")
}
else{
    console.log("User is not loggedIn")
}

//Falsy values
// false, 0, -0, "", NaN, null, BigInt 0n, undefined

// truthy values
// " ", "false", true, [], {}, function(){}


//The nullish coalescing operator (??) in JavaScript

// let val1 = 5 ?? 10
// console.log(val1)
// val1 = null ?? 100
// console.log(val1)
// val1 = undefined ?? 13
// console.log(val1)

//ternary operator
console.log(2 <= 1 ? "yes" : "NO")