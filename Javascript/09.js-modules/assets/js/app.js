import { userName as istifadəçi, products } from "./data.js"
import greeting, { sum } from "./utils.js"

let userName = "jhon_doe"
console.log(userName);

// let greeting = "asdasd" // error
const list = document.querySelector(".list")

products.forEach((p)=>{
    const liElem = document.createElement("li")
    liElem.textContent = p.name
    list.append(liElem)
})


console.log(sum(1,2));
console.log(sum(4, 9));


console.log(greeting("gunay"));




console.log(istifadəçi);
