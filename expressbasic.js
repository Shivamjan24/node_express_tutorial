const express=require('express')
const server=express();

server.get("/",(req,res)=>{
    res.status(200).send("welcome to homepage")
})
server.get("/about",(req,res)=>{
    res.status(200).send("<h1>welcome to about page</h1>")
})
server.all("*",(req,res)=>{
    res.status(404).send("<h1>ERROR 404 unable to find resource</h1>")
})

server.listen(5000,()=>{
    console.log("server is running at port 5000... ")
})