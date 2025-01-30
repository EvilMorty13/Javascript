const movements = [200, 450, -400, 3000, -4011, -130, 70, 1300];


const anyDeposit = movements.some(cur=>cur>2000)
console.log(anyDeposit)


const everyDeposit = movements.every(cur=>cur>0)
console.log(everyDeposit)