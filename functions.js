// function nameAge(name, age) {
//     console.log("Hello " + name + "! You are " + age + " years old.");
// }

// const nameAge2 = (name, age) => {
//        console.log("Hello " + name + "! You are " + age + " years old.");
// }

// let word = '-Olivier';
// nameAge(`Louis${word}", 42`);
// nameAge("Marie", 43);

// nameAge("Victor", 10);

//MIN
// function min(number1, number2) {
//     if (number1 < number2) {
//         return number1;
//     } else {
//         return number2;
//     }
// }

// function min(number1, number2) {
//     if (number1 < number2) return number1;
//     return number2;
// }

const min = (num1, num2) => {
    if (num1 < num2) return num1;
    return num2
}

console.assert(min(0, 10) === 0);
console.assert(min(0, -10) === -10);

min1 = min(0, 10);
min2 = min(0, -10);
console.log(min1);
console.log(min2);





