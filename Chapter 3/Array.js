const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);

friends[1] = 'Parker'
console.log(friends);

const firstName = 'John';
const person = [firstName, 'Doe', 1990, 'teacher', friends];
console.log(person);
console.log(person.length);


const calcAge = (birthYear) => 2024 - birthYear;
const years = [1990, 1967, 2002, 2010, 2018];

const age = [];

years.map(year => {
    age.push(calcAge(year));
});

console.log(age);
