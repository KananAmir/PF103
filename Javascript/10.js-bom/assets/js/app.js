// DOM - document object model
// BOM - browser object model


// global object: window


// console.log(this);
console.log(window);


// alert
// confirm
// prompt

// window.alert("Hello, PF103")
// window.confirm("Are u sure to exit page??") // true or false
// window.prompt("enter ur name here:", "MR. Zaur")



// window.location.href = "https://code.edu.az/"
// window.location = "https://code.edu.az/"

console.log(window.location.href);


const copyBtn = document.querySelector("#copy")
const text = document.querySelector(".text")


copyBtn.addEventListener("click", (e) => {
    navigator.clipboard.writeText(text.textContent)
    e.target.textContent = "copied"


    Toastify({
        text: "Text copied!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
})



//js timing functions

// setTimeout vs setInterval


// window.setTimeout()
let timeout = setTimeout(()=>{
    console.log("hello");
    // window.close()
    // window.location = "https://code.edu.az/"
}, 5000)

// console.log(timeout);

// clearTimeout(timeout)

let count = 0;
let interval = setInterval(()=>{
    count++
    console.log(count); 

    if(count === 100){
        clearInterval(interval)
    }
}, 10)



