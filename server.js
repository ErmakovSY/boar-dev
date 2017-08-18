var http = require('http');
var app = require('./app.js');
var gracefulExit = require('express-graceful-exit');
var config = require('./app/config');
var port = process.env.PORT || config.port;
var server = http.createServer(app);
server.listen(port, function () {
	console.log('Server: listening on port ', port)
});




// this function is called when you want the server to die gracefully
// i.e. wait for existing connections
var gracefulShutdown = function() {
	console.log(" Received kill signal, shutting down gracefully.");
	server.close(function() {
		console.log("Closed out remaining connections.");
		gracefulExit.gracefulExitHandler(app, server, {
        	socketio: app.settings.socketio
    	});
	});
   // if after 
	setTimeout(function() {
		console.error("Could not close connections in time, forcefully shutting down");
		process.exit();
	}, 5*1000);
}
// listen for INT signal e.g. Ctrl-C
process.on ('SIGINT', gracefulShutdown);
