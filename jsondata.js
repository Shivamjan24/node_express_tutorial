const express=require('express');
const server=express();
const {products}=require("./data.js");

/*server.get("/",(req,res)=>{
    res.json(products);
})

server.get("/products/:id",(req,res)=>{
    const {id}=req.params;
    const filterp=products.find((products)=>
        products.id===Number(id)
    )
    if(filterp)
    res.json(filterp);
    else
    res.status(404).send("<h1>resource not available</h1>");
})

server.get("/products",(req,res)=>{
    const filterp=products.map((products)=>{
        const {id,name,price}=products;
        return {id,name,price};
    })
    res.json(filterp);
})*/

server.get("/api",(req,res)=>{
    console.log(req.query)
    const {search,limit}=req.query;
    if(!search)
    {
        return res.json(products);        
    }
    let filterp=products.filter((products)=>{
        return products.name.startsWith(search);
    })
    if(limit)
    {
        filterp=filterp.slice(0,Number(limit));
    }
    if(!filterp)
    return res.send("<h1>no resource matched your search request</h1>")
    else
    res.json(filterp);
})

server.listen(5000,()=>{
    console.log("server is running on port 5000... ");
})