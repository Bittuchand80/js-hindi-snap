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
console.log(loginUserMessage("ohgu"));
