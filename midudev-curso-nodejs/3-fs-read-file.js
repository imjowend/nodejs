const fs = require('node:fs');

console.log('Reading first file... ');
fs.readFile('./file.txt','utf-8',(err,text)=>{
    console.log('First text: ', text);
})

console.log('-> doing things while read the file');

console.log('Reading second file... ');
fs.readFile('./file2.txt','utf-8',(err,text)=>{
    console.log('Second text: ', text);
})

