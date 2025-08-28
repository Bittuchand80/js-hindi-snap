// Datatypes
// Primitive datatypes - string, number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoareVlue = 100.5   

const isLoggedIn = false

const outsideTemp = null

let userEmail;

const id = 'abc12'
const anotherId = '128'
// console.log(id === anotherId);

const bigNumber = 123577835289n

// Reference(non-primitive datatypes)
// == Array-[], Object-{}, Functions-(){}

const heros = ["Ironman", "thor", "krishna"]

let myobj = {
    name: "Bittu",
    age: 22,
    number: 8918955240,
}

 const myFunction = function(){
     console.log("Hello world");
}

//    Return type of variables in JavaScript
// 1) Primitive Datatypes
    //    Number => number
    //    String  => string
    //    Boolean  => boolean
    //    null  => object
    //    undefined  =>  undefined
    //    Symbol  =>  symbol
    //    BigInt  =>  bigint

// 2) Non-primitive Datatypes
    //    Arrays  =>  object
    //   Function  =>  function
    //   Object  =>  object


// Two types of memory - 1. Stak(primitive datatypes)
//                       2. Heap(Non-primitive datatypes)

let myGamername = "coc"
let anotherGamename = myGamername
anotherGamename = "BGMI"
 console.log(myGamername);
 console.log(anotherGamename);

let userOne = {
    email: "khapi01@gmail.com",
    upi: "user@paytm"
}
let userTwo = userOne
userTwo.email = "chandapurba95@gmail.com"
userTwo.upi = "bittu@ybl"

// console.log(userOne.email);
// console.log(userTwo.email);
// console.log(usernOe.upi);
// console.log(userTwo.upi);
















