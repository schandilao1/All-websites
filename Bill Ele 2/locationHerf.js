// let number = prompt("Enter The Number");
// number = Number.parseInt(number);
// console.log(typeof number);
// if(number > 5){
//     location.href = "https://www.youtube.com"
// }
// else{
//     document.write("try agian");
// }

// let color = prompt("Enter Your Page Background Color");
// document.body.style.backgroundColor = color



// Sanke Water Gun
// function generateRandomLetter() {
//     const alphabet = "SWG"

//     return alphabet[Math.floor(Math.random() * alphabet.length)]
// }
// let playerWinCount = 0;
// let compWinCount = 0;
// let gameTie = 0;
// let playGame = function () {

//     computerChoice = generateRandomLetter()      //computer choice
//     // let playerWinCount=0;
//     // let compWinCount=0;

//     let playerChoice = prompt("Enter Sanke , Water OR Gun")
//     if (!playerChoice)                //if player doesn't enter any choice, we will terminate the current runnimg game abnormally.
//     {
//         gameTie++;
//         alert("Abnormally Terminated")
//     }

//     //Player Winning Condition
//     else if ((playerChoice == 'S' && computerChoice == 'W') || (playerChoice == 'W' && computerChoice == 'G') || (playerChoice == 'G' && computerChoice == 'S')) {
//         playerWinCount++;
//         alert("Player Wins");
//     }

//     //Game Tie Condition
//     else if ((playerChoice == 'S' && computerChoice == 'S') || (playerChoice == 'W' && computerChoice == 'W') || (playerChoice == 'G' && computerChoice == 'G')) {
//         gameTie++;
//         alert("Game Tie!");
//     }

//     //Computer Win
//     else {
//         compWinCount++;
//         alert("Computer Wins!")
//     }
// }


// let play = true
// while (play) {
//     playGame()
//     play = confirm("Wanna Play Again ?")
// }

// document.write("Player Wins record : " + playerWinCount)
// document.write("Computer Wins record : " + compWinCount)
// document.write("Game Ties Record : " + gameTie)
// if (playerWinCount > compWinCount) {
//     document.write("Final Status : Player Wins The Game")
// }
// else if (playerWinCount == compWinCount) {
//     document.write("Final Status : Game Tied")
// }

// else {
//     document.write("Final Status : Computer Wins")
// }


// var y = 234;
// var z = y;
// console.log(z);


// let y = 8454; // y pointing to address of the value 234

// let z = y; 

// z = 5411; // z pointing to a completely new address of the value 234

// // Changing the value of y
// y = 23;
// console.log(z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z


// var obj = {
//     name: "Vivek",
//     surname: "Bisht"
// };
// var obj2 = obj;
// console.log(typeof obj2);


// var obj = 8711;  // obj pointing to address of { name: "Vivek", surname: "Bisht" }
// var obj2 = obj;

// var obj2 = 8711; // obj2 pointing to the same address 

// // changing the value of obj1
// var obj1 = {
//     name:"Akki",
//     age: 18,
// }

// obj1.age = +"28";
// console.log(typeof obj1.age);

// Returns {name:"Akki", surname:"Bisht"} since both the variables are pointing to the same address.

// "use strict";
// let x = +"3.14";  // This will cause an error (x is not defined).
// console.log(typeof x)


