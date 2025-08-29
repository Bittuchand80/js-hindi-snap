const name = "bittu"
const repoCount = 60

console.log("Hello my name is ${bittu} and my repocount is ${50}");

const gameName = new String('bittu_chand')
// // nsole.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5,));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 10)
console.log(newString);
const anotherString = gameName.slice(-8, 2)
console.log(anotherString);

const newStringOne = "  bittu  "
// trime ar sahajje starting speace and end speace removed kore dai.
console.log(newStringOne.trim());

const url = "https://bittu.com/bittu%20chand"
url.replace('%20', '.')
console.log(url.replace('%20', '.'));
console.log(url.includes('.com'));

const str = "The quick brown fox jumps over the lazy dog.";
// const heros = "My heros are superman and spiderman";
const wordes = str.split("");
// console.log(wordes[4]);


const words = str.split(" ");
// console.log(words[3]);
// Expected output: "fox"

const chars = str.split("");
// console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
// console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

console.log(gameName.split());
























