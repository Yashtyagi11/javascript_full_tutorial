// Primitive Data Types 

// 7 primitive data types in JavaScript
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// Example of each primitive data type:

// 1. Number
let num = 42; // Represents both integer and floating-point numbers 
console.log(typeof num); // "number"
// 2. String
let str = "Hello, World!";
console.log(typeof str); // "string"
// 3. Boolean
let bool = true;
console.log(typeof bool); // "boolean"
// 4. Undefined
let undef;
console.log(typeof undef); // "undefined"
// 5. Null
let nul = null;
console.log(typeof nul); // "object" (this is a known quirk in JavaScript)
// 6. Symbol
let sym = Symbol("unique");
console.log(typeof sym); // "symbol"
// 7. BigInt
let bigInt = 9007199254740991n; // 'n' at the end denotes a BigInt
console.log(typeof bigInt); // "bigint"
// Note: Primitive data types are immutable and are compared by value.
// They are stored directly in the variable's memory location.



// Non-Primitive Data Types (Reference Types)
// The primary non-primitive data type in JavaScript is Object.

// Example of an Object:
let obj = {
    name: "John",
    age: 30,
    isStudent: false
};
console.log(typeof obj); // "object"
// Objects can store multiple values as key-value pairs.
// They are mutable and are compared by reference.
// When you assign an object to another variable, you are copying the reference, not the actual object.
let anotherObj = obj;
anotherObj.age = 31;
console.log(obj.age); // 31, because both variables reference the same object in memory.

// Other non-primitive data types include Arrays and Functions, which are also objects in JavaScript.

// Example of an Array:
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // "array" (arrays are a type of object)


// Example of a Function:
function greet() {
    return "Hello!";
}
console.log(typeof greet); // "function"

// Summary:
// Primitive data types are simple and immutable, while non-primitive data types (objects) are complex and mutable.
// Understanding the difference between these types is crucial for effective JavaScript programming.






