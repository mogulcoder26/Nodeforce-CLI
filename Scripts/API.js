export const APISCRIPT=`const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/write-message' && req.method === 'GET') {
    const message = 'Welcome to NodeForce CLI!';
    
    fs.writeFile('message.txt', message, (err) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Error occurred while writing the message.');
      } else {
        console.log('Message written successfully.');
        res.statusCode = 200;
        res.end('Message written successfully.');
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('API server is listening on port 3000.');
});
`