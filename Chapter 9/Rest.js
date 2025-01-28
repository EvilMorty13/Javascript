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

// Right side of =
const arr =[1,2,...[3,4]]
console.log(arr)

// Left side of =
const [a,b,...c] = [1,2,3,4]
console.log(a,b,c)


const [pizza,pasta,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu]
console.log(pizza,pasta,otherFood)



const add = function(...numbers){
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        sum += numbers[i]
    }
    console.log(sum)
}

add(2,3)


restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach')

