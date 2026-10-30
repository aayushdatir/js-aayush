const accountID = 12232;
let accountName = "Hitesh"
var accountEmail = "sample123@gmail.com"
accountCity = "Jaipur"
let accountState;
//accountID = 2343  //not allowed

accountEmail = "anything@gmail.com"
accountName = "Ramesh"
accountCity = "Bangaluru"

console.log(accountID)

/*
Prefer not to use var
because issues in block scope and functional scope
*/

console.table([accountEmail, accountID, accountName, accountCity, accountState])