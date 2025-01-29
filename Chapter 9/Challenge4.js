const testData = ['underscore_case',' first_name',' Some_Variable ','  calculate_AGE','delayed_departure']

const ans=[]
for (const t of testData){
    const text = t.toLowerCase().trim().split('_')
    ans.push((text[0])+text[1].replace(text[1][0],text[1][0].toUpperCase()))
}

console.log(ans)