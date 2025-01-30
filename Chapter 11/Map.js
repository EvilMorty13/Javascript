const movements = [200,450,-400,3000,-4011,-130,70,1300];

const bdtTousd = 0.0082

const newMov = movements.map(m=>{
    return m*bdtTousd;
})

console.log(movements)
console.log(newMov)

