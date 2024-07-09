// let server = http.createServer(function(req,res){
//     let body = "Hello world";
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end(body);
// })
// server.listen(8080)

// Import the HTTP module
const http = require('http');

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200); // Set the status code to 200 (OK)
    res.end('Hello, World!'); // Send the response "Hello, World!"
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log('Server listening on port: ' + port);