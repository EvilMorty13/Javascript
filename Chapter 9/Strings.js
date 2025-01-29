const airplane = 'Biman Bangladesh'
const plane = 'A320'

console.log(plane[0])
console.log(plane[1])


console.log(airplane.length)
console.log('B737'.length)

console.log(airplane.indexOf('B'))
console.log(airplane.lastIndexOf('B'))

console.log(airplane.slice(6))
console.log(airplane.slice(0,airplane.indexOf(' ')))


console.log(airplane.toLocaleLowerCase())
console.log(airplane.toUpperCase())


const email = 'hello@jonas.io'
const loginEmail = '   Hello@jonas.io  \n'

const normalize = loginEmail.toLowerCase().trim()
console.log(normalize)
console.log(email===normalize)

const priceBD = '10000৳'
const priceUS = priceBD.replace('৳','$')
console.log(priceBD)
console.log(priceUS)


const announcement = "All passengers come to boarding door 23, Boarding door 23"

console.log(announcement.replaceAll('door','gate'))


const planeName = 'A320neo'
console.log(planeName.includes('A320'))


console.log('a+very+nice+string'.split('+'));

const capitalizeName = function(name) {
    const names = name.split(' ');
    const namesUpper = [];
    for (const n of names) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(' '));
};

capitalizeName("jonas schmedtmann");


const maskCreditCard = function(number){
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length,'*');
}

console.log(maskCreditCard(123124124124))