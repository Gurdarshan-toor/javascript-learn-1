const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// or
// marvel_heros.concat(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// console.log(marvel_heros);
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// OR

// const all_New_Heros = [...marvel_heros, ...dc_heros]

// console.log(all_New_Heros);

const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_Array = another_Array.flat(Infinity)
console.log(real_another_Array);

// console.log(Array.isArray("Hitesh"));   // Questions
console.log(Array.from("Hitesh")); 
// console.log(Array.from({name: "Hitesh"}));

let score1 = 100
let score2 = 200
let score3 =300

console.log(Array.of(score1, score2, score3));

