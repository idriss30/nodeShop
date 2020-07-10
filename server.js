const http = require('http');
const app = require("./app");


const port = process.env.PORT || 3000 // setting the port number


// creating new server
const server = http.createServer(app);



server.listen(port) // listening to the port 