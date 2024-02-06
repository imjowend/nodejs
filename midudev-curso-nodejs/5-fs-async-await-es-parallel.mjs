import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('./file.txt','utf-8'),
    readFile('./file2.txt','utf-8')
]).then(([firstText, secondText])=>{
    console.log("First text: ", firstText);
    console.log("Second text: ", secondText);
})