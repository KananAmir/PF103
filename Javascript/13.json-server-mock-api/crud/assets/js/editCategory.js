import { BASE_URL } from "./constants.js"


const url = new URLSearchParams(window.location.search)
const categoryId = url.get("id")
const addCategoryForm = document.querySelector("form")



const getCategoryById = async(id)=>{
    try {
        const response = await axios.get(`${BASE_URL}/categories/${id}`)
        fillEditForm(response.data)
        
    } catch (error) {
        console.log(error); 
    }
}

if(categoryId){
    getCategoryById(categoryId)
}

function fillEditForm(category){
    const name = document.querySelector("#name")
    const description = document.querySelector("#description")
    name.value = category.name
    description.value = category.description
}

addCategoryForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    try {

        const name = document.querySelector("#name").value.trim()
        const description = document.querySelector("#description").value.trim()


        const isValidate = validate()

        if (isValidate) {

            const newCategory = {
                name: name,
                description: description
            }

            const response = await axios.put(`${BASE_URL}/categories/${categoryId}`, newCategory)

            if (response.status >= 200 && response.status < 300) {
                setTimeout(() => {
                    window.location.href = "index.html"
                }, 1500);
            }
        }
    } catch (error) {
        console.log(error);
    }

})




function validate() {
    const name = document.querySelector("#name")
    const description = document.querySelector("#description")
    const nameError = document.querySelector(".name-error")
    const descriptionError = document.querySelector(".description-error")
    let isValidate = true;

    nameError.classList.add("hidden")
    descriptionError.classList.add("hidden")

    if (name.value.trim() === "") {
        isValidate = false
        nameError.textContent = "Name is required"
        nameError.classList.remove("hidden")
    }

    if (description.value.trim() === "") {
        isValidate = false
        descriptionError.textContent = "Description is required"
        descriptionError.classList.remove("hidden")
    }

    return isValidate
}