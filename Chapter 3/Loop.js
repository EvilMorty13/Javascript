for(let i=1; i<=10; i++) {
    console.log(`Lifting weights repetition ${i} `);
}


const fruits = ['apple', 'orange', 'banana'];
const types = [];

for(let i=0; i<fruits.length; i++) {
    console.log(fruits[i], typeof fruits[i]);
    types.push(typeof fruits[i]);
}

console.log(types);


for(let exercise=1; exercise<4; exercise++) {
    console.log(`Starting exercise ${exercise}`);
    for(let rep=1; rep<=5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
    }
}

let rep = 1;
while(rep<=10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('Loop is about to end...');
}