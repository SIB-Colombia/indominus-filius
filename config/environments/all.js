var express = require('express');
var compression = require('compression');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function(parent) {
	parent.set('port', normalizePort(process.env.PORT || '3000'));
	parent.set('view engine', 'jade');
	parent.use(favicon(__dirname + '/../../src/public/images/favicon.ico'));
	parent.use(morgan('dev'));
	parent.use(compression());
	parent.use(bodyParser.json());
	parent.use(bodyParser.urlencoded({ extended: false }));
	parent.use(require('stylus').middleware(__dirname + './../../src/public/stylesheets'));

	// Load configuration according to environment
	if(process.env.NODE_ENV == 'development') {
		require('./development')(parent);
	} else if(process.env.NODE_ENV == 'production') {
		require('./production')(parent);
	} else {
		require('./development')(parent);
	}

	// load controllers
	require('./../../src/app/routes/routers')(parent, { verbose: true });

	logger.info("Bon in a box - Frontend: initial configuration loaded.");
};

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
	var port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}
