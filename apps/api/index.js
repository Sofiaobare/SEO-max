import http from 'http';
const PORT = process.env.PORT || 4000;
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('SEO API is running');
});
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
