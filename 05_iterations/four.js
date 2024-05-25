const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]
// remember that the key used for (const key in arr) here is a string so if u want to do some operations on that key thinking its a number that is not possible. 
// Why is the key a string you would ask that is because its being used for an object and object takes strings as keys.
for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {//Here map elements will not be accessed as map is not useful for iterations
//     console.log(key);
// }