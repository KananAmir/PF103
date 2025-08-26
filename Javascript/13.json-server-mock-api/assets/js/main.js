const BASE_URL = "http://localhost:8080"

const ENPOINTS = {
    PRODUCTS: "products",
    USERS: "users",
    CATEGORIES: "categories",
}

// function getData(endpoint){
//     fetch(`${BASE_URL}/${endpoint}`)
//         .then((res)=>res.json())
//         .then((data)=>{
//             console.log(data);
//         }).catch((error)=>{
//             console.log(error);
//         })
// }



// axios.get(`http://localhost:8080/users`)
//     .then((response)=>{
//         // console.log(response);
//         console.log(response.data);
//     }).catch((err)=>{
//         console.log(err);  
//     })

function getData(endpoint){
    axios(`${BASE_URL}/${endpoint}`)
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
}
// getData("products")
// getData(ENPOINTS.PRODUCTS)
// getData(ENPOINTS.CATEGORIES)
// getData(ENPOINTS.USERS)



// const axiosInstance = axios.create({
//     baseURL: "http://localhost:8080/",
//     timeout: 1500,
//     headers: {"Content-Type": "application/json"}
// })

// axiosInstance.get("users").then((res)=>{
//     console.log(res.data);
// })



// async vs await

// function sum(a,b){
//     return a+b
// }
// console.log(sum(1,2)); // 3

// async function sum(a,b){
//     return a+ b
// }

// sum(1,2).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })




//error handling - try catch

async function getCategories(){
    try {
        const response = await axios(`${BASE_URL}/categories`)
        console.log(response.data);
    } catch (error) {
        console.log(error);
        
    }
}

getCategories()

