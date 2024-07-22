const express=require('express');
const server=express();
const logger=require('./logger')


server.use(logger);

server.get("/",(req,res)=>{
    res.send("<h1>welcome to the homepage</h1>")
})

server.get("/about",(req,res)=>{
    res.send("<h1>ABOUT PAGE</h1>")
})

server.get("/about/:id",(req,res)=>{
    res.send("<h1>PARTICULAR PAGE</h1>")
})

server.listen(5000,()=>{
    console.log("server is running on port 5000");
})