// singleton
// obeject.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Hitesh",
    "full name" : "hitesh choudhary",
    [mySym]: "myKey1",
    age :  18,
    location : "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser["mySym"]);
// console.log(typeof jsUser.mySym);
// console.log(jsUser[mySym]);

jsUser.email = "hitesh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "hitesh@microsoft.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());