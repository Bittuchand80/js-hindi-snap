// const tinderUser = new Object() [singleton object]
 const tinderUser = {} 

tinderUser.id = "109abc"
tinderUser.name = "John"
tinderUser.isLoggedIn = true
// console.log(tinderUser);

const regularUser = {
    email: "jhonwike80@gmail.com",
    fullname: {
        userFullName: {
            firstName: "John",
            lastName: "Wick"
        }
    }
}

// console.log(regularUser.fullname.userFullName.lastName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

const newObject = Object.assign({}, obj1, obj2, obj4)
// console.log(newObject);[assigning multiple objects into one object]
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);[using spread operator to combine multiple objects into one object]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('id'));






