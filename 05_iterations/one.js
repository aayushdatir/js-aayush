//Loops

// for(i = 1; i <= 10; i++){
//     for(j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i * j}`)
//     }
//     console.log()
// }

// for(i = 1; i <= 10; i++){
//     console.log(i)
//     if(i == 5){
//         break
//         console.log(`Detected 5`)
//     }
// }
// for(i = 1; i <= 10; i++){
    
//     if(i == 5){
//         continue
        
        
//     }
//     else{
//         console.log(i)
//     }
// }


//while loop
// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i++
// }

//do while loop

// let index = 0
// do{
//     console.log(index + 1);
//     index++
// }while(index < 5)


//for of

const arr = [12,23,34]
for(itr of arr){
    console.log(itr)
}

let map = new Map()
map.set("IN", "India")
map.set("UK", "United Kingdom")
map.set("USA", "United States of America")
map.set("IN", "India")


for(const [key, value] of map){
    console.log(key + ": "+ value)
}