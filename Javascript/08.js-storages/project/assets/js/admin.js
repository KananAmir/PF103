import products from "./data.js";

const tableBody = document.querySelector("tbody");

// products.forEach((product) => {
//     const row = document.createElement("tr");
//     const tdTitle = document.createElement("td");
//     const tdImage = document.createElement("td");
//     const tdPrice = document.createElement("td");
//     const tdCategory = document.createElement("td");
//     const tdStock = document.createElement("td");
//     const tdActions = document.createElement("td");

//     const imgElem = document.createElement("img");
//     // imgElem.setAttribute("src", product.thumbnail)
//     imgElem.src = product.thumbnail;
//     imgElem.width = "100";

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.classList.add("btn", "btn-danger")


//     deleteBtn.addEventListener("click", (event) => {
//         // console.log(event.target.parentElement.parentElement);
//         // console.log(event.target.closest("tr"));

//         // console.log(product.id);

//         const idx = products.findIndex((q)=>q.id === product.id);

//         if(idx !== -1){
//             products.splice(idx, 1);
//             event.target.closest("tr").remove();
//         }

//         console.log(products);



//     })

//     tdActions.appendChild(deleteBtn);

//     tdTitle.textContent = product.title;
//     tdPrice.textContent = `$ ${product.price}`;
//     tdCategory.textContent = product.category;
//     tdStock.textContent = product.stock;

//     tdImage.appendChild(imgElem);
//     row.append(tdImage, tdTitle, tdPrice, tdCategory, tdStock, tdActions);

//     tableBody.append(row)

// })



function renderProducts(productsArray) {
    tableBody.innerHTML = ""; // Clear the table body before rendering

    productsArray.forEach((product) => {
        const row = document.createElement("tr");
        const tdTitle = document.createElement("td");
        const tdImage = document.createElement("td");
        const tdPrice = document.createElement("td");
        const tdCategory = document.createElement("td");
        const tdStock = document.createElement("td");
        const tdActions = document.createElement("td");

        const imgElem = document.createElement("img");
        // imgElem.setAttribute("src", product.thumbnail)
        imgElem.src = product.thumbnail;
        imgElem.width = "100";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("btn", "btn-danger")


        deleteBtn.addEventListener("click", (event) => {

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {


                    const idx = products.findIndex((q) => q.id === product.id);

                    if (idx !== -1) {
                        products.splice(idx, 1);
                    }

                    renderProducts(products);



                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });





        })

        tdActions.appendChild(deleteBtn);

        tdTitle.textContent = product.title;
        tdPrice.textContent = `$ ${product.price}`;
        tdCategory.textContent = product.category;
        tdStock.textContent = product.stock;

        tdImage.appendChild(imgElem);
        row.append(tdImage, tdTitle, tdPrice, tdCategory, tdStock, tdActions);

        tableBody.append(row)

    })

}

renderProducts(products);



const searchInput = document.querySelector("#search")
const sortSelect = document.querySelector("#sort")

searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase().trim()
    // const filteredProducts = products.filter((product) => product.title.toLowerCase().trim().startsWith(value))
    const filteredProducts = products.filter((product) => product.title.toLowerCase().trim().includes(value))

    renderProducts(filteredProducts)
})


sortSelect.addEventListener("change", (e) => {
    const sortValue = e.target.value
    let sortedProducts = null;

    switch (sortValue) {
        case "ascByPrice":
            sortedProducts = products.toSorted((a, b) => a.price - b.price)
            break;

        case "descByPrice":
            sortedProducts = products.toSorted((a, b) => b.price - a.price)
            break;

        case "ascByTitle":
            sortedProducts = products.toSorted((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
            break;
        case "descByTitle":
            sortedProducts = products.toSorted((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()))
            break;

        default:
            sortedProducts = structuredClone(products)
            break;
    }


    renderProducts(sortedProducts)


})