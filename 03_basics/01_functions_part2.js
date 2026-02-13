// Functions With Objects and Array

function calculateCartPrice (val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 600, 500));

const user = {
    username: "himanshu",
    price: 199
}

function handleObject (anyObject) {
    console.log(`My username is ${anyObject.username} and price is ${anyObject.price}.`);

}

// handleObject(user)

// handleObject({
//     username: "Hamilton",
//     price: 389
// })


const myNewArray = [200, 400, 300, 600, 4000]

function ReturnSecondValue (getArray) {
    return getArray[1]    
}

// console.log(ReturnSecondValue(myNewArray));
console.log(ReturnSecondValue([200, 400, 8578, 585675, 84574]));



