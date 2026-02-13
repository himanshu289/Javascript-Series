// // Promise stored in other variable and then explicitly resolved/consumed.
// const promiseOne = new Promise(function(resolve,reject) {
//     // Do an async task
//     // DB calls, cryptography, network

//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
// })

// // Promise direct resolved means in only one function
// new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function() {
//     console.log("Async 2 Promise resolved/consumed.");
// })

// // Take input in promise through the resolve
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "Himanshu", email: "himanshu@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })


// Promise with then and catch and finally

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "Himanshu",password:"123456"})
//         }else{
//             reject("ERROR : Something went wrong")
//         }
//     },1000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error)
// })
// .finally(() => console.log("The promise is either resolved or rejected"))


// Promise using Async-Await function

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "Jayvardhan",password:"123456"})
//         }else{
//             reject("ERROR : New promiseFive Error went wrong")
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then( (response) => {
    return response.json()
})
.then((data) => {console.log(data);
})
.catch((error) => console.log(error))

