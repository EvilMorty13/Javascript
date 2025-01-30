const movements = [200, 450, -400, 3000, -4011, -130, 70, 1300];

const balance = movements.reduce((acc, cur) => acc + cur);
console.log(balance); 
const maximum = movements.reduce((acc, cur) => 
    acc > cur ? acc : cur, movements[0] 
);

console.log(maximum); 