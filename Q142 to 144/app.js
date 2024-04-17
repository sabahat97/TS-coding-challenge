//create a promise that resolved with "hello world after 2 second"
var hellopromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("hello world!");
    }, 2000);
});
hellopromise.then(function (message) { return console.log(message); });
