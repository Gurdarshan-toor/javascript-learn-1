// Dates

const myDates = new Date()

// console.log(myDates);
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toLocaleString());
// console.log(typeof myDates);

// let myCreateDate = new Date(2023, 0, 12)
// let myCreateDate = new Date(2023, 0, 12, 5, 3)
let myCreateDate = new Date("2023-01-01")
// console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

// newDate.toLocaleString('default',{
//     weekday: "long",
    
// })