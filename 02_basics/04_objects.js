//user
const user = {
    email: "jay@gmail.com",
    fullName: {
        userFullName:{
            firstName: "Aayush",
            lastName: "Datir"
        }

    }
}



// console.log(user.fullName.userFullName.firstName)

const obj1 = {a: 1, b:2}
const obj2 = {c:3, d:4}

const obj3 = {...obj1, ...obj2};

// console.log(obj3)

// console.log(Object.keys)

const student = {
  name: "Rahul",
  rollNo: 101,
  grade: "A"
};

// console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(Object.entries(student))

// console.log(student.hasOwnProperty('grade1'))

const car = {
  brand: "Toyota",
  model: "Innova",
  color: "White"
};

const {color} = car

console.log(color)