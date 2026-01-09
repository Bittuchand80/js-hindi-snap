// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// } [Commented out the above code to replace it with a version that returns the result instead of logging it directly to the console]


 function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(5, 7)
// console.log("Result: ", result);

function loginUserMessage(username = "Anonymus") {
    // if (username === undefined) {
    //     console.log("please enter a username");
    //     return
    // }
    if(!username){
       console.log("please enter a username");
         return
       
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("ohgu"));


function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(100, 200, 400, 800));[rest operator example]

const user = {
    username: "ohgu",
    prices: 5000,
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); 
}
// handleObject(user)
handleObject({
    username: "newuser", 
    price: 3000
})

const myNewArray = [200, 400, 600, 800]
function handleArray(getArray){
    return getArray[2]
}
console.log(handleArray(myNewArray));
console.log(handleArray([100, 300, 500, 700]));








