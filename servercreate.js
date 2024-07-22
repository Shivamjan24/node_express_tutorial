const http=require('http');
const {readFileSync}= require('fs');

const htmll=readFileSync("./counter.html","utf-8");
const csss=readFileSync("./styles.css","utf-8");
const jss=readFileSync("./appp.js","utf-8");

const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==="/")
    {
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(htmll);
        res.end();
    }
    if(url==="/styles.css")
    {
        res.writeHead(200,{"Content-Type":"text/css"})
        res.write(csss);
        res.end();
    }
    if(url==="/appp.js")
    {
        res.writeHead(200,{"Content-Type":"text/javascript"})
        res.write(jss);
        res.end();
    }
    if(url==="/about")
    {
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.write("About us page");
        res.end();
    }
    else
    {
        res.writeHead(404,{"Content-Type":"text/plain"})
        res.write("404 page not found");
        res.end();
    }
});