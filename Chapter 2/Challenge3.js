const dolphinScore = [96, 108, 89];
const koalaScore = [88, 91, 110];

const calcAverage = (score) => {
  let sum = 0;
  for (let i = 0; i < score.length; i++) {
    sum += score[i];
  }
  return sum / score.length;
}

const dolphinAverage = calcAverage(dolphinScore);
const koalaAverage = calcAverage(koalaScore);

const checkWinner = (dolphinAverage, koalaAverage) => {
  if (dolphinAverage > koalaAverage) {
    return `Dolphins win (${dolphinAverage} vs. ${koalaAverage})`;
  } else if (koalaAverage > dolphinAverage) {
    return `Koalas win (${koalaAverage} vs. ${dolphinAverage})`;
  } else {
    return 'It is a draw';
  }
}

console.log(checkWinner(dolphinAverage, koalaAverage));
