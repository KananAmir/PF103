// http request methdos: get, post, delete, put, patch
import { BASE_URL } from "./constants.js"
const table = document.querySelector("table")
const tBody = document.querySelector("tbody")
const spinner = document.querySelector(".spinner")


function getAllCategories() {
    table.classList.add("hidden")
    spinner.classList.replace("hidden", "flex")
    fetch(`${BASE_URL}/categories`, {
        method: "GET"
    })
        .then((response) => {
            // console.log(response.json());
            return response.json()
        })
        .then((data) => {
            console.log(data);
            renderTable(data)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(()=>{
            table.classList.remove("hidden")
            spinner.classList.replace("flex", "hidden")
        })
}


getAllCategories()


function renderTable(categories) {
    tBody.innerHTML = ""

    categories.forEach((category) => {
        const row = document.createElement("tr")

        row.innerHTML = `
            <td class="py-4 px-6 border-b border-gray-200">${category.id}</td>
            <td class="py-4 px-6 border-b border-gray-200 truncate">${category.name}</td>
            <td class="py-4 px-6 border-b border-gray-200">${category.description}</td>
            <td class="py-4 px-6 border-b border-gray-200">
                <button data-id="${category.id}" class="bg-red-500 text-white px-4 py-2 rounded-full text-xs cursor-pointer delete">delete</button>
            </td>
        `
        tBody.append(row)
    })


    const allDeleteBtns = document.querySelectorAll(".delete")
    allDeleteBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            // console.log(event.target.dataset.id);

            // const categoryId = event.target.getAttribute("data-id")
            const categoryId = event.target.dataset.id

            // console.log(categoryId);
            // if (window.confirm("are u sure to delete??")) {
            //     deleteCategory(categoryId)
            // }

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                console.log(result);
                if (result.isConfirmed) {
                    deleteCategory(categoryId)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
        })

    })

}




function deleteCategory(id) {
    fetch(`${BASE_URL}/categories/${id}`, {
        method: "DELETE"
    }).then((response) => {
        // console.log(response);
        // if(response.status === 200){
        //     getAllCategories()
        // }
        if (response.ok) {
            getAllCategories()
        }
    }).catch((err) => {
        console.log(err);
    })
}
