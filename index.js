const http = require("http")

const app = http.createServer((req,res) =>{
    //http://localhost:4000/html
    if(req.url=='/html'){
    res.write("<html><body><h1>What is Node.JS?</h1>")
    res.write("<p>Node.js is an open-source, cross-platform runtime environment that allows you to run JavaScript code on the server-side. It uses the V8 JavaScript engine, developed by Google, which is known for its fast and efficient execution of JavaScript code. Node.js is built on an event-driven, non-blocking I/O model, making it particularly suitable for building scalable and high-performance network applications.</p></body></html>")
    res.end()
    }
    
    //http://localhost:4000/json
    else if(req.url=='/json'){
        const node ={
            "<h1>What is Node.JS?</h1>": "<p>Node.js is an open-source, cross-platform runtime environment that allows you to run JavaScript code on the server-side. It uses the V8 JavaScript engine, developed by Google, which is known for its fast and efficient execution of JavaScript code. Node.js is built on an event-driven, non-blocking I/O model, making it particularly suitable for building scalable and high-performance network applications.</p>"
        }
        res.write(JSON.stringify(node));
        res.end()
    }
    else{
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }
})

app.listen(4000,()=>{
    console.log("server is running in port 4000");
})

//step-1 -->npm init -y
//step-2 -->npm i nodemon
//step-3 -->add script-->"start":"nodemon index.js" inside file -->package.json
//step-4 -->"npm start" in terminal
