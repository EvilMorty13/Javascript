const flight = 'LH234'
const jonas = {
    name: 'Jonas Schedtmann',
    passport: 1242351234
}

const checkIn = function(flightNum,passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 1242351234) {
        console.log('Checked In')
    }
    else{
        console.log('Wrong Passport!')
    }
}

checkIn(flight,jonas)
console.log(flight)
console.log(jonas)