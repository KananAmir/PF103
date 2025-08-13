const wrapper = document.querySelector('.wrapper');

const anchorElement = document.createElement('a');
anchorElement.textContent = "github.com/kananamir"
anchorElement.setAttribute("href", "https://github.com/KananAmir");
anchorElement.setAttribute("target", "_blank");
anchorElement.setAttribute("alt", "github url");

wrapper.appendChild(anchorElement);

const logo = document.getElementById("logo")
logo.setAttribute("width", "200px")


// logo.removeAttribute("alt");

console.log(logo.hasAttribute("alt")); //true
console.log(logo.hasAttribute("title")); //false




console.log(logo.getAttribute("src"));



const title = document.querySelector('#title');

console.log(title.getAttribute("data-info")); // "This is a title"


console.log(title.dataset.info); // "This is a title"


title.style.color = "red";
title.style.fontSize = "30px";
title.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";



// title.className = "new-title-class";

// console.log(title.className);



//add, remove, toggle, contains, replace


// title.classList.add("font-32")
// title.classList.remove("bg-orange")


// console.log(title.classList.contains("bg-orange"));
// console.log(title.classList.replace("bg-orange", "bg-blue"));


const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener("click", ()=>{
    title.classList.toggle("hide");
})