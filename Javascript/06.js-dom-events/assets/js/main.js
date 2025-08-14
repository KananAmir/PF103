// onclick vs addEventListener("click", ()=>{})

const btn = document.querySelector(".click")

btn.addEventListener("click", (e)=>{
    console.log("click 1");
    e.target.style.backgroundColor = "red";
    e.target.textContent = "Clicked!";
})

btn.addEventListener("click", ()=>{
    console.log("click 2");
})

btn.addEventListener("click", ()=>{
    console.log("click 3");
})

// btn.onclick = () =>{
//     console.log("click 1");
// }

// btn.onclick = () =>{
//     console.log("click 2");
// }


btn.addEventListener("contextmenu", (event)=>{
    console.log("context menu");
    console.log(event);
    
})



const box = document.querySelector(".box");

box.addEventListener("mousedown", (e)=>{
    console.log("mousedown");
    console.log(e.target);
})
box.addEventListener("mouseup", (event)=>{
    console.log("mouseup");
})


const search = document.querySelector(".search");

// search.addEventListener("keydown", (event)=>{
//     console.log("keydown")
// })

// search.addEventListener("keyup", (event)=>{
//     // console.log("keyup")
//     console.log(event.target.value);
    
// })

// search.addEventListener("input", (event)=>{
//     // console.log("input");
//     console.log(event.target.value);
// })


search.addEventListener("change", (event)=>{
    console.log("change");
    console.log(event.target.value);
    
})



search.addEventListener("focus", (event)=>{
    console.log("focus"); 
    event.target.style.backgroundColor = "yellow";
})

search.addEventListener("blur", (event)=>{
    console.log("blur"); 
    event.target.style.backgroundColor = "white";
})


const selectUniversity = document.querySelector("#university");


selectUniversity.addEventListener("change", (e)=>{
    console.log(e.target.value);
    
})