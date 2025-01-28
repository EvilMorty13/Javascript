const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) console.log(item);

for (const [i,el] of menu.entries()) {
    console.log(i,el);
}

console.log([...menu.entries()]);


openingHours = {
    thu: {
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

const values = Object.keys(openingHours);
console.log(values);

let openStr = `We are open on ${values.length} days: `;

for (const day of values){
    openStr += `${day}, `;
}

console.log(openStr);


const entries = Object.entries(openingHours);
console.log(entries);

for (const [key,{open,close}] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}