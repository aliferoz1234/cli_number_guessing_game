#! /usr/bin/env node
import inquirer from "inquirer";
//1.computer will generate a random number--Done
//2.user input for gyessing number
//3.compare user input with computer generated number and show result
//const randomNumber=13;
//const randomNumber=Math.random();
//const randomNumber=Math.floor(Math.random());
const randomNumber = Math.floor(Math.random() * 6 + 1); // for dice
//console.log(randomNumber);
const answers = await inquirer.prompt([
    { name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Cogratulation! You guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
