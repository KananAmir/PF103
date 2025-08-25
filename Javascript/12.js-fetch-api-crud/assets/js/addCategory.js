import { BASE_URL } from "./constants.js"

const addCategoryForm = document.querySelector("form")

addCategoryForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const name = document.querySelector("#name").value.trim()
    const description = document.querySelector("#description").value.trim()

    // console.log(name);
    // console.log(description);


    const isValidate = validate()

    if (isValidate) {
        const newCategory = {
            name: name,
            description: description
        }


        fetch(`${BASE_URL}/categories`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCategory)
        }).then((res) => {

            if (res.status >= 200 && res.status < 300) {
                setTimeout(() => {
                    window.location.href = "index.html"
                }, 1500);
            }
        }).catch((err) => {
            console.log(err);
        })
    }




    // resetForm()
    // e.target.reset()

})


function resetForm() {
    const name = document.querySelector("#name")
    const description = document.querySelector("#description")
    name.value = ""
    description.value = ""
}

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

    // if (name.value.trim() === "") {
    //     isValidate = false
    //     nameError.textContent = "Name is required"
    //     nameError.classList.remove("hidden")
    // } else if (name.value.trim().length < 4 || name.value.trim().length > 50) {
    //     isValidate = false
    //     nameError.textContent = "Name length must be b/w 4 and 50"
    //     nameError.classList.remove("hidden")
    // }

    if (description.value.trim() === "") {
        isValidate = false
        descriptionError.textContent = "Description is required"
        descriptionError.classList.remove("hidden")
    }

    return isValidate
}