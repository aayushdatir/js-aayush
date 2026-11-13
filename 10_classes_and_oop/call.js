function setUserName(username){
    this.username = username
}

function createUser(username, age, email){
    setUserName.call(this, username)

    this.age = age
    this.email = email
}

const chai = new createUser("ayush", 20, "example@gmail.com")

console.log(chai)