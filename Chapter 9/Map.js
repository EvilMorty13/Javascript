const rest = new Map();

rest.set('name','Classico Italiano');
rest.set(1,'Firenze,Italy')
rest.set(2,'Listbon,Portugal').set(true,'We are open').set(false,'We are closed')

console.log(rest)
console.log(rest.get(true))


console.log(rest.has('name'))
rest.delete(2)
console.log(rest)

const question = new Map([
    ['question','What is the best programming language?'],
    [1,'C'],
    [2,'Java'],
    [3,'Javascript'],
    ['correct',3]
])

console.log(question)

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

const hourMap = new Map(Object.entries(openingHours))
console.log(hourMap)


for (const [key,value] of question){
    console.log(`${key} ${value}`)
}