//console.log('Hello world!');

// let userNumber = 42;
// console.log('You number is: ' +  userNumber);

// first-readline.js
// import readline from 'readline';        // ou const rl = require('readline').createInterface(...)
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Entrez un nombre : ", answer => {
//   const num = Number(answer);
//   console.log("Vous avez choisi :", num);
//   rl.close();
// });



let charactersToPrint = "#";
let count = 0;
while (count < 7) 
{
    console.log(charactersToPrint);
    charactersToPrint += "#";
    count += 1;
}


