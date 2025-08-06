// 11) const itCompanies = [Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon]

// #Slice out the first 3 companies from the array
// #Slice out the last 3 companies from the array
// #Slice out the middle IT company or companies from the array
// #Sort companies array using sort() method
// #Change each company name to uppercase one by one and print them out
// #Check if a "Google" company exists in the itCompanies array. If it exist return the company else return a company is not found
// #Filter out companies which have more than one 'o' without the filter method

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM"]

// console.log(itCompanies.slice(0, 3));
// console.log(itCompanies.slice(-3));


// const length = itCompanies.length

// if(length % 2 === 0){
//     console.log(itCompanies.slice(length / 2 - 1, length / 2 + 1));
// }else{
//     console.log(itCompanies.slice(Math.floor(length/2), Math.floor(length/2) + 1));
// }

// const sortedCompanies = itCompanies.toSorted();

// console.log(sortedCompanies);

// itCompanies.forEach((element)=>{
//     console.log(element.toUpperCase());
// })


// if(itCompanies.includes("Google")){
//     console.log("Google exists in the array");
// }else{
//     console.log("Company not found");
// }

// itCompanies.includes("Google") ? console.log("Google exists in the array") : console.log("Company not found");


// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//        console.log(`${i}, ${j}`);
//     }
// }

// for (let i = 0; i < itCompanies.length; i++) {
//     let countO = 0
//   for (let j = 0; j < itCompanies[i].length; j++) {
//     if(itCompanies[i][j] === "o"){
//         countO++;
//     }
//   }

//   if( countO > 1 ){
//     console.log(itCompanies[i]);
//   }

// }

for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i].indexOf("o") !== itCompanies[i].lastIndexOf("o")) {
        console.log(itCompanies[i]);
    }
}


const numbers = [2, 52, 12, 99, 22]

// find sum
// find max digit
// find min digit

// let sum = numbers[0]

// for (let i = 1; i < numbers.length; i++) {
//     sum += numbers[i]

// }
// console.log("sum", sum);

// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));


let MAX = numbers[0]
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > MAX) {
        MAX = numbers[i]
    }
}


console.log(MAX);


let MIN = numbers[0]
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < MIN) {
        MIN = numbers[i]
    }
}



// 6) hər hansı string'i tərsinə çevirən funksiya yazın 
//  const reverseString = (str) => {
//     let reverse = ""
//     for(let i = str.length - 1; i >= 0; i-- ){
//         reverse = reverse + str[i]
//     }

//     return reverse
//  }

const reverseString = (str) => str.split("").reverse().join("")


console.log(reverseString("code"));
console.log(reverseString("hello"));

//  "code" -> "ecod"
//  "hello" -> "olleh"


// 4)  ədədin bölənlərinin sayını tapan funksiya yazın.
const divisorCountSimple = (number) => {
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++
        }
    }

    return `${number} has ${count} divisor`
}

console.log(divisorCountSimple(10));
console.log(divisorCountSimple(100));
console.log(divisorCountSimple(10000));
