const calcTip = (bill)=>{
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
console.log(calcTip(100));

bills = [125, 555, 44];
tips =[]
total = []

bills.map((bill)=>{
    tips.push(calcTip(bill));
})
console.log(tips);


bills.map((bill, index)=>{  
    total.push(bill + tips[index]);
})
console.log(total);