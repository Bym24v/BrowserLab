var whois = require('node-whois');



function tracer(){

  whois.lookup('google.com', function(err, data) {
    console.log(data);
  })

};

module.exports.tracer = tracer;
