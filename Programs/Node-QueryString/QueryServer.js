var httpModule = require("http");
 

const urlModule = require('url');

var server = httpModule.createServer(onRequest);

console.log("Starting the node http server.");


server.listen(8888);

function onRequest(request, response) {
 // console.log(request);
  const { headers,method, url } = request;
 
 
  const userAgent = headers['user-agent'];

  console.log("The request received from "+userAgent);
 

  const queryObject = urlModule.parse(request.url,true).query;
  console.log(queryObject);
 

  console.log("Request received with "+queryObject.data);
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h2>Welcome Users</h2></br><h3>you have sent request with </h3>"+userAgent);

 
  if(queryObject!=null)
    response.write("<br></br>");
   response.write("The request query data is  "+queryObject.data + " and "+queryObject.user);    
  response.end();
}


console.log("The Node http server has started on port 8888.");