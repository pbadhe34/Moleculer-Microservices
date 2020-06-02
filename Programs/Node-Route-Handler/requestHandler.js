function start() {
  console.log("The requestHandler start is called");
}


function uploadHandler() {
  console.log("The requestHandler upload is called");
}

//Export the functions from thois module

exports.index = start;
exports.upload = uploadHandler;
