function calculate(callback){
   var paramLen = arguments.length;
   var param='';
    for (var x = 0; x < paramLen; x++) {
        param += arguments[x] + ",";
    }
    return callback(eval(param.substr(0,paramLen-1)));
}


console.log(calculate(2, 3, function () {
    var result = 0;
    var len = arguments.length;
    for (var x = 0; x < len - 1; x++) {
        result += arguments[x];
    }
    return result;
}));