import fs from "fs";
import inquirer from "inquirer";

fs.writeFile("hello.js",string,(err=>console.log(err)));

import readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let a;

rl.question('Enter something: ', (userInput) => {
a=userInput;
//   console.log('You entered: ' + userInput);
  rl.close();
});

console.log("Hello " + a);

import inquirer from "inquirer";
// let a;

async function saveguard(){
    try{
        progress=fs.readFileSync("hello2.js","utf-8",err=>console.log(err));
    }catch{
        (err=>console.log(err))
    }
}



async function getName(){
    try{
   const answer = await  inquirer.prompt([
            {
                type: 'input',
                name: 'userName',
                message: 'Enter something: '
            }
        ])
        a =await answer.userName
       await fs.writeFileSync("hello2.js",a,(err=>console.log("err!")))

     } catch{
            (error => {
            console.error(error);
        });
    }
    }

    async function getBranch(){
        try{

        const data = fs.readFile("hello2.js",(err)=>console.log(err))

       const answer = await  inquirer.prompt([
                {
                    type: 'input',
                    name: 'userBranch',
                    message: 'Enter something: '
                }
            ])
            a = await answer.userBranch
            await fs.writeFileSync("hello2.js",a,(err=>console.log("err!")))
    
         } catch{
                (error => {
                console.error(error);
            });
        }
        }
    


    await getName();
    await getBranch();
    const data =fs.readFileSync("hello2.js",'utf-8',(err)=>console.log(err))
    console.log(data + `\nhe\nllo
    World!`)