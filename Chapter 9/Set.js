const orderSet = new Set(['Pasta','Pizza','Pasta','Apple'])

console.log(orderSet)

console.log(orderSet.size)
console.log(orderSet.has('Pizza'))
orderSet.add('Bread')
orderSet.add('Bread')
console.log(orderSet)

for(const order of orderSet){
    console.log(order)
}

const staff = ['Waiter','Chef','Waiter','Manager','Chef']

const staffUnique = [...new Set(staff)]
console.log(staffUnique)