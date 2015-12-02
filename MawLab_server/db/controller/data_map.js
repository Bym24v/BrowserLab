/**
 * Created by manue on 28/11/2015.
 */

// MongoDB
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

// Conectar
var url = 'mongodb://localhost:27017/mawlab';
//var config = require('./config.js');

// MD5
//var md5 = require('md5');

var buscarPlayer = function(db, callback) {

    var cursor =db.collection('mawlabData').find( );
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.dir(doc);
        } else {
            callback();
        }
    });
};


function buscar(){

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        buscarPlayer(db, function() {
            db.close();
        });
    });
}
module.exports.buscar = buscar;
