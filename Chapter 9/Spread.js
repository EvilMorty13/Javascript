const arr = [12, 13, 14];
const newArr = [1, 2, ...arr];
console.log(newArr);

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],  

    orderPasta: function(ing1, ing2, ing3){
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    }
};

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);


const mainMenuCopy = [...restaurant.mainMenu];
mainMenuCopy.push('Spaghetti');
console.log(mainMenuCopy);


const menu =[...restaurant.mainMenu,...restaurant.starterMenu];
console.log(menu);



const str = 'Jonas';
const letters = [...str];
console.log(letters);

const ingredients = ["Pasta", "Tomato", "Basil"];
restaurant.orderPasta(...ingredients);


// Objects

const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
newRestaurant.name = 'Ristorante Roma';
console.log(newRestaurant);
console.log(restaurant);