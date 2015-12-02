
var cabeceraMarcadores = [];

var Mawlab = {

    capturar: function () {

        chrome.webRequest.onHeadersReceived.addListener(function(n) {

            // WebSockets
            var ws = new WebSocket("ws://127.0.0.1:8000", "tpc");

            var log = document.getElementById('mbodyTable');

                // Array get
            var cabecera = [
                {
                    frameId: n.frameId,
                    method: n.method,
                    parentFrameId: n.parentFrameId,
                    requestId: n.requestId,
                    responseHeaders: n.responseHeaders, // importante
                    statusCode: n.statusCode,
                    statusLine: n.statusLine,
                    tabId: n.tabId,
                    timeStamp: n.timeStamp,
                    type: n.type,
                    url: n.url
                }
            ];

            // Leer cabecera
            for (var i = 0; i < cabecera.length; i++) {

                // 200
                if (cabecera[i].statusCode === 200) {

                    log.innerHTML +=
                      "<tr>" +
                        "<td>" + cabecera[i].requestId +
                        "<td>" + cabecera[i].method +
                        "<td>" + cabecera[i].statusCode +
                        "<td>" + cabecera[i].type +
                        "<td>" + cabecera[i].url +
                      "<tr>";

                }

                // 304
                /*if (cabecera[i].statusCode === 304) {

                    log.innerHTML += (
                    "<p class='log_noMoved'>" +
                    "Id: " + cabecera[i].requestId + " " +
                    "Method: " + cabecera[i].method + " " +
                    "Status: " + cabecera[i].statusCode + " " +
                    "type: " + cabecera[i].type + " " +
                    "Url: " + "<a href='" + cabecera[i].url + "'>" + cabecera[i].url + "</a>" + "</p>" + "<br>");
                }*/

                // 404
                /*if (cabecera.get[i].statusCode === 404) {

                    log.innerHTML += (
                    "<p class='log_error'>" +
                    "Id: " + cabecera[i].requestId + " " +
                    "Method: " + cabecera[i].method + " " +
                    "Status: " + cabecera[i].statusCode + " " +
                    "type: " + cabecera[i].type + " " +
                    "Url: " + "<a href='" + cabecera[i].url + "'>" + cabecera[i].url + "</a>" + "</p>" + "<br>");
                }*/

                    // emviamos al server
                    ws.onopen = function() {
                        ws.send(JSON.stringify(cabecera));
                    }
                };

                cabeceraMarcadores.push(n);
        }, {
                urls: ["<all_urls>"],
                types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
        }, ["blocking", "responseHeaders"]);
    },

    marcadores: function () {

        var conDos = document.getElementById('conDos');
        var conTres = document.getElementById('conTres');
        var conCuatro = document.getElementById('conCuatro');

        // contador 200
        var marDos = 0;
        // contador 304
        var marTres = 0;
        // contador 404
        var marCuatro = 0;

        for(var j = 0; j < cabeceraMarcadores.length; j++) {

            if(cabeceraMarcadores[j].statusCode === 200){
                marDos++;
            }
            if(cabeceraMarcadores[j].statusCode === 304){
                marTres++;
            }
            if(cabeceraMarcadores[j].statusCode === 404){
                marCuatro++;
            }
        }

        conDos.innerHTML = marDos;
        conTres.innerHTML = marTres;
        conCuatro.innerHTML = marCuatro;

        //console.log(j);
    }

};


// Cuando el window esta cargado
window.onload = function(){

    Mawlab.capturar();
    setInterval(Mawlab.marcadores, 100);

    var noLink = document.getElementById('chartdiv');
    var noLinkFuck = noLink.children[0].children[0].children[1];
    noLinkFuck.innerHTML = "";
    //console.log(noLinkFuck);

};

//console.log(cabeceraMarcadores)

/*chrome.webRequest.onSendHeaders.addListener(function(n) {

        //console.log(n)

        var a = {

            frameId: n.frameId,
            method: n.method,
            parentFrameId: n.parentFrameId,
            requestHeaders: n.requestHeaders,// importante
            requestId: n.requestId,
            tabId: n.tabId,
            timeStamp: n.timeStamp,
            type: n.type,
            url: n.url

        }


        console.log(
            "Id: " + a.requestId + " " +
            "Method: " + a.method + " " +
            "type: " + a.type + " " +
            "requestHeaders: " + a.requestHeaders + " " +
            "Url: " + a.url);
}, {
    urls: ["<all_urls>"],
    types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
}, ["requestHeaders"]);*/
