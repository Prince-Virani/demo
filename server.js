/* const http = require("http");

const server = http.createServer((req, res)=>{
    // res.end("hello from other side maulik");
    if (req.url == "/") {
        res.end("this is home page");        
    }
    else if (req.url == "/about") {
        res.end("this about page");            
    }
    else if(req.url == "/contact"){
        res.end("this is contact page");
    }
    else{
        res.writeHead(404, {"Content-type": "text/html"});     
        res.end("<h2>404 error page</h2>");
    }
});

server.listen(3000, "127.0.0.1", ()=>{
    console.log("listen port on 3000")
}); */

const fs = require("fs");
const http = require("http");


const server = http.createServer();


server.on('request', (req, res)=>{

 /*    fs.readFile("read.txt", (err, data)=>{
        if(err) return console.error(err);
        res.end(data)
    }); */

    //live data showen in the server

    const rstream = fs.createReadStream("read.txt");

/*     rstream.on('data', (chunkdata)=>{
        res.write(chunkdata);
    });
    rstream.on('end', ()=>{
        res.end();
    });     
    rstream.on('error', (err)=>{
        console.log(err);
        res.end("page not found");

    }); */

    rstream.pipe(res);

});

server.listen(3000, "127.0.0.1");