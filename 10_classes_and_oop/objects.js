function multiple5(num){
    return num * 5
}

multiple5.power = 2;

// console.log(multiple5.power)
// console.log(multiple5(5))
// console.log(multiple5.prototype)

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("Ayush", 200)
const tea = new createUser("Hitesh", 250)

console.log(chai)
console.log(tea)

chai.increment()
chai.increment()

chai.printMe()


