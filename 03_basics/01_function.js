
function sayMyName(){
    console.log('D')
    console.log('E')
    console.log('V')
}
//sayMyName -> here fuction works as an reference
// sayMyName() //->here function execution happens

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){//In this line number1 and number2 are known as parameters

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)//3,5 are arguments here

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Dev"))
// console.log(loginUserMessage("Dev"))


function calculateCartPrice(val1, val2, ...num1){//here ... is an rest operator which will take all the values which is passed other than val1 and val2
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "dev",
    prices: 199
}

function handleObject(anyobject){//we don't pass parameter as object name instead of that use anyobject
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));