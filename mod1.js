var http1=require("http")

new_Server=http1.createServer((req,res)=>{
    if(req.url==="/")
    {
        res.end("Hello")
      
    }
   if(req.url==="/about")
    {
        res.end("About")
    }
    else{
        res.end("hehe")
    }
   
})
new_Server.listen(5000)