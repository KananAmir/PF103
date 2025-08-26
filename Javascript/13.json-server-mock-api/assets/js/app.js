const BASE_URL = "http://localhost:8080"


fetch(`${BASE_URL}/products`).then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
    
})