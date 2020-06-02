 
Create a new project (named demo) with Moleculer CLI

moleculer init project demo

Press ENTER to all questions (accept default answers)
start NATS Server
Open project folder
Start project
> npm run dev
Open the http://localhost:3000/ link in your browser. It shows a start page which contains two links to call the greeter service via API gateway.

Test the services with default Http Get method

http://localhost:3000/api/greeter/hello

http://localhost:3000/api/greeter/welcome?name=uu

The ProductService

Get the list of products
http://localhost:3000/api/products

Get the product by ID
http://localhost:3000/api/products/id

