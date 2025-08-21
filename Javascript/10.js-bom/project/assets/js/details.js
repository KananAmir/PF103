import products from "./data.js";

const container = document.querySelector(".container")
// const hash = window.location.hash
// const id = hash.slice(1)

// console.log(id);


const url = new URLSearchParams(window.location.search)
// console.log(url.get("title"));

const id = url.get("id")

const product = products.find((q)=>q.id == id)


if(product){
    container.innerHTML =   `
    <div class="grid lg:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-8">
      <div>
        <img id="mainImage"
          src="${product.thumbnail}"
          alt="product" class="w-full rounded-xl shadow-md mb-4" />

        <div id="gallery" class="flex gap-3 overflow-x-auto">
        </div>
      </div>

      <div class="flex flex-col justify-between">
        <div>
          <h2 class="title text-3xl font-bold text-gray-800 mb-2">${product.title}</h2>
          <p class="text-gray-500 mb-4">Brand: <span id="brand" class="font-semibold">Apple</span></p>

          <div id="rating" class="flex items-center gap-1 mb-4">
          </div>

          <p id="description" class="text-gray-600 mb-6 leading-relaxed">
           ${product.description}
          </p>

          <p class="text-3xl font-bold text-orange-500 mb-4">$${product.price}</p>

          <p id="stockInfo" class="mb-6 text-sm text-gray-700 bg-gray-100 px-3 py-1 inline-block rounded">
            In Stock: ${product.stock} pcs
          </p>

          <div id="tags" class="flex flex-wrap gap-2 mb-6">
            <span
              class="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">smartphone</span>
          </div>

          <div class="flex flex-wrap gap-4">
            <button
              class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition">
              Add to Cart
            </button>
            <button id="wishlistBtn"
              class="bg-white border px-6 py-3 rounded-lg font-semibold shadow-md transition hover:bg-gray-100 flex items-center gap-2">
              <i class="fa-regular fa-heart text-red-600"></i> Wishlist
            </button>
            <div>
                <button class="back mt-10 text-blue-600 font-medium hover:underline">
                ← Go Back
                </button>
            </div>
          </div>
        </div>

       
      </div>
    </div>
    
    `
}



document.querySelector(".back").addEventListener("click", ()=>{
    window.history.back()
})
 