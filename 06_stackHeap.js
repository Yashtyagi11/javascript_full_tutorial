//stack(primitives)  


let name = 'John' // string primitive stored in stack
let anotherName = name // anotherName gets a copy of the value in name

anotherName = 'Doe' // changing anotherName does not affect name
console.log(name) // Output: John
console.log(anotherName) // Output: Doe



//heap(objects)


let userone = {
    email: "user@gmail.com",
    upi: "user@upi"
}                            // object stored in heap

let usertwo = userone // usertwo references the same object in heap

usertwo.email = "usertwo@gmail.com" // changing usertwo.email affects userone.email
console.log(userone.email) // Output: usertwo@gmail.com
console.log(usertwo.email) // Output: usertwo@gmail.com
// To create a separate copy of the object, we can use Object.assign or spread operator
let userthree = Object.assign({}, userone) // creates a shallow copy of userone 
userthree.upi = "userthree@upi" // changing userthree.upi does not affect userone.upi
console.log(userone.upi) // Output: user@upi
console.log(userthree.upi) // Output: userthree@upi
// Alternatively, using spread operator
let userfour = {...userone} // creates a shallow copy of userone
userfour.email = "userfour@gmail.com" // changing userfour.email does not affect userone.email
console.log(userone.email) // Output: usertwo@gmail.com
console.log(userfour.email) // Output: userfour@gmail.com
