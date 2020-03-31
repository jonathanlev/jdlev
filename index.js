const http = require('http');
var dt = require('./node_modules/myfirstmodule');



const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
})

const hostname = '127.0.0.1';
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}
server.listen(port);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
