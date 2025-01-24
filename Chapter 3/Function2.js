function calcAge(birthYear){
    return 2024-birthYear;
}

const age = calcAge(1990);
console.log(age);


const calcAge2 = function(birthYear){ 
    return 2024-birthYear;
}

const age2 = calcAge2(1990);

console.log(age2);