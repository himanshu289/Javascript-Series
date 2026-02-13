// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "12345")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// ++++++ BEHIND THE SCENE +++++++

function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new user("tea", "tea@gmail.com", "123445")
console.log(tea.changeUsername());
console.log(tea.encryptPassword());
