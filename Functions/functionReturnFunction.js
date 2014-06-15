function a() {
    console.log('a');
    return function () {
        console.log('B');
    }
}

function b() {
    console.log('B');
    b = function () {
        console.log('BC');
    }
}

var z = function () {
    function someSetup() {
        console.log('base setup done');
    }

    function actualWork() {
        console.log('actual Work');
    }
    someSetup();
    return actualWork;
}();

z();