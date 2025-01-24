const tip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was $430, the tip was $${tip(430)}, and the total value was $${430 + tip(430)}`);