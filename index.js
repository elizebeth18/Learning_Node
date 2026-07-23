//import http module
const http = require('node:http');

//create server
const server = http.createServer((req, res) => {
    console.log("req=========>", req);

    const superHero = {
        firstName: "Bruce",
        lastName: "Wayne",
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(superHero))
});

server.listen(3000, () => {
    console.log('Server running on port 3000')
});