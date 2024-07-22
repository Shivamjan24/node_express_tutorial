const {readFile,writeFile}=require('fs');

const useme= (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err)
                reject(err);
            else
            resolve(data);
        })
    })
}

const start = async ()=>{
    try{
        const first=await useme("./content/subfolder/first.txt");
        const second=await useme("./content/subfolder/second.txt");
        console.log(`${first} , ${second}`);
    }
    catch(err){
        console.log(err);
    }
}

start();