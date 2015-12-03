// Dependencias
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Modelo
var productSchema = new mongoose.Schema({

    frameId: Number,
	method: String,
    parentFrameId: Number,
    requestId: String,
    responseHeaders: Array,
    statusCode: Number,
    statusLine: String,
    tabId: Number,
    timeStamp: Number,
    type: String,
    url: String

});

// return Modelo
module.exports = restful.model('data', productSchema)
