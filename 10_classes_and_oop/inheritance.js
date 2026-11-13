class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`the username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`the course was added in Teacher class`)
    }
}

const chai = new User("Ayush", 26)
chai.logMe()
// chai.addCourse()

const tea = new Teacher("Sanket", "example@gmail.com", "awufges")
tea.logMe()
// console.log(tea.password)

console.log(tea instanceof Teacher)