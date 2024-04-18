// 145:- create a function that accepts to a callback and invokes it with some argumnents
function excuteCallback(callback, arg1, arg2) {
    callback(arg1, arg2);
}
var add = function (a, b) {
    console.log(a + b);
};
excuteCallback(add, 6, 3); // output 9
