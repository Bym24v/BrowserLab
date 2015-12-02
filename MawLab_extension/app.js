var chkBorrar = document.getElementById('checkBorrar'); // si o no

var getItemTable = localStorage.logBorrar;

//var borrarLog = document.getElementById('logTimeline');
//borrarLog.innerHTML = "";


if(chkBorrar.checked === true){
    setTimeout(function(){ alert("Hello"); }, 3000);
}

function intervalCheck () {
    if(chkBorrar.checked === false){
        localStorage.removeItem("logBorrar");
        localStorage.setItem("logBorrar", "false")

    }

    if(chkBorrar.checked === true){
        localStorage.removeItem("logBorrar");
        localStorage.setItem("logBorrar", "true")
    }
};

setInterval(intervalCheck, 100) // un segundo = 1000 milisegundos

// Preguntamos por el localStorage
if (window.localStorage) {

    // trae el Item loBorrar
    var getItem = localStorage.getItem("logBorrar")

    // Si no existe crea uno nuevo
    if(getItem === null){
        localStorage.setItem("logBorrar", "false")
    }else{
        console.log("yepp")
    }

    // Traemos los datos de localStorage.logBorrar
    var checkLog = localStorage.logBorrar;

    // comprueba el checkBox y le pone su estado
    if(checkLog === "false"){
            chkBorrar.checked = false;
    }

    if(checkLog === "true"){
            chkBorrar.checked = true;
    }
}
else {
    throw new Error('Tu Browser no soporta LocalStorage!');
}


// limpia el log cada 5 minutos // IMPORTANTE hacerlo mejor //
function borrarLog () {

    if(chkBorrar.checked === true){

        var borrarLog = document.getElementById('logTimeline');
        borrarLog.innerHTML = "";
    }
};

setInterval(borrarLog, 300000); // 5 minutos = 300000



