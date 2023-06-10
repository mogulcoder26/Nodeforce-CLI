#!/usr/bin/env node
import fs from "fs";
import inquirer from "inquirer";
import { exit } from "process";
import readline from "readline"
import { exec } from "child_process";
import { APISCRIPT } from './Scripts/API.js'
import { DATABASESCRIPT } from './Scripts/Database.js'
import { DOCSCRIPT } from './Scripts/Docs.js'
import { ROUTESCRIPT } from './Scripts/Routes.js'
import { VIEWSCRIPT } from './Scripts/views.js'
import { promisify } from 'util';
const executeCommand = promisify(exec);
import { asciiart } from './asciiart.js';

// console.log(DATABASESCRIPT)
// console.log(APISCRIPT)
// console.log(DOCSCRIPT)
// console.log(ROUTESCRIPT)
// console.log(VIEWSCRIPT)



async function NODEFORCE() {
    try {
        console.log("\n");
        console.log("\n");
      
        console.log(asciiart);
        console.log("\n");
        
        const query1 = await inquirer.prompt([
            {
                type: 'input',
                name: 'choice_of_proceeding',
                message: 'NodeForce CLI will create file structures on this working folder and install dependencies.Proceed?[y/n]'
            }
        ])

        let choice_of_proceeding;
        choice_of_proceeding = await query1.choice_of_proceeding

        if (choice_of_proceeding == 'y') {

            // await exec('sh create-folder-struct.sh',
            //     (error, stdout, stderr) => {
            //         console.log(stdout);
            //         console.log(stderr);
            //         if (error !== null) {
            //             console.log(`exec error: ${error}`);
            //         }
            //     })

            await executeCommand('sh create-folder-struct.sh');

                    fs.writeFileSync("server/API/RESTAPI.js", APISCRIPT, e => console.log(e))
                    fs.writeFileSync("server/Database/db.sql", DATABASESCRIPT, e => console.log(e))
                    fs.writeFileSync("server/Docs/Documentation", DOCSCRIPT, e => console.log(e))
                    fs.writeFileSync("server/Routes/Route.js", ROUTESCRIPT, e => console.log(e))
                    fs.writeFileSync("server/Server-frontend/views.ejs", VIEWSCRIPT, e => console.log(e))
                
        }
        else exit(1);


        let choice_of_installing_via_nodeforce;
        const query2 = await inquirer.prompt([
            {
                type: 'input',
                name: 'choice_of_installing_via_nodeforce',
                message: 'Install Dependencies via NodeForce?[y/n]'
            }
        ])
        choice_of_installing_via_nodeforce = await query2.choice_of_installing_via_nodeforce;

        if (choice_of_installing_via_nodeforce == 'y') {
            let writedependencies;

            const query3 = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'writedependencies',
                    message: 'type packages name with spaces between two : '
                }
            ])
            writedependencies = query3.writedependencies;
            await fs.writeFileSync("install-dependencies.sh", "npm i " + writedependencies, (err => console.log("err!")))

            console.log("Installing Packages.This might take some time.")
            console.log("Loading...");

            var RUNDEPENDENCYINSTALLER = exec('sh install-dependencies.sh',
                (error, stdout, stderr) => {
                    console.log(stdout);
                    console.log(stderr);
                    if (error !== null) {
                        console.log(`exec error: ${error}`);
                    }
                });
                console.log('Process Exited with Success - Thankyou for using Nodeforce!');
        }
        else {
            console.log('Process Exited with Success - Thankyou for using Nodeforce!');
        }
    }
    catch (error) {

        console.error(error);
    };
}

await NODEFORCE();
