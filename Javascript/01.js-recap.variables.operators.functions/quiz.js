console.log("lorem ipsum");


// falthy values in js: 0, -0, 0n, NaN, null, undefined, false, "", ``, ''

// truth values: [], {}, "salam", -115, " ", 244, etc..

let users = ["gunel", "zaur", "alizamin"];



// console.log(username);








// let users = [

// ]

// console.log(users);



// function sayHi() {

// }

// console.log(sayHi()); // undefined

// console.log("" + 1 + 0); //"10"
// console.log("" + 10 - 5); // 5
// console.log("" + 10 - "a"); // NaN

// console.log(typeof NaN); // number
// console.log(typeof null); //object


// result = "3" + null;
// console.log(result, "-", typeof (result));



// let a = "3";

// console.log(Number(a)); // 3
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0

// console.log(Boolean("hello")); //true
// console.log(Boolean(null)); // false
// console.log(Boolean("null")); // true
// console.log(Boolean(NaN)); // false
// console.log(Boolean(undefined)); // false 
// console.log(Boolean(17)); // true



// let number = 10;

// const foo = n => {
//     n = n * 10
//     console.log(n);
// }

// console.log(number);

// topla(1, 2)

//declearation function
// function topla (a, b){
//     let c = a + b
//     console.log(`Cavab: ${c}`);
// }


// topla(1, 2) // error

//arrow
// const topla = (a, b) => {
//     let c = a + b
//     console.log(`Cavab: ${c}`);
//     return c
// }


// let c = topla(1, 2)


// console.log("c", c);


// function test() {
//     console.log("hello");

// }
// test()



// let sum = (num1, num2)=>{
//     return num1 + num2
// }
// console.log(sum()); NaN
// let sum = (num1 = 0, num2 = 0) => {
//     return num1 + num2
// }

// console.log(sum(1, 2)); // 3
// console.log(sum("1", "2")); // 12
// console.log(sum());
// console.log(sum(5));


//declearation or regular function

// function greeting(){
//     console.log("Hello");
// }


//arrow function
// const greeting = () => {
//     console.log("Hello");
// }
// const greeting = () => "hello"

//expression function

// const greeting = function(){=3
//     console.log("Hello");
// }

// let  = "salam"

// IIFE - immediately invoked function expression

// console.log("aaa");


// (function () {
//     console.log("Hello");
// }
// )();

// (() => {
//     console.log("salam");
// })();


// && || ??

console.log(true && 17 && "salam"); // "salam"
console.log(null && undefined && "salam"); // null
console.log("hello" && undefined && "salam"); // undefined

console.log(true || 17 || "salam"); //true
console.log(null || undefined || "salam"); // "salam"
console.log(null || undefined || false || NaN); // NaN


// nullish coelescing

console.log(0 || "salam"); // "salam"
console.log(0 ?? "salam"); // 0
console.log(17 ?? "salam"); // 17
console.log(null ?? "salam"); // "salam"
console.log(undefined ?? "salam"); // "salam"

const user = {
    username: "zaur",
    age: 17,
    status: "student"
}

let message;
// let message = user.age >=18 ? "you can vote" : "you can not vote yet!"
message = user.age >= 18 && "you can vote"

console.log(message);


// if(user.age >= 18){
//     message = "you can vote"
// }else{
//     message = "you can not vote yet!"
// }




// window.alert("hello world!")
// let username = window.prompt("enter ur name here..")
// let isConfirm = window.confirm("Are u sure to delete?")

// if(isConfirm){
//     console.log("yes, u wanna delete")
// }else{
//     console.log("no, u dont wanna delete")
// }


// let price = Number(prompt("enter price!")) //price 15 daxil edirsiniz
// let price = +(prompt("enter price!")) //price 15 daxil edirsiniz

// let newPrice = price + 5;
// alert(newPrice); // 20

let age = 15;
let accessAllowed = age > 18 ? true : false;
console.log(accessAllowed);


// if ("0") {
//   alert("Hello");
// }
// alert("Goodbye");


if ("") {
  console.log(false);
} else {
  console.log(true);
}