//144 :- explain the use of the Promise.all() method with an example.
var Promise1 = Promise.resolve(3);
var Promise2 = 42;
var Promise3 = new Promise(function (resolve) {
    setTimeout(resolve, 100, "foo");
});
Promise.all([Promise1, Promise2, Promise3]).then(function (values) {
    console.log(values);
});
