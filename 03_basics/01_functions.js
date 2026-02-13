    
function sayMyName () {
    console.log("H");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");
}

// sayMyName() 

function addTwoNumber (num1, num2) {
    // let result = num1 + num2
    // return result

    return num1 + num2

    //console.log(num1 + num2);
}

const result = addTwoNumber(2,3)
// console.log("Result : ", result);


function loginUserMessage (username) {
    if(!username) {
         console.log("Please enter valid username");
         return
    }
    return `${username} has just logged in`
}

console.log(loginUserMessage("Himanshu"));



