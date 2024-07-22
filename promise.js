const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/')
        res.end("welcome to homepage bitches");
    else if(req.url==='/about')
    {
        for(let i=0;i<1000;i++)
        {
            for(let j=0;j<1000;j++)
            {
                res.end(`${i+j}`)
            }
            res.end("\n");
        }
        res.end("welcome to about page bitches");
    }
    else
        res.end("error page as page not found");
})

server.listen("4000",()=>{
    console.log("server is running on port 4000");
})