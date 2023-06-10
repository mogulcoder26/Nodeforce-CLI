export const ROUTESCRIPT = `import http from 'http';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  const html = "
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            background-color: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          h1 {
            color: #333;
            font-family: Arial, sans-serif;
            font-size: 48px;
            text-align: center;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          }
        </style>
      </head>
      <body>
        <h1>Hello, World!</h1>
      </body>
    </html>
  ";
  
  res.end(html);
});

const port = 3000;
server.listen(port, () => {
  console.log("Server is running on http://localhost:3000");
});
`
