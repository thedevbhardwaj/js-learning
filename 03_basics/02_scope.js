//var c = 300 //all the var element works as an global scope variable irrespect of their declaration scope
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))//No error will be therer as only function declaration is given after this

function addone(num){
    return num + 1
}



addTwo(5)//It will throw as we are strong the value as well in a variable addTwo
const addTwo = function(num){
    return num + 2
}