//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);
console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Dev",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3






//additional
//Stack is for primitive datatypes and heap is related to the non-primitive
//It means in stack values are get copied but in heap reference has been given

let myName = "Dev";
let anotherName = myName;
anotherName = "Yash";

console.log(myName);
console.log(anotherName);

let obj1 = {
    name : "Dev",
    Id : 2015
}
let obj2 = obj1;
obj2.name = "yash";

//the name in both object will be changed here
console.log(obj1.name);
console.log(obj2.name)
