// Modulos
//var geoIP = require("./core/geoIP.js");
//var dnsResolver = require("./core/dnsResolver.js");
var debug = require("./core/debug.js");
var mawlabSock = require("./core/mawlabSock.js");
var config = require('./db/config.js');
var whois = require('./core/whois.js');


// WebSockets
mawlabSock.mawlab.get(); // iniciar

whois.tracer();

// Log
//debug.log();

// server
console.log("Name Server: " + config.name);
console.log("Version Server: " +config.version);
console.log("Server Preparado");
