// Dates

let myDate = new Date()
// console.log(myDate);
console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// console.log(myDate.toLocaleString())
// let myCreatedDate = new Date(2002, 0, 22)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()//It will give time in ms from the default date of 1/1/1970 to now.

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));//time in seconds

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);//Index ranges from 0-11
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

//In many cases we have to modify our date in specific manner then below given method can be used
newDate.toLocaleString('default', {
    weekday: "long",
    
})
