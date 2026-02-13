const name = "Himanshu"
const repoCount = 12

// console.log(name + repoCount); // ==> old way to concatenate strings

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // ===> new way to write the concatenation of the strings (known as "string Interpolation")

// ********* other way to declare string and String Methods ************

const gameName = new String('Game-Of-Thrones')

// console.log(gameName);
// console.log(gameName[0]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf(T));

const newString = gameName.substring(0,5);
// console.log(newString);

const anotherString = gameName.slice(-8,7);
// console.log(anotherString);

const newStringOne = "        hi tesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com//hitesh%20chaudhary"

// console.log(url.replace('%20', '-'));
// console.log(url.includes('himanshu'))

console.log(gameName.split('-'));














