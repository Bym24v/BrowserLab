//var WebSocketServer = require('ws').Server;
var io = require('socket.io')(8000);
//var async = require('async');

var mongo = require("../models/mongo.js");


var mawlab =  {

    get: function(){

        // WebSocketServer
        //var wss = new WebSocketServer({
            //host : '0.0.0.0',
            //port : 8000
        //});

        // WebSockets
        io.on('connection', function(socket) {

            socket.on('message', function(data) {

                var entradaData = JSON.parse(data);

                // Recorremos la data
                for (var i = 0; i < entradaData.length; i++) {

                    //console.log(entradaData[i].coords.longitude);
                    //console.log(entradaData[i].coords.longitude);

                    if (entradaData[i].statusCode.toString() === "200") {

                        //mongo.guardar(entradaData[i]);
                        console.log(
                                    "requestId: " + entradaData[i].requestId + " " +
                                    "method: " + entradaData[i].method + " " +
                                    "statusCode: " + entradaData[i].statusCode + " " +
                                    "type: " + entradaData[i].type + " " +
                                    "url: " + entradaData[i].url
                                   );
                    };
                    if(entradaData[i].statusCode.toString() === "304"){
                        console.log("304");
                    }
                    if(entradaData[i].statusCode.toString() === "404"){
                        console.log("404");
                    }
                };

                //socket.close();



                //for(var x in entradaData);
                //console.log(mona.length);

                // Log
                /*console.log(
                    //"frameId: " + mona[x].frameId + " " +
                    "method: " + entradaData[x].method + " " +
                    //"parentFrameId: " + mona[x].parentFrameId + " " +
                    "requestId: " + entradaData[x].requestId + " " +
                    //responseHeaders: n.responseHeaders, // importante
                    "statusCode: " + entradaData[x].statusCode + " " +
                    //"statusLine: " + mona[x].statusLine + " " +
                    //"tabId: " + mona[x].tabId + " " +
                    //"timeStamp: " + mona[x].timeStamp + " " +
                    "type: " + entradaData[x].type + " " +
                    "url: " + entradaData[x].url);*/



                //console.log(mona2);

                //console.log('recivido: ' + message + '\n');

                //ws.send('Hola!!')

                //ws.on('close', function(){
                    //console.log("Preparado!!" + "\n");
                //})

            });

            /*ws.send('hola', function(manu) {

            })*/

        });
    }

};
module.exports.mawlab = mawlab;
