//147:-explain how to handle errors in a callback pattern
function fetchData(callback) {
    var error = new Error("failed to fetch data");
    var data = "some data";
    if (Math.random() > 0.5) {
        callback(null, data);
    }
    else {
        callback(error);
    }
}
fetchData(function (error, data) {
    if (error) {
        console.error(error.message);
    }
    else {
        console.log(data);
    }
});
