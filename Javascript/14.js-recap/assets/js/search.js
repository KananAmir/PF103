import { BASE_URL } from "./constants.js";
const cardsWrapper = document.querySelector(".cards-wrapper")
const search = document.querySelector("#search")

let eventsData = null

const getAllEvents = async () => {
    try {
        const response = await axios(`${BASE_URL}/events`)
        const events = response.data
        eventsData = events
        renderCards(events)

    } catch (error) {
        console.log(error.message);
    }
}


getAllEvents()


function renderCards(eventsArray) {
    cardsWrapper.innerHTML = ""

    eventsArray.forEach((event) => {

        cardsWrapper.innerHTML += `
          <div class="w-[280px] bg-white dark:bg-[#0A2025] rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
  <div class="w-full h-[200px] overflow-hidden rounded-lg">
    <img src="${event.posterURL}" 
         alt="${event.name}" 
         class="w-full h-full object-cover object-center" />
  </div>
  <div class="mt-4 flex flex-col flex-1">
    <h3 class="text-[#0A2025] dark:text-white text-lg font-bold">${event.name}</h3>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">${event.description}</p>
    <button class="mt-auto text-green-600 font-semibold hover:underline">
      Shop
    </button>
  </div>
</div>

        `
    })
}


// search.addEventListener("keyup", (e)=>{
//     const searchValue = e.target.value.trim().toLowerCase()
//     console.log(eventsData);

//     const filteredEvents = eventsData.filter((q)=>q.name.toLowerCase().includes(searchValue))

//     console.log(filteredEvents);
//     renderCards(filteredEvents)
// })

let timeout = null

search.addEventListener("keyup", (e) => {
    clearTimeout(timeout)
    const searchValue = e.target.value.trim().toLowerCase()

    try {
        timeout = setTimeout(async() => {
            const resp = await axios(`${BASE_URL}/events?name_like=${searchValue}`)
            console.log(resp);
            renderCards(resp.data)
        }, 500)

    } catch (error) {

    }

})