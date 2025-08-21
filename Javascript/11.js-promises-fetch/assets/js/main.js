// fetch api

// http request methods: get, delete, post, put (patch)
// CRUD: create read update delete
// http status code:



const URL = "https://northwind.vercel.app/api/categories"

// console.log(fetch("https://northwind.vercel.app/api/categories"));



// fetch(URL).then((response) => {
//     // console.log(response.json());
//     return response.json()
// }).then((data) => {
//     console.log(data);
// })
//     .catch((err) => {
//         console.log(err);
//     })

// fetch(URL).then((response) => {
//     if(!response.ok){
//         throw new Error ("Network response was not ok")
//     }

//     return response.json()
// }
// ).then((data) => {
//     console.log(data);
// }).catch((err) => {
//         console.log(err);
//     })


fetch("https://northwind.vercel.app/api/categories")
    .then((res) => res.json()).then((data) => {
        console.log("categories", data);
    }).catch((err) => {
        console.log(err);
    })

fetch("https://northwind.vercel.app/api/products").then((res) => res.json()).then((data) => {
    console.log("products", data);

}).catch((err) => {
    console.log(err);
})

fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) => {
    console.log("products", data);
}).catch((err) => {
    console.log(err);

})



////////////////////////////////////////////


const getAdviceBtn = document.querySelector("#getAdviceBtn")
const advice = document.querySelector(".advice")
const loading = document.querySelector(".loading")


function getAdvice (){
    loading.classList.add("show")
    advice.innerHTML = ""
    fetch("https://api.adviceslip.com/advice").then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data?.slip?.advice);
        advice.textContent = data?.slip?.advice
    })
    .catch((err)=>{
        console.log(err);
        
    })
    .finally(()=>{
        loading.classList.remove("show")
    })
}

getAdvice()

getAdviceBtn.addEventListener("click", getAdvice)