const jonas ={
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2024 - 1990,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(jonas);
console.log(jonas.lastName);
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);//Computed property


console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);