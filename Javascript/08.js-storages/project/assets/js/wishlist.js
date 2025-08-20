import { calcWishlistCount } from "./utils.js";

const productsContainer = document.querySelector(".products")

const savedWishlist = localStorage.getItem("wishlist")

let wishlist = savedWishlist ? JSON.parse(savedWishlist) : [];

// console.log(wishlist);

function renderCards(arr) {
    productsContainer.innerHTML = ""

    arr.forEach((p) => {
        productsContainer.innerHTML += `
                <div
                    class="relative max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <button
                        data-id="${p.id}"
                        class="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition cursor-pointer wishlist-btn">
                        <i class="fa-solid fa-heart text-red-600"></i>
                    </button>

                    <img class="w-full object-cover"
                        src="${p.thumbnail}"
                        alt="${p.title}"
                        title="${p.title}"
                        />

                    <div class="p-5">
                        <h3 class="text-lg font-semibold text-gray-800">${p.title}</h3>
                        <p class="text-gray-600 text-sm mt-2">
                            ${p.description}
                        </p>

                        <div class="flex items-center justify-between mt-4">
                            <span class="text-xl font-bold text-orange-500">$${p.price}</span>
                            <button
                                class="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-200">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
        `
    })


    const allwishlistBtns = document.querySelectorAll(".wishlist-btn")


    allwishlistBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
         
            const pId = e.currentTarget.getAttribute("data-id")


            const favProductIndex = wishlist.findIndex((q) => q.id == pId)

            wishlist.splice(favProductIndex, 1)

            localStorage.setItem("wishlist", JSON.stringify(wishlist))
            calcWishlistCount()
            e.currentTarget.parentElement.remove()

        })
    })
}


window.addEventListener("DOMContentLoaded", () => {
    renderCards(wishlist)
    calcWishlistCount()
})

