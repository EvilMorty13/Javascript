function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples,oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples,oranges);
    const juice = `Juice with ${applePieces} apples pieces and ${orangePieces} oranges pieces`;
    return juice;
}

console.log(fruitProcessor(2,3));