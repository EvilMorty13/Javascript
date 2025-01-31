const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
]

//1
dogs.forEach(curr=>(curr.recFood = (curr.weight ** 0.75) * 28))
console.log(dogs)

//2
dogs.forEach(curr=>{
    if(curr.owners.includes('Sarah')){
        console.log(`Eating too ${curr.curFood>curr.recFood ? 'much': 'little'}`) 
    }
})


//3
const ownersEatTooMuch = dogs.filter(curr=>curr.curFood>curr.recFood).flatMap(curr=>curr.owners)
console.log(ownersEatTooMuch)

const ownersEatTooLittle = dogs.filter(curr=>curr.curFood<curr.recFood).flatMap(curr=>curr.owners)
console.log(ownersEatTooLittle)


//4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`)
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too much!`)


//5
console.log(dogs.some(curr=>curr.curFood===curr.recFood))

//6
console.log(dogs.some(curr=>(curr.curFood>curr.recFood*0.9 && curr.curFood<curr.recFood*1.10)))

//7
const okeyDog = dogs.filter(curr=>(curr.curFood>curr.recFood*0.9 && curr.curFood<curr.recFood*1.10))
console.log(okeyDog)


//8
const dogCopy = dogs.sort((a, b) => a.recFood - b.recFood);
console.log(dogCopy);
