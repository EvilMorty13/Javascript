const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};
console.log('----OR----')
console.log(3 || 'Jonas')
console.log('' || 'Jonas')
console.log(true || 0)
console.log(undefined || null)


const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);


console.log('----AND----')
console.log(0 && 'Jonas')
console.log(7 && 'Jonas')
console.log('Hello' && 23 && null && 'Jonas')

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests3 = restaurant.numGuests ?? 10;
console.log(guests3);