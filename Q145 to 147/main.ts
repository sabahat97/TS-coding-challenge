// 146 :- show an example of a callback function used to fliter an array of numbers

const numbers: number []= [1,2,3,4,5,6,7,8]
const filteredNumbers : number[] = numbers.filter((number)=>number >5);
console.log(filteredNumbers)// output 6 7 8