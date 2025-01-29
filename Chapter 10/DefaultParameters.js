'use strict';

const bookings = [];

const createBooking = function(flightNum,numPassengers=1,price=299){
    const booking = {
        flightNum,numPassengers,price,
    };
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123')
createBooking('C1234',2,800)

console.log(bookings)