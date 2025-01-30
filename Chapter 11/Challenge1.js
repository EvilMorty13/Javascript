const dogsJulia = [3, 5, 2, 12, 7]
const dogsKate =  [4, 1, 15, 8, 3]

const realDogsJulia = dogsJulia.slice(1,-2)
console.log(dogsJulia)
console.log(realDogsJulia)



function checkDogs(arr){
    arr.forEach((element,i) => {
        element<3 ? console.log(`Dog number ${i+1} is still a puppy`) :
        console.log(`Dog number ${i+1} is an adult, and is ${element} years old`) 
    });
}


checkDogs(realDogsJulia)
checkDogs(dogsKate)