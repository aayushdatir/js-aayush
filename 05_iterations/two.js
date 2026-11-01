//For of does not work on object
//so there is for in loop

const obj = {
    'JS': "Javascript",
    'C++': "C Plus Plus",
    'Java': "Developed by Oracle"
}

for(const itr in obj){
    console.log(itr + ": "+ obj[itr])
}

const arr = [12,23,34]
for(const itr in arr){
    console.log(arr[itr])
}