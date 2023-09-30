// primitive 

// 7 type: string, number, boolean, null , undefined, symbol, BigInt




const scroe = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTem = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

// const bigNumber = 3214566541233214n

// console.log(id === anotherId);

// Reference (non-primitive)

// Array, Objects, Functions

const heros = ["shaktimaan", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction);

// +++++++++++++++++++++++++++++++++++++++++

// Slack (primitive), Heap (non-primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);