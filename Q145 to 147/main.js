// 146 :- show an example of a callback function used to fliter an array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var filteredNumbers = numbers.filter(function (number) { return number > 5; });
console.log(filteredNumbers);
