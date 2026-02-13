// let myName = "Himanshu    "
// let myChannel = "chai   "

// console.log(myName.trueLength);


let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says Hello`);
}

// heroPower.hitesh()
// myHeroes.hitesh()

// myHeroes.heyHitesh()
// heroPower.heyHitesh()


// +++++++++++ INHERITANCE ++++++++++++


const user = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"Himanshu   ".trueLength()