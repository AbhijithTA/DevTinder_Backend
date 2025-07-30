const http = require('http');

const server = http.createServer((req,res) =>{
    res.sendDate();
    console.log('Request received');
    res.end("Server started successfully");
})

server.listen(3000, () =>{
    console.log('Server is running on port 3000');
})