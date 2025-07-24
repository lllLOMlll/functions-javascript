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
// function countChar(str, char) {
//     let strLenght = str.length;
//     let countChar = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == char) {
//             countChar += 1;
//         }
//     }
//     return countChar;
// }

// function countBs(str) {
//     return countChar(str, "B");
// }

// console.assert(countChar("Bonjour", "o") === 2);
// console.assert(countBs("BBC") === 2);

//**************************************************************** */
//Exercice 4 – Plage de nombres (range) et somme (sum)
function range(start, end, step = 1) {
  let rangeArray = [];
  if (step < 0) {
    for (let i = start; i >= end; i--) {
      rangeArray.push(i);
    }
  } else if (step > 0) {
    for (let i = start; i <= end; i++) {
      rangeArray.push(i);
    }
  }
  return rangeArray;
}

function sum(array) {
    let total = 0;
    let arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
        total += array[i];
    }
    return total;
  
}

console.log(sum(range(1, 10))); 

console.assert(JSON.stringify(range(1, 5)) === JSON.stringify([1, 2, 3, 4, 5]));
console.assert(JSON.stringify(range(2, 5)) === JSON.stringify([2, 3, 4, 5]));
console.assert(JSON.stringify(range(5, 2, -1)) === JSON.stringify([5,4,3,2]));
console.assert(sum(range(1, 10)) === 55);
