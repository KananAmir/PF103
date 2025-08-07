// for in & for of loops

const products = [
    { name: "one Product 1", price: 20, category: "electronics" },
    { name: "two Product 2", price: 30, category: "Clothes" },
    { name: "three Product 3", price: 40, category: "Electronics" },
    { name: "four Product 4", price: 50, category: "Clothes" },
    { name: "five Product 5", price: 60, category: "Clothes" },
    { name: "six Product 6", price: 70, category: "Electronics" },
    { name: "seven Product 7", price: 80, category: "Clothes" },
    { name: "eight Product 8", price: 90, category: "electronics" },
];


// const employee = {
//     id: 1,
//     name: "Aydin Mammadov",
//     age: 32,
//     position: "Frontend Developer",
//     salary: 1800,
//     contact: {
//         email: "aydin.mammadov@example.com",
//         phone: "+994501112233",
//     },
//     address: {
//         city: "Baku",
//         street: "Nizami Street 45",
//     }
// }

// console.log(employee["position"]);


let students = ["gunay", "azif", "alizamin"]
let numbers = [3, 6, 1, 9]

// for (let i = 0; i < studens.length; i++) {
//     console.log(studens[i]);    
// }

// for(s of students){
//     console.log(s);
// }

// for(number of numbers){
//     console.log(number);
// }

// for(product of products){
//     console.log(product);
// }


// for(key in employee){
//     console.log(key);
// }

// for(key in employee){
//     console.log(employee[key]);
// }

// for(key in employee){
//     console.log(`${key}: ${employee[key]}`);
// }


//destructing (arrays, objects)


const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies

// let h = webTechs[0];
// let c = webTechs[1];
// let js = webTechs[2];
// let react = webTechs[3];


// let [h, c, ,r] = webTechs

let [h, c, , r, ...restOfWebTechs] = webTechs

console.log(h);
console.log(c);
console.log(r);
console.log(restOfWebTechs);


const employee = {
    id: 1,
    name: "Aydin Mammadov",
    age: 32,
    position: "Frontend Developer",
    salary: 1800,
    contact: {
        email: "aydin.mammadov@example.com",
        phone: "+994501112233",
    },
    address: {
        city: "Baku",
        street: "Nizami Street 45",
    }
}


// let name = employee.name;
// let age = employee.age;
// let salary = employee.salary;
// let contact = employee.contact;

// const { name, age, salary, contact } = employee

// console.log("contact", contact);

// const {email} = employee.contact

// console.log(email);



const { name, age, salary, contact, contact: { email, phone } } = employee


console.log(email);
console.log(contact);


//shallow copy vs deep copy

// const obj = {
//     a: 1,
// }


// const objCopy = obj
// const objCopy = { ...obj }



// obj.b = 2
// objCopy.a = 11


// console.log(obj);
// console.log(objCopy);


const user = {
    username: "daniz",
    email: "daniz@code.edu.az",
    address: {
        city: "Baku",
        country: "Azerbaijan"
    }
}

// const userCopy = { ...user }
// const userCopy = JSON.parse(JSON.stringify(user))

const userCopy = structuredClone(user)


user.isStudent = true
user.address.city = "Sumqayit"

console.log("original", user);
console.log("copy", userCopy);


// window.alert(JSON.stringify(user))
console.log(JSON.stringify(user))
console.log(user)

// JSON - Javascript Object Notation
