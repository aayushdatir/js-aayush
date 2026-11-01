//filter

// const number = [1,2,3,4,5,6]

// const newNum = number.filter( (num) => {
//     return num > 4
// })

// console.log(newNum)


const books = [
  {
    title: "JavaScript Basics",
    publishDate: 2018
  },
  {
    title: "React Guide",
    publishDate: 2022
  },
  {
    title: "Node.js Mastery",
    publishDate: 2020
  },
  {
    title: "Modern JavaScript",
    publishDate: 2024
  }
];

const newBooks = books.filter( (bk) => bk.publishDate >= 2022 && bk.title === "React Guide")

console.log(newBooks)