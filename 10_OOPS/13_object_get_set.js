//Best method to use getter setter is in first 11_getter_setter file and the 12th and 13th are optional and very rarely used
const User = {
    _email: 'dev.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const chill = Object.create(User)
console.log(chill.email);