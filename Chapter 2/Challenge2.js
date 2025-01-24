const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;


function calculateBMI(weight, height) {
    return weight / (height * height);
}

const markBMI = calculateBMI(markWeight, markHeight);
const johnBMI = calculateBMI(johnWeight, johnHeight);

const markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}