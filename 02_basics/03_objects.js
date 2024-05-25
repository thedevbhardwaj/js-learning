// singleton -> for literals multitone -> for object construtor
// Object.create //constructor

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Dev",
    "full name": "Dev Bhardwaj",
    // mySym: "mykey1",//here mySym is an string datatype
    [mySym]: "mykey1",//here mySym is an symbol datatype
    age: 19,
    location: "Jaipur",
    email: "dev@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)//object is freeze here and it can not be changed now onwards(will not give any error if we try to change)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());