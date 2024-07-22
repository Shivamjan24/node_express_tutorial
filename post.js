const express=require('express');
const server=express();
const {people}=require("./data");
const router=require('./router.js');

server.use("/api/people",router)

server.listen(5000,()=>{
    console.log("server is listening on port 5000... ")
})