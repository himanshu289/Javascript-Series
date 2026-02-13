const user = {
    username: "Himanshu",
    loginCount: 8,
    SignedIn: true,

    getUserDetais: function(){
        // console.log("Got user details from the database");
        // console.log(`username : ${this.username}`);
        // console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetais());
console.log(this)


//  ++++++++++ Constructor Function ++++++++++++


function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;   
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

