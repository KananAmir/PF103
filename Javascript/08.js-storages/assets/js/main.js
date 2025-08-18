// localStorage, sessionStorage, cookies

// setItem(key, value) – store key/value pair.
// getItem(key) – get the value by key.
// removeItem(key) – remove the key with its value.
// clear() – delete everything.
// key(index) – get the key on a given position.
// length – the number of stored items.

// localStorage.setItem("class", "pf103")
// localStorage.setItem("user", "azif")

// console.log(localStorage.getItem("class"));
// console.log(localStorage.getItem("user"));
// console.log(localStorage.getItem("theme"));

// localStorage.removeItem("class")


const addBtn = document.querySelector(".add")
const removeBtn = document.querySelector(".remove")
const clearBtn = document.querySelector(".clear")

addBtn.addEventListener("click", ()=>{
 localStorage.setItem("user", "daniz")
})
removeBtn.addEventListener("click", ()=>{
 localStorage.removeItem("test")
})
clearBtn.addEventListener("click", ()=>{
 localStorage.clear()
})


// localStorage.setItem("darkMode", true)

// sessionStorage.setItem("userId", 123)

// console.log(typeof sessionStorage.getItem("userId"));


const students = ["gunay", "gunel", "azif", "zuar", "daniz", "alizamin"]

localStorage.setItem("students", JSON.stringify(students))

console.log(JSON.parse(localStorage.getItem("students")));


const employees = [
  {
    id: 1,
    name: "Aydin Mammadov",
    age: 32,
    position: "Frontend Developer",
    salary: 1800,
    contact: {
      email: "aydin.mammadov@example.com",
      phone: "+994501112233",
    },
    address: {
      city: "Baku",
      street: "Nizami Street 45",
    },
  },
  {
    id: 2,
    name: "Leyla Aliyeva",
    age: 28,
    position: "Backend Developer",
    salary: 2000,
    contact: {
      email: "leyla.aliyeva@example.com",
      phone: "+994502223344",
    },
    address: {
      city: "Ganja",
      street: "Heydar Aliyev Avenue 12",
    },
  },
  {
    id: 3,
    name: "Rauf Hasanov",
    age: 40,
    position: "Project Manager",
    salary: 3000,
    contact: {
      email: "rauf.hasanov@example.com",
      phone: "+994503334455",
    },
    address: {
      city: "Sumqayit",
      street: "28 May Street 6",
    },
  },
  {
    id: 4,
    name: "Sevda Mehdiyeva",
    age: 25,
    position: "UI/UX Designer",
    salary: 1700,
    contact: {
      email: "sevda.mehdiyeva@example.com",
      phone: "+994504445566",
    },
    address: {
      city: "Shaki",
      street: "Mirza Fatali Akhundov Street 19",
    },
  },
  {
    id: 5,
    name: "Elvin Ismayilov",
    age: 30,
    position: "QA Engineer",
    salary: 1600,
    contact: {
      email: "elvin.ismayilov@example.com",
      phone: "+994505556677",
    },
    address: {
      city: "Lankaran",
      street: "Seaside Road 7",
    },
  },
  {
    id: 6,
    name: "Narmin Karimova",
    age: 26,
    position: "Marketing Specialist",
    salary: 1500,
    contact: {
      email: "narmin.karimova@example.com",
      phone: "+994506667788",
    },
    address: {
      city: "Baku",
      street: "Badamdar Highway 10",
    },
  },
  {
    id: 7,
    name: "Kamran Suleymanov",
    age: 35,
    position: "DevOps Engineer",
    salary: 2700,
    contact: {
      email: "kamran.suleymanov@example.com",
      phone: "+994507778899",
    },
    address: {
      city: "Mingachevir",
      street: "Neftchilar Street 9",
    },
  },
  {
    id: 8,
    name: "Aygun Abbasova",
    age: 29,
    position: "Data Analyst",
    salary: 1900,
    contact: {
      email: "aygun.abbasova@example.com",
      phone: "+994508889900",
    },
    address: {
      city: "Guba",
      street: "Central Park Street 2",
    },
  },
  {
    id: 9,
    name: "Farid Guliyev",
    age: 31,
    position: "System Administrator",
    salary: 2200,
    contact: {
      email: "farid.guliyev@example.com",
      phone: "+994509990011",
    },
    address: {
      city: "Baku",
      street: "Khatai Avenue 55",
    },
  },
  {
    id: 10,
    name: "Zarina Huseynova",
    age: 27,
    position: "Business Analyst",
    salary: 2100,
    contact: {
      email: "zarina.huseynova@example.com",
      phone: "+994501010101",
    },
    address: {
      city: "Nakhchivan",
      street: "Babek Avenue 3",
    },
  },
];


localStorage.setItem("employees", JSON.stringify(employees))

console.log(JSON.parse(localStorage.getItem("employees")));



window.addEventListener("load", ()=>{
    const mode = localStorage.getItem("mode")
    if(mode === "dark"){
        document.body.classList.add("dark")
        modeBtn.textContent = "Light Mode"
    }
})

const modeBtn = document.querySelector("#mode")

modeBtn.addEventListener("click", (e)=>{
    // console.log(e.target.textContent);

    if(e.target.textContent === "Dark Mode"){
        e.target.textContent = "Light Mode"
        localStorage.setItem("mode", "dark")
        document.body.classList.add("dark")

    }else{
        e.target.textContent = "Dark Mode"
        localStorage.setItem("mode", "light")
        document.body.classList.remove("dark")
    }
    
})