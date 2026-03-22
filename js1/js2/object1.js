const mySymbol = Symbol('uniqueIdentifier')


const JsUser = {
    name: "Alice",
    "full name": "Alice Wonderland",
    [mySymbol]: "uniqueIdentifier",
    age: 30,
    location: "Wonderland",
    email: "alice@example.com",
    isLoggedIn: true,
    LastLoginDays: ["Monday", "Wednesday"]
}
console.log(JsUser.name);
console.log(JsUser["full name"]);
console.log(JsUser[mySymbol]);

JsUser.email = "chandapurba95@gmail.com"
JsUser["full name"] = "Chandapurba Sahoo"
JsUser.age = 28

console.log(JsUser);
// Object.freeze(JsUser) [freeze the object, no changes allowed]]
// JsUser.age = 35
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hi JS User");
}
// console.log(JsUser.greeting());

JsUser.greetingTwo = function () {
    return `your email is ${this.email}`;
}
// console.log(JsUser.greetingTwo());

JsUser.getLocation = function () {
    return this.location;
}
console.log(JsUser.getLocation());

JsUser.getLastLoginDays = function () {
    return this.LastLoginDays;
}
// console.log(JsUser.getLastLoginDays());
// console.log(JsUser);

module.exports = JsUser
console.log(Object.keys(JsUser));
console.log(Object.values(JsUser));
console.log(Object.entries(JsUser));
console.log(Object.hasOwn(JsUser, 'age'))
console.log(Object.hasOwn(JsUser, 'country'));





