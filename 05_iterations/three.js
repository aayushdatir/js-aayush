//For Each Loop

// const arr = ["Java", "C#", "Ruby", "PHP"]

// arr.forEach( (item) => {
//    console.log(item)
// })

const myObj = [
    {
        name: "Javascirpt",
        fileName: "js"
    },
    {
        name: "C#",
        fileName: "cs"
    },
    {
        name: "Java",
        fileName: "java"
    }
]

myObj.forEach( (item) =>{
    console.log(item.name+ " " +item.fileName)
})