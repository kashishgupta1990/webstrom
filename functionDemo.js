var sum = function (a, b) {
    return a+b;
}
var add = sum;
sum = 12;
console.log(delete sum);
