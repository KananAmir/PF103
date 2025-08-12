// DOM - Document Object Model
// BOM - Browser Object Model

// window object - global object in browser

// console.log(window);


console.log(document);
console.log(document.URL);
console.log(document.head);
console.log(document.body);


const heading = document.getElementById("heading")

heading.textContent = "Hello, DOM!";
console.log(heading.textContent);



// NodeList vs HTMLCollection


//Node List
const rateBtns = document.getElementsByName("gender")

// rateBtns.forEach((btn) => {
//     console.log(btn);
// })

const allSpanElements = document.getElementsByTagName("span")

console.log(allSpanElements);


Array.from(allSpanElements).forEach(element => {
    console.log(element);
});


const allTextElements = document.getElementsByClassName("text")



console.log(allTextElements);


const info = document.querySelector(".info");
console.log(info);

// const a = document.querySelector("span");
// console.log(a.textContent);

const allParagElems = document.querySelectorAll(".wrapper p")

console.log(allParagElems);



const note = document.querySelector(".note")

note.style.color = "red";
note.style.fontSize = "30px";
note.style.textAlign = "center";

console.log(note.parentElement);


const menuList = document.querySelector("#menu")

console.log(menuList.children);


Array.from(menuList.children).forEach((item) => {
    console.log(item.textContent);
})

console.log(menuList.childNodes);

console.log(menuList.firstElementChild); // firstElementChild returns the first child element, ignoring text nodes
console.log(menuList.firstChild); // firstChild returns text node as well

console.log(menuList.lastChild);
console.log(menuList.lastElementChild);




const currentElem = document.querySelector(".current");

console.log(currentElem.nextElementSibling.textContent);
console.log(currentElem.previousElementSibling.textContent);

console.log(currentElem.nextSibling);


const contactELem = document.querySelector(".contact");
// contactELem.textContent = `<a href="tel:0777777777">+99477777777</a>`
contactELem.innerHTML = `<a href="tel:0777777777">+99477777777</a>`

const card = document.querySelector(".card");
card.innerHTML = `
    <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p class="card-text">This is a card.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    `


console.log(menuList.innerHTML);
console.log(menuList.textContent);
console.log(menuList.innerText);



const wrapper = document.querySelector(".wrapper");
const pElem = document.createElement("p")

pElem.textContent = "Hello, PF103!"
pElem.style.color = "blue";
pElem.style.fontSize = "20px";
pElem.style.backgroundColor = "yellow";


// wrapper.appendChild(pElem);
// wrapper.appendChild(pElem);
// document.body.appendChild(pElem);
// document.body.append(pElem, "sala m"); // append is a modern method that can take multiple nodes and strings
// document.body.prepend(pElem); // append is a modern method that can take multiple nodes and strings



menuList.removeChild(menuList.lastElementChild); // removeChild is used to remove a child element from the parent




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

const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies

const techList = document.querySelector(".tech-list")
techList.innerHTML = ""
webTechs.forEach((tech) => {
    const liElem = document.createElement("li")
    liElem.textContent = tech
    liElem.style.color = "red";

    // liElem.addEventListener("click", function(){
    //     window.alert(`You clicked on ${this.textContent}`);
    // })
    // liElem.addEventListener("click", (event)=>{
    //     window.alert(`You clicked on ${event.target.textContent}`);
    // })
    liElem.addEventListener("click", (event) => {
        //    event.target.style.color = "blue";
        event.target.remove()
    })

    techList.appendChild(liElem)

})

const tableBody = document.querySelector("tbody");
// products.forEach((product)=>{
//     const row = document.createElement("tr");
//     row.innerHTML = `
//             <td>${product.name}</td>
//             <td>${product.price}</td>
//             <td>${product.category}</td>
//     `

//     console.log(row);

//     tableBody.appendChild(row);
// })

products.push({
    name: "Asus Laptop",
    price: 1000,
    category: "electronics"
})
products.forEach((product) => {
    const row = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdPrice = document.createElement("td");
    const tdCategory = document.createElement("td");

    tdName.textContent = product.name;
    tdPrice.textContent = product.price;
    tdCategory.textContent = product.category;

    row.append(tdName, tdPrice, tdCategory);

    tableBody.append(row)

})


const clickBtn = document.querySelector("#btnClick");

clickBtn.addEventListener("click", () => {
    console.log("Button clicked!");
    document.body.style.backgroundColor = "lightblue";
    // document.querySelector("#productsTable").style.display = "none";
    // document.querySelector("#productsTable").innerHTML = ""
    // document.querySelector("#productsTable").remove()
})