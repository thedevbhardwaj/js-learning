const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);//balance is now a confirm number type data

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));//It is significantly use in e-commerce website as to get fix number after decimal point

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
//Other than these above methods we can see min and max value as well

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
//go to browerse then inspect and then write the same as above you get to know different mehtods related to Math

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));//always give higher value
// console.log(Math.floor(4.9));//always give lower value
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());//gives value between 0 to 1
console.log((Math.random()*10) + 1); //we want to ensure that our value should not be less than 1 that's why 1 added so range will be 1 to 11
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)