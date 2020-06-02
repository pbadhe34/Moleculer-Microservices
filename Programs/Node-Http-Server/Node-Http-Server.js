var httpModule = require("http");


var server = httpModule.createServer(onRequest);

console.log("Starting the node http server.");


server.listen(8888);


function onRequest(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h2>Welcome Users</h2>");
  response.end();
}


console.log("The Node http server has started on port 8888.");