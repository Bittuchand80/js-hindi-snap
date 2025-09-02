// let myDate = new Date()
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleTimeString('en-IN'));
// console.log(myDate.toUTCString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());    Date is a object in javascript.
// console.log(typeof myDate);

let myCreatedDate = new Date("02-07-2002");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);      2tor ai value mili sceond a asbe.
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1500));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getUTCDate());

newDate.toLocaleString('default',{
    weekday: "long",
    dateStyle: "full",
})















