//143:- show how to use the.the () and .catch() methods to handle promise resolution and rejection.
var conditionPromise = new Promise(function (reslove, reject) {
    var success = Math.random() > 0.5;
    if (success) {
        reslove("success!");
    }
    else {
        reject(new Error("failure"));
    }
});
conditionPromise.then(function (result) { return console.log(result); }).
    catch((function (error) { return console.log(error.message); }));
