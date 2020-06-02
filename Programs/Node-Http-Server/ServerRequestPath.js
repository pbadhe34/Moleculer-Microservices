var http = require("http");
var url = require("url");

function start() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<b>Welcome User</b>");
    response.end();
  }

  http.createServer(onRequest).listen(9000);
  console.log("The Noded http Server has started on port-9000.");
}

exports.start = start;