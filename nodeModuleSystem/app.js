const http = require('http');
const { Socket } = require('dgram');

const server = http.createServer();
server.listen(3000);
server.on('connection', (Socket) =>{
    console.log('New connect');
})

console.log("Listening to port http://localhost:3000");


//task:

const http = require('http');

const server = http.createServer();
server.on('connection', function(Socket){
    console.log('New connect established');
}) 
server.listen(5000);
console.log('Listening on port http://5000');