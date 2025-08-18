const header = document.querySelector(".header-bottom")


// window.addEventListener("scroll", ()=>{
//     if(window.scrollY > 0){
//         header.classList.add("header-scroll")
//     }else{
//         header.classList.remove("header-scroll")
//     }
// })



window.addEventListener("scroll", ()=>{
    header.classList.toggle("header-scroll", window.scrollY > 0)
})



window.addEventListener("load", ()=>{
    console.log("home page loaded");
})

