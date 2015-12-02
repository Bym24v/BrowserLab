var dns = require('dns');

function get(dominio){

    dns.resolve4(dominio, function (err, addresses) {
        if (err) throw err;
        //console.log('addresses: ' + JSON.stringify(addresses));
        console.log(JSON.stringify(addresses));

    })

};

module.exports.get = get;
