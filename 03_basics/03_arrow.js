const user = {
    username: "dev",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);//Here this will return all the key value pairs
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);//It will give null parenthesis

// function chai(){
//     let username = "hitesh"
// console.log(this);//Gives more data 
//     console.log(this.username);//print username
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "dev"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2//Implicit return 

// const addTwo = (num1, num2) => ( num1 + num2 ) //Implicit return no need to use return keyword

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()