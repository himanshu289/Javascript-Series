const myObject ={
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} is shortcut of  ${myObject[key]}`);
}

const programming = ["js", "cpp", "rb", "java", "py"]

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()

map.set("IN", "INDIA")
map.set("USA", "UNITED STATES OF AMERICA")
map.set("Fr", "FRANCE")
map.set("IN", "INDIA")


for (const key in map) {
    // console.log(key); // ===> map is not iteratable using forin loop also.
}

