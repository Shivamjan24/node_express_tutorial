const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/')
        res.end("welcome to homepage")
    else if(req.url==='/about')
        res.end("welcome to about us page")
    else
    res.end(`<h1>404</h1><p>page not found</p>`)
})

server.listen("5000",()=>{
    console.log("server is running at port 5000")
})