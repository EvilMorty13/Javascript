const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    book(flightNum,name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight : `${this.iataCode} ${flightNum}`, name})
    }
}

lufthansa.book(230,'John Smith')
console.log(lufthansa.bookings)

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book;

book.call(eurowings,23,'Sarah WIlliams')
console.log(lufthansa.bookings)
console.log(eurowings.bookings)