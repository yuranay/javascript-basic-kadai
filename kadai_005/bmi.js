const weightInKilograms = 65;
const heightInMeters = 1.78;

function calculateBMI(weight, height) {
    return weight / (height * height);
}

const bmi = calculateBMI(weightInKilograms, heightInMeters);

console.log("BMI", bmi);