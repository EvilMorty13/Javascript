const arr = new Array(7)
// arr.fill(1)
arr.fill(1,3,5)
console.log(arr)


const arr2 = Array.from({length:7},()=>1);
console.log(arr2)

const arr3 = Array.from({length:7},(cur,i)=>i+1);
console.log(arr3)


