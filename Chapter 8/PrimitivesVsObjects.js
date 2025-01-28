let age = 30;
let oldAge = age;

age = 31;

console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30,
}

const friend = me;
friend.age = 27;

console.log('Friend:', friend);
console.log('Me:', me);


const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};

const marriedJessica = Object.assign({},jessica); // Shallow copy
marriedJessica.lastName = 'Davis';
marriedJessica.family.push('Mary');
marriedJessica.family.push('John');
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);



