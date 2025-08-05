// const numbers = [2, 5, 1, 8, 4];

// let sum = numbers[0]
// for (let i = 1; i < numbers.length; i++) {
//     sum = sum + numbers[i]
// }

// console.log(sum);


// let sum = 0;

// numbers.forEach((item, index, array)=>{
//     sum+=item
// })

// console.log(sum);


const vegetables = ["Tomato", "Potato", "Onion", "Carrot"]; // array of strings, vegetables


vegetables[0] = "Cabbage"

console.log(vegetables);



const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// #add 'Meat' in the beginning of your shopping cart if it has not been already added
// #add Sugar at the end of you shopping cart if it has not been already added
// #remove 'Honey' if you are allergic to honey
// #modify Tea to 'Green Tea'

//push, pop, shift, unshift

shoppingCart.unshift("Meat")

!shoppingCart.includes("Sugar") && shoppingCart.push("Sugar")

const idxHoney = shoppingCart.indexOf("Honey")

shoppingCart.splice(idxHoney, 1)

const idxTea = shoppingCart.indexOf("Tea")
shoppingCart[idxTea] = "Green Tea"

console.log(shoppingCart);



let str = "hello"
console.log(str.split("").join("-"));


const nums = [1, 2, 3, 4, 5, 6, 7]
// const numsReverse = []
// for (let i = nums.length - 1; i >= 0; i--) {
//    numsReverse.push(nums[i])
// }


// console.log(numsReverse);
nums.reverse()
console.log(nums);




const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies


// webTechs.forEach((item, index , array)=>{
//     console.log(`${index} - ${item}`);
// })


//callback function
function cb(item, index, arry) {
    console.log(item);

}
// webTechs.forEach(cb)

// hof - high order function

// map

// let newWebTechs = webTechs.map((item, i, arr)=>{
//     return item.toLowerCase()
// })

// console.log(newWebTechs);

const numbers = [2, 5, 1, 8, 4];



// const squareNumbers = numbers.map((number)=>{
//     return number ** 2
// })

const squareNumbers = numbers.map((number) => number ** 2)

console.log(squareNumbers);



const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries


const result = countries.map((c) => c.slice(0, 3).toUpperCase())
// ["FIN", "DEN", "SWE", ...]

console.log(result);


const scores = [55, 74, 100, 56, 90]
const numbersArr = [2, -6, 7, 4, -3, 0, 9]

// console.log(scores.find((number) => number > 70));
// console.log(scores.filter((number) => number > 70));

const allPositiveNumbers = numbersArr.filter((n)=> n > 0)

console.log(allPositiveNumbers);
