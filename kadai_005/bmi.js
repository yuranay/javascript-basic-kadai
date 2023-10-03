const weightInKilograms = 68;
const heightInMeters = 1.7;

function calculateBMI(weight, height) {
    return weight / (height * height);
}

const bmi = calculateBMI(weightInKilograms, heightInMeters);

console.log("BMI", bmi);