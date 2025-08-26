const BASE_URL = "http://localhost:8080"


//getAllData
const getAllData = async (endpoint) =>{
    try{
        const response = await axios.get(`${BASE_URL}/${endpoint}`)
        return response.data
    }catch(err){
        console.log(err);   
    }
}


//getDataByID
const getDataBy = async (endpoint, id) =>{
    try{
        const response = await axios.get(`${BASE_URL}/${endpoint}/${id}`)
        return response.data
    }catch(err){
        console.log(err);   
    }
}

//deleteDataById
const deleteDataById = async(endpoint, id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${endpoint}/${id}`)
        return response
    } catch (error) {
        console.log(err);   
    }
}

//addNewData
const addNewData = async(endpoint, payload) => {
    try {
        const response = await axios.post(`${BASE_URL}/${endpoint}`, payload)
        return response
    } catch (error) {
        console.log(err);   
    }
}


//editData

// const editDataById = async(endpoint, payload, id) => {
//     try {
//         const response = await axios.patch(`${BASE_URL}/${endpoint}/${id}`, payload)
//         return response
//     } catch (error) {
//         console.log(err);   
//     }
// }

const editDataById = async(endpoint, payload, id) => {
    try {
        const response = await axios.put(`${BASE_URL}/${endpoint}/${id}`, payload)
        return response
    } catch (error) {
        console.log(err);   
    }
}
