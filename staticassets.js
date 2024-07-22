const express=require('express');
const server=express();
const path=require('path');

const file=path.resolve(__dirname,"./navbar/index.html");

server.use(express.static("./navbar"));

/*server.get("/",(req,res)=>{
    res.sendFile(file);
})*/

server.listen(5000,()=>{
    console.log("server is listening on port 5000... ");
})