const friends = ['Michael', 'Steven', 'Peter'];

friends.push('Jay');
console.log(friends);

friends.unshift('John');
console.log(friends);

friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));