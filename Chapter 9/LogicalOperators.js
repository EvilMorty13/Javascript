const rest1 ={
    name : 'Capri',
    numGuests : 0
}

const rest2 ={
    name : 'La Pizzza',
    owner: 'Giovanni'
}

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner  && 'Anon';
// rest2.owner = rest2.owner && 'Anon';

rest1.owner &&= 'Anon';
rest2.owner &&= 'Anon';


console.log(rest1);
console.log(rest2);