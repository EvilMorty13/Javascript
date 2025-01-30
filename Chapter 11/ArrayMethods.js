const arr = [20,32,123,2,41,10]

console.log(arr.slice(2))
console.log(arr.slice(2,4))
console.log(arr.slice(-2))
console.log(arr.slice(1,-2))



//Splice
// console.log(arr.splice(2))
arr.splice(-1);
console.log(arr)

//Reverse
const arr2 = ['a','b','c','d','e','f']
console.log(arr2.reverse())
console.log(arr2)


const concatArr = arr.concat(arr2)
console.log(concatArr)





const arr3 = [23,11,56]

console.log(arr3[0])
console.log(arr3.at(0))
console.log(arr3.at(-1))