// for

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);

// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);

// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5){
//         console.log("5 number is best");
//     }
//     console.log(element);

// }

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
 for (let j = 0; j <= 10; j++) {
    console.log(`inner loop value ${j} and inner loop ${i}`);
 }
}

// table print karne ke liye

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
 for (let j = 0; j <= 10; j++) {
   console.log(i + '*' + j + ' = ' + i*j );
 }
}