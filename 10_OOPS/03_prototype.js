// let myName = "Dev     "
// let mychannel = "Hello_Dev     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.dev = function(){
    console.log(`dev is present in all objects`);
}

Array.prototype.heyDev = function(){
    console.log(`dev says hello`);
}

// heroPower.dev()
// myHeros.dev()
// myHeros.heyDev()
// heroPower.heyDev()

// inheritance

const User = {
    name: "lionos",
    email: "lionos@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Bhardwaj     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"dev".trueLength()
"iceTea".trueLength()