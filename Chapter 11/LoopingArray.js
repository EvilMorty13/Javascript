const movements = [200,450,-400,3000,-401,-130,70,1300];

for(const movement of movements){
    movement>0 ? console.log(`You deposited ${movement}`) : console.log(`You withdraw ${movement}`)
}

console.log(`---For-each----`)


movements.forEach(function(movement,i){
    movement>0 ? console.log(`Movement ${i} : You deposited ${movement}`) : console.log(`Movement ${i} : You withdraw ${movement}`)
})

console.log(`-------`)
movements.map((movement)=>{
    movement>0 ? console.log(`You deposited ${movement}`) : console.log(`You withdraw ${movement}`)
})


const currencies = new Map([
    ['USD','United States Dollar'],
    ['EUR','Euro'],
    ['GBP','Pound sterling']
]);


currencies.forEach(function(value,key,map){
    console.log(key,value)
})

