import emojipedia from "./emojipedia";

const meaning = emojipedia.map(function (x) {
  return x.meaning.substring(0, 100);
});
console.log(meaning);

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//map
const newNumbers1 = numbers.map(function (num) {
  return num * 2;
});
console.log(newNumbers1);

//forEach

const newNumbers2 = [];
numbers.forEach(function (num) {
  return newNumbers2.push(num * 2);
});
console.log(newNumbers2);

//Filter - Create a new array by keeping the items that return true.

//filter
const newNumbers3 = numbers.filter(function (x) {
  return x > 10;
});
console.log(newNumbers3);

//forEach

const newNumbers4 = [];
numbers.forEach(function (num) {
  if (num > 10) {
    newNumbers4.push(num);
  }
  return newNumbers3;
});
console.log(newNumbers4);

//Reduce - Accumulate a value by doing something to each item in an array.

const newNumber5 = numbers.reduce(function (accumulator, currentNumber) {
  //console.log("accumulator = " + accumulator);
  //console.log("currentNumber = " + currentNumber);

  return accumulator + currentNumber;
});
console.log(newNumber5);

//forEach

var newNumber6 = 0;
numbers.forEach(function (currentNumber) {
  newNumber6 += currentNumber;
});
console.log(newNumber6);

//Find - find the first item that matches from an array.

const newNumber7 = numbers.find(function (num) {
  return num > 10;
});
console.log(newNumber7);

//FindIndex - find the index of the first item that matches.

const newNumber8 = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(newNumber8);
