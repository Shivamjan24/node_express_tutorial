const {readFile,writeFile} = require('fs');
const util=require('util');

const readFilepromise= util.promisify(readFile);
const writeFilepromise=util.promisify(writeFile);

const start = async () =>{
    const first=await readFilepromise("./content/subfolder/first.txt","utf-8");
    const second=await readFilepromise("./content/subfolder/second.txt","utf-8");
    console.log(first,second);
    await writeFilepromise("./content/subfolder/result-mind-grenade.txt",`Here is the result file: ${first}, ${second} `);
}

start();