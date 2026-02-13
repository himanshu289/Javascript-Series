// ********* array ****************

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Shaktimaan", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr);


// *********** Array Methods ***************

// myArr.push(6)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(4));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


// ******** Slice, Splice ***********

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)

console.log("C ",myArr); // ==> Changed in main array only stays the remaining part after the splicing
console.log(myn2);









