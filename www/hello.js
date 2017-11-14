module.exports = (function(){

    var mostrar = function(args, successCallback, errorCallback){
        cordova.exec(successCallback, errorCallback, "hellopiv", "funcionJava", [args]);};

    return {
        functionHello:mostrar
    };


})();