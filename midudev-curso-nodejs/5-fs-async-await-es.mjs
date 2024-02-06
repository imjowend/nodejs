import { readFile } from 'node:fs/promises';


    console.log('Reading first file... ');
    const firstText = await readFile('./file.txt','utf-8')
    console.log("First text: ", firstText);

    console.log('-> doing things while read the file');

    console.log('Reading second file... ');
    const secondText = await readFile('./file2.txt','utf-8')
    console.log("Second text: ", secondText);




