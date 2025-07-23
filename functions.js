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


//************************************************************ 
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

// const min = (num1, num2) => {
//     if (num1 < num2) return num1;
//     return num2
// }

// console.assert(min(0, 10) === 0);
// console.assert(min(0, -10) === -10);

// min1 = min(0, 10);
// min2 = min(0, -10);
// console.log(min1);
// console.log(min2);


//***************************
//isEven(n)
// function isEven(n) {
//     if (n < 0) return isEven(-n)
    
//     if (n === 0) return true;
//     if (n === 1) return false;

//     return isEven(n-2);
// }

// console.assert(isEven(50) === true);
// console.assert(isEven(75) === false);
// console.assert(isEven(-1) === false);


//************************************************ 
//Exercice 3 – Compter des caractères (countChar)
function countChar(str, char) {
    let strLenght = str.length;
    let countChar = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            countChar += 1;
        }
    }
}

console.assert(countChar("Bonjour", "o") === 2);
console.assert(countBs("BBC") === 2);

