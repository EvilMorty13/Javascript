function calcAverageHumanAge(dogAge){
    const human = dogAge.map(curr=> curr>2 ? 16+curr*4 : curr*2).filter(curr=>curr>18).reduce((acc,cur,i,arr)=>acc+cur/arr.length,0)
    console.log(human)
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])