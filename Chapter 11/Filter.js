const movements = [200,450,-400,3000,-4011,-130,70,1300];



const deposit = movements.filter(mov=>mov>0)
console.log(deposit)

const withdrawals = movements.filter(mov=>mov<0)
console.log(withdrawals)