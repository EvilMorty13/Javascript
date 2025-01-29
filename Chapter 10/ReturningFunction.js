const greet = function (greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Jonas')
greeterHey('Alex')

greet('Hello')('John')

const greetArr = greeting => name => console.log(`${greeting} ${name}`);


greetArr('Hello')('Howard')