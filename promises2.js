const{readFile,writeFile} = require('fs').promises;

const start = async ()=>{
    const first= await readFile("./content/subfolder/result-mind-grenade.txt","utf-8");
    const second= await readFile("./content/subfolder/second.txt","utf-8");
    await writeFile("./content/subfolder/resulting.txt",`here is the final content: ${first}, ${second}`);
}

start();