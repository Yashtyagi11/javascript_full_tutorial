"use strict"; // treat all JS code as newer version

// alert(3 + 4); // we use alert to show a message box
// we are using nodejs ,not browser, so alert is not defined
console.log(3 + 4); 





// Data Types in JS

// 1. Number
console.log(4); // integer
console.log(3.5); // decimal number 
console.log(-23); // negative number

// 2. String
console.log("Hello World"); // double quotes
console.log('Hello World'); // single quotes
console.log(`Hello World`); // backticks

// 3. Boolean
console.log(true); // true
console.log(false); // false
// Boolean can be used in conditional statements

// 4. Undefined
let undef;
console.log(undef); // undefined
// if a variable is declared but not assigned a value, it is undefined
console.log(typeof undef); // to check the data type

// 5. Null
let empty = null;
console.log(empty); // null
// null represents the intentional absence of any object value
console.log(typeof empty); // to check the data type
// typeof null is an object due to a historical bug in JS

// 6. Object
let person = {
    name: "John",
    age: 30
};
console.log(person);
console.log(typeof person); // to check the data type
// Objects are used to store collections of data

// 7. Symbol (ES6)
let sym = Symbol("unique");
console.log(sym);
console.log(typeof sym); // to check the data type
// Symbols are unique and immutable data types used as identifiers for object properties

// Summary of Data Types
// Number: for numeric values
// String: for text
// Boolean: for true/false values
// Undefined: for uninitialized variables
// Null: for empty values
// Object: for collections of data
// Symbol: for unique identifiers

// Note: JavaScript is a dynamically typed language, meaning you don't have to declare the data type of a variable explicitly. The type is determined automatically during runtime.


