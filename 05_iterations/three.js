// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()

map.set("IN", "INDIA")
map.set("USA", "UNITED STATES OF AMERICA")
map.set("Fr", "FRANCE")
map.set("IN", "INDIA")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key, " :- ", value);
}

const myObject = {
    "game1" : 'NFS',
    "game2" : 'Spiderman'
}

for (const [key,value] of myObject) {
    // console.log(key, " :- ", value);  // ===> myObject is not iterable using forof loop
}



