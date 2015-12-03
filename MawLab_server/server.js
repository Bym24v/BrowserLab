// Modulos
//var geoIP = require("./core/geoIP.js");
//var dnsResolver = require("./core/dnsResolver.js");
var mawlabSock = require("./core/mawlabSock.js");
var config = require('./db/config.js');
var whois = require('./core/whois.js');
var dnsResolver = require('./core/dnsResolver.js');
var debug = require('./core/debug.js');
var apiRest = require('./api/apiRest.js');


// Sockets
mawlabSock.mawlab.get(); // iniciar

// Whois
//whois.tracer();

// dns Resolver
//dnsResolver.get("google.com");

// Log
//debug.log();

// ApiRest
apiRest.service();

// server
console.log("Server Preparado" +
            "\n" + " " + "\n" +
            "Server Name: " + config.name + "\n" +
            "Server Version: " + config.version);

