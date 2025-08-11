// Spread vs Rest operators
// module


//spread
// const nums = [2, 6, 3, 9, 22, 4]
// console.log(Math.max(...nums));


const students = ["gunay", "daniz"]

const newStudents = ["azif", "zaur", ...students]

console.log(newStudents);


const numbers = [1, 2, 3]
const numbers2 = [4, 5, 6]

// console.log(numbers.concat(numbers2));
console.log([...numbers, ...numbers2]);



function sum(a, b, c) {
    return a + b + c;
}


console.log(sum(2, 4, 6)); // 12

const nums = [1, 2, 3];
const result = sum(...nums);
console.log("Result of sum:", result); // 6



// rest
const techs = ["html", "css", "js", "react", "redux"]

let [h, , j, ...restTechs] = techs

console.log(restTechs);

function sumOfAllArguments(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0)

}


console.log(sumOfAllArguments(2, 3));
console.log(sumOfAllArguments(2, 3, 9));
console.log(sumOfAllArguments(2, 3, 9, 5));
console.log(sumOfAllArguments(2, 3, 9, 5, 34, 3, 2342, 234, 234, 234, 234, 234, 234));


const animal = {
    age: 3,
    speak: function(){
        console.log("Hello");
    }
}

const dog = {
    name: "Buldog"
}


// dog.__proto__ = animal

Object.setPrototypeOf(dog, animal)
dog.speak();


console.log(animal);
