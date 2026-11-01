const myNum = [1,2,3,4,5,6]

// const myNum2 = myNum.map( (num) => num * 2)

const myNum2 = myNum.
            map( (num) => num * 2).
            map( (num) => num + 10).
            filter( (num) => num >= 18)


console.log(myNum2)