const marvel_heroes = ["Spider-Man", "Iron Man", "Thor", "Hulk", "Captain America"];
const dc_heroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"];
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);

const all_heroes_spread = [...marvel_heroes, ...dc_heroes];
// console.log(all_heroes_spread);

const another_array =[1,2,3,[4,5,6],7,8,[10,11],[8,3,6]];
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray(Apurba));
// console.log(Array.from("Apurba"));
// console.log(Array.from({name: "Apurba"}));

let score1 = 1000
let score2 = 2000
let score3 = 3000
// console.log(Array.of(score1,score2,score3));








