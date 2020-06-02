var HttpServerModule = require("./ServerModule-Route");
var ModuleRouter = require("./RouterModule");
var ModuleRequestHandler = require("./requestHandler");

var handle= {};
handle["/"]= ModuleRequestHandler.index

handle["/start"]= ModuleRequestHandler.index

handle["/upload"]= ModuleRequestHandler.upload 


//Pass the ModuleRouter.route and handle into start function i.e. inject it


HttpServerModule.start(ModuleRouter.route,handle);