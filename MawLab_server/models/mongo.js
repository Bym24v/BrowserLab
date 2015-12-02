// MongoDB
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var assert = require('assert');

// Conectar DB
var config = require('../db/config.js');

// Guardar tabla
var guardarData = function(db, data, callback) {

    db.collection('mawlabData').insertOne( {

        "frameId": data.frameId,
        "method": data.method,
        "parentFrameId": data.parentFrameId,
        "requestId": data.requestId,
        "responseHeaders": data.responseHeaders, // Array
        "statusCode": data.statusCode,
        "statusLine": data.statusLine,
        "tabId": data.tabId,
        "timeStamp": data.timeStamp,
        "type": data.type,
        "url": data.url

    }, function(err, result) {

        assert.equal(err, null);

        //console.log("Insertados los datos correctamente.");

        callback(result);

    });
};

function guardar(data){

    MongoClient.connect(config.url, function(err, db) {

        assert.equal(null, err);

        guardarData(db, data, function() {
            db.close();
        });

    });
}

module.exports.guardar = guardar;
