// SIngleton

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Himanshu",
    "full name": "Himanshu Harsora",
    [mySym] : "myKey1",
    age: 20,
    location: "Surat",
    email: "himanshu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// // console.log(JsUser.mySym);
// console.log(typeof JsUser[mySym]);


JsUser.email = "himanshu@chatgpt.com"
// Object.freeze(JsUser)

JsUser.email = "himanshu@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello JS User");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${JsUser.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
