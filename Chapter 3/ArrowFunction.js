const calcAge = birthYear => 2037 - birthYear;

const age = calcAge(1990);


const yearsUntillRetirement = (birthYear,firstName) => {
    const age = 2024 - birthYear;
    const retiement = 60 - age;
    return `${firstName} retires in ${retiement} years`;
}

console.log(yearsUntillRetirement(1990,'Alex'));