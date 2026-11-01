//Array part 2

const marval_heros = ["Spiderman", "Ironman", "Thor"]
const dc_heros = ["Superman", "Batman", "Wonder Women"]

// marval_heros.push(dc_heros)

// console.log(marval_heros)

// const allHeros = marval_heros.concat(dc_heros)

const all_heros = [...marval_heros, ...dc_heros]

// console.log(all_heros)

const newArr = [1,2,3,[4,5,6], 45, [,8,9,1,[56,78]]]

// console.log(newArr.flat(2))


console.log(Array.isArray("Aayush"))
console.log(Array.from("ayush"))

console.log(Array.of(123,456,678))
