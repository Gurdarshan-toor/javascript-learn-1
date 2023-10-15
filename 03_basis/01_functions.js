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
console.log(loginUserMessage("hitesh")); 