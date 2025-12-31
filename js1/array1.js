const myArr = [10, 20, 30, 40, 50];
const myHeros = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
const myArr2 = new Array(5, 10, 15, 20);

// console.log(myArr[4]);

let myArr3 = myArr.push(60, 70, 80, 100);
//  console.log(myArr);
//  console.log(myArr3);

 let myArr4 = myArr.pop();
//  console.log(myArr4);     [pop ar kaj last element ta remove kore dey]
//  console.log(myArr);

    let myArr5 = myArr.unshift(1, 2, 3, 4, 5, 6, 7, 8, 9);
//   console.log(myArr);  [unshift ar kaj array r surute element add kore dey]
//   console.log(myArr5);

let myHeros2 = myHeros.shift();
//  console.log(myHeros2); [shift ar kaj array r surute element ta remove kore dey]
//  console.log(myHeros);
 
// console.log(myArr.includes(5));
// [includes ar kaj kono element array r moddhe ache kina ta check kore. jodi thake tahole true r na thakle false return kore]  

// console.log(myArr.indexOf(80));
// [indexOf ar kaj kono element array r moddhe kothay ache ta bole dey. jodi na thake tahole -1 return kore]

// console.log(myArr.join("-"));
// console.log(myHeros.join("*"));
// console.log(myArr.join('^'));
// [join ar kaj array r element guloke ekta string e convert kore dey, r element gulor moddhe je character ta dibo seta diye separate kore dey]

const myn1 = myArr.slice(2, 11);
// console.log(myn1);
// [slice ar kaj array r moddhe theke kono specific part ta new array te return kore dey. ekhane 2 theke suru kore 6 er age porjonto element gulo new array te asbe]

const myn2 = myArr.splice(7, 1);
console.log(myn2);
// [splice ar kaj array r moddhe theke kono specific part ta remove kore dey. ekhane 3 no index theke suru kore 4 ta element remove kore dey r remove kora element gulo new array te return kore de]

