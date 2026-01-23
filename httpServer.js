const http = require('http');
const fs = require('fs');

const port = 8090;
const server = http.createServer((req, res)=>{
    if(req.url === '/' && req.method==='get'){
        res.write('this is welcome page..');
        res.end()
    }
    else if(req.url==='/about'){
         res.write('this is about page');
        res.end()
    }
    else if(req.url==='/contact'){
        let getFile = fs.readFileSync('one.html', 'utf-8');
        res.write(getFile);
        res.end()
    }
}) 

server.listen(port , ()=>{
    console.log("server is running")
})

