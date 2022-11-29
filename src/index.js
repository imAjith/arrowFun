import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

function add(x) {
  return x + x;
}
const multiple = (x) => {
  return x * x;
};

console.log(multiple(3));
console.log(add(4));

////Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map((x) => x * 2);
console.log(newNumbers);

//////Filter - Create a new array by keeping the items that return true.
const newNumberss = numbers.filter((num) => num < 10);
console.log("newNumber", newNumberss);

//Reduce - Accumulate a value by doing something to each item in an array.
var nnewNumber = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log("nnewNumbr", nnewNumber);

////Find - find the first item that matches from an array.
const newNumber = numbers.find((num) => num > 10);

////FindIndex - find the index of the first item that matches.
const newNumbert = numbers.findIndex((num) => num > 10);
