const jonas ={
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1990,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function(){
    //     return 2024 - this.birthYear;
    // }
    calcAge: function(){
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
}

console.log(jonas.calcAge());
console.log(jonas.age);

console.log(jonas.getSummary());