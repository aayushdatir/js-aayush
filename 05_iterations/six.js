//reduce

const myNum = [1,2,3]

const myNum2 = myNum.reduce( (acc, currVal) => {
    //console.log("Accumulator " + acc + " CurrVal " + currVal)
    return acc + currVal

},0)

// console.log(myNum2)

const books = [
  {
    name: "JavaScript Basics",
    price: 499
  },
  {
    name: "React Mastery",
    price: 699
  },
  {
    name: "Node.js Guide",
    price: 599
  },
  {
    name: "Azure Fundamentals",
    price: 799
  }
];

//console.log(books);

// const newBook = books.reduce( (acc, currVal) => {
//     return acc + currVal.price
// },0
// )

const newBook = books.reduce( (acc, currVal) => acc + currVal.price,0)


console.log(newBook)