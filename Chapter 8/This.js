'use strict';

console.log(this);

const calcAge = function (birthYear) {
    console.log(2024 - birthYear);
    console.log(this);
};

calcAge(1990);

const calcAgeArrow = birthYear => {
    console.log(2024 - birthYear);
    console.log(this);
};
calcAgeArrow(1990);


const jonas = { 
    year: 1990,
    calcAge: function() {
        console.log(this);
        console.log(2024 - this.year);
    },
}
jonas.calcAge();





const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();