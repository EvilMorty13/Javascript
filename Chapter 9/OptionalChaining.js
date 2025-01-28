const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
};



const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    
    openingHours,

    order(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};


// if(restaurant.openingHours && restaurant.openingHours.mon){
//     console.log(restaurant.openingHours.mon.open);
// }
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours.mon?.open);

for (const day of weekdays){
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}

const users = [{name: 'Jonas', email: 'test@example.com'}];
console.log(users[0]?.name ?? 'User array empty');


