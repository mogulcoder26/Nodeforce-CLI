import fs from "fs";

let string = `Hi 
I am Soubhik`

fs.writeFileSync("server/Docs/testwrite.c",string,err=>console.log(err));