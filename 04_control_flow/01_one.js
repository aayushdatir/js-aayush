//Control flow
// >, <, >=, <=, ==, ===, !=, !==

if(2 === "2"){
    console.log("Both are equal")
}
else{
    console.log("Both are not equal")
}

let isLoggedIn = true
let loggedInWithGoogle = true;
let loggedInWithMail = false;

if(isLoggedIn && loggedInWithGoogle){
    console.log("User is logged in")
}

if(isLoggedIn || loggedInWithMail){
    console.log("User is logged in with mail")
}