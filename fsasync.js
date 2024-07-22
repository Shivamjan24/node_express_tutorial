const { readFile,writeFile } = require('fs');

readFile("./content/subfolder/first.txt","utf-8",(err,result)=>{
    if(err)
    {
        return;
    }
    const first=result;
    readFile("./content/subfolder/second.txt","utf-8",(err,result)=>{
        if(err)
        {
            return;
        }
        const second=result;
        writeFile("./content/subfolder/result.txt",`this is the combined result: ${first} , ${second}`,(err,result)=>{
            if(err)
                return;
            console.log("done with this task");
        })
    })
})