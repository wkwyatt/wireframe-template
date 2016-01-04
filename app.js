var connect = require('connect');
var serveStatic = require('serve-static');

function normalizePort(val){
	var port = parseInt(val, 10);

	if(isNaN(port)) {
		//named pipe
		return val;
	}  

	if(port >= 0) {
		// port number
		return port;
	}

	return false;
}

connect().use(serveStatic(__dirname)).listen(normalizePort(process.env.PORT||'8000'));