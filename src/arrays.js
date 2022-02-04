// arrays
const myArray = ['string', 1405];
console.log(myArray);
// nested Arrays
const nestedOnes = [['John Wick', 1], ['Parabellum', 2]];
console.log(nestedOnes);
// access array with indexes
const myArrayTwo = [40, 50, 60];
let myData = myArrayTwo[0];
console.log(myData);
// modify data array with indexes
let myArrayThree = myArrayTwo;
myArrayThree[0] = 45;
console.log(myArrayThree);
// get data nested arrays with indexes
const myArrayFour = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];
const myDataTwo = myArrayFour[2][1];
console.log(myDataTwo);
// push() method, adding end array
const myArray5 = [["John", 23], ["cat", 2]];
myArray5.push(['dog', 3]);
console.log(myArray5);
// pop() method, extraction end array
const myArray6 = [["John", 23], ["cat", 2]];
let removedFromMyArray = myArray6.pop();
console.log(myArray6);
// shift() method, extracts first position arrays
// Setup
const myArray7 = [["John", 23], ["dog", 3]];
const removedFromMyArray2 = myArray7.shift();
console.log(myArray7);
// fill and array with methods described before
const myList = [];
const subArrays = [['Chocco bars', 15], ['Chips', 25], ['Churros', 35], ['Calçots', 45], ['Chapatas', 55]];
const pushThem = (arr) => arr.map((el) => myList.push(el));
console.log(pushThem(subArrays));
