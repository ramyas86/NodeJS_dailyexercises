const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')

    if(req.url === '/'){
        res.end('Welcome to my Node.js server!\n')
    } else if(req.url === '/about'){
        res.end('About Us Page');
      } else if(req.url === '/contact'){
        res.end('Contact Us Page');
      } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 - Page not found');
      } 
  })
 
  const PORT = 3000;
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
  });