// *********** Memory 10th video ************** 

//  Stack Memory(Primitive) , Heap Memory(Non-Primitive)

let myYoutubeName = "hitechchaudharydotcom"

let anotherName = myYoutubeName

anotherName = "chaiaurcode"

// console.log(myYoutubeName); // ==> not changed cuz of Stack Memory used in Primitive types

let userOne = {
    emai:"user@google.com",
    upi: "user@hdfc",
}

let userTwo = userOne

userTwo.email = "himanshu@gmail.com"

console.log(userOne.email); // ===> changed cuz of Heap memory used in Non - Primitive Data types.

console.log(userTwo.email);



