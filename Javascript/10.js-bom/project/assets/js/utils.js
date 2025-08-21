export const calcWishlistCount = ()=>{
    const savedWishlist = localStorage.getItem("wishlist");
    const wishlist = savedWishlist ? JSON.parse(localStorage.getItem("wishlist")) : []
    const favCount = document.querySelector("#favCount")
    favCount.textContent = wishlist.length
}