// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Mummy", "Papa"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)//Add element 9 at the first index and move other element by 1 index
// myArr.shift()//Delete first element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()//convert the array into the string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)//slices till last index-1 but not change the original array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)//splics till last index but also changes the original array
console.log("C ", myArr);
console.log(myn2);