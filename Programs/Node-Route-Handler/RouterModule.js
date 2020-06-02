function route(handler,pathname) {
  console.log("About to route a request for " + pathname);

  if(typeof(handler[pathname])==="function")
      handler[pathname]();
    else
      console.log("No handler for request " + pathname);

}

exports.route = route;