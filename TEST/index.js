// // import fs from "fs";
// // import inquirer from "inquirer";

// // fs.writeFile("hello.js",string,(err=>console.log(err)));

// import readline from "readline"

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// let a;

// rl.question('Enter something: ', (userInput) => {
// a=userInput;
// //   console.log('You entered: ' + userInput);
//   rl.close();
// });

// console.log("Hello " + a);

import inquirer from "inquirer";
let a;

async function getInput(callback){
    try{
   const answer = await  inquirer.prompt([
            {
                type: 'input',
                name: 'userInput',
                message: 'Enter something: '
            }
        ])
        a = answer.userInput
        callback(a);

     } catch{
            (error => {
            console.error(error);
        });
    }
    }

    getInput(a=>console.log(a))
    
   async function yo(a){
        console.log(" hELLO  " + a);

   }

yo(a);
