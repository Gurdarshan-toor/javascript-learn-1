function SayMyName() {
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

// SayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    // or
    return number1 + number2
}

// addTwoNumbers(3, 4)
const result = addTwoNumbers(3, 4)

// console.log("Result: ", result);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// function loginUserMessage(username){
//      if(username === undefined){
//         console.log("Please enter a username");
//         return
//      }
//     return `${username} just logged in`
// }
// or
function loginUserMessage(username = "sam"){
     if(!username){
        console.log("Please enter a username");
        return
     }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh")); 
// console.log(loginUserMessage("hitesh")); 

// function with object and array

function calculaterCartPrice (...num1) {
    return num1
}

console.log(calculaterCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// or
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// or
console.log(returnSecondValue([200, 400, 100, 600]));
