const movements = [200,450,-400,3000,-4011,-130,70,1300];

const firstWithdraw = movements.find(cur=>cur<0)
console.log(firstWithdraw)

console.log(movements.find(cur=>cur===460))
