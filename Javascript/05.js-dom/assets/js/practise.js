const incrementBtn = document.querySelector(".increment-btn");
const decrementBtn = document.querySelector(".decrement-btn");
const count = document.querySelector("#count");
const inputNumber = document.querySelector("#inputNumber");
const incByValueBtn = document.querySelector("#incByValue");

decrementBtn.setAttribute("disabled", "true");

let countValue = 0;

incrementBtn.addEventListener("click", () => {
    countValue++
    count.textContent = countValue
    if (countValue > 0) {
        decrementBtn.removeAttribute("disabled")
    }
})

// decrementBtn.addEventListener("click", ()=>{
//     if(countValue > 0) {
//         countValue--
//     }
//     count.textContent = countValue
// })

decrementBtn.addEventListener("click", () => {
    countValue--
    count.textContent = countValue

    if (countValue === 0) {
        decrementBtn.setAttribute("disabled", "true")
        return
    }

})


incByValueBtn.addEventListener("click", () => {
    const incrementValue = Number(inputNumber.value);
    // console.log(typeof incrementValue);
    countValue += incrementValue;

    count.textContent = countValue;
})



const addBtn = document.querySelector(".add");
const substructBtn = document.querySelector(".substruct");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const result = document.querySelector("#result");
const firstNumber = document.querySelector("#firstNumber");
const secondNumber = document.querySelector("#secondNumber");


addBtn.addEventListener("click", () => {
    // const firstValue = Number(firstNumber.value);
    // const secondValue = Number(secondNumber.value);
    // const resultValue = firstValue + secondValue;

    // result.textContent = resultValue;


    result.textContent = Number(firstNumber.value) + Number(secondNumber.value);
})

substructBtn.addEventListener("click", () => {
    result.textContent = Number(firstNumber.value) - Number(secondNumber.value);
})
multiplyBtn.addEventListener("click", () => {
    result.textContent = Number(firstNumber.value) * Number(secondNumber.value);
})
divideBtn.addEventListener("click", () => {
    result.textContent = Number(firstNumber.value) / Number(secondNumber.value);
})


const students = [
    {
        id: 1,
        fullName: "Ali Mammadov",
        isGraduated: false,
        contact: { email: "ali.mammadov@example.com", phone: "+994501234567" }
    },
    {
        id: 2,
        fullName: "Leyla Huseynova",
        isGraduated: true,
        contact: { email: "leyla.huseynova@example.com", phone: "+994505678901" }
    },
    {
        id: 3,
        fullName: "Rauf Abbasov",
        isGraduated: false,
        contact: { email: "rauf.abbasov@example.com", phone: "+994507891234" }
    },
];


const studentForm = document.querySelector("#studentForm");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const isGraduated = document.querySelector("#isGraduated");
const tBody = document.querySelector("tbody");



studentForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const newStudent = {
        id: Date.now(),
        fullName: fullName.value.trim(),
        isGraduated: isGraduated.checked,
        contact: {
            email: email.value.trim(),
            phone: phone.value.trim()
        }
    }

    students.push(newStudent)

    renderStudents(students)
    // console.log(students);

})



function renderStudents(array) {
    tBody.innerHTML = ""; // Clear existing rows
    array.forEach((student) => {
        const row = document.createElement("tr");
        const tdId = document.createElement("td");
        const tdFullName = document.createElement("td");
        const tdIsGraduated = document.createElement("td");
        const tdEmail = document.createElement("td");
        const tdPhone = document.createElement("td");
        const tdDelete = document.createElement("td");

        
        tdId.textContent = student.id;
        tdFullName.textContent = student.fullName;
        tdIsGraduated.textContent =  student.isGraduated ? "Yes" : "No"
        tdEmail.textContent = student.contact.email;
        tdPhone.textContent = student.contact.phone;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete");

        deleteBtn.addEventListener("click", (e)=>{
            // console.log(e.target.parentElement.parentElement);
            e.target.parentElement.parentElement.remove()
        })

    
        tdDelete.appendChild(deleteBtn);
        row.append(tdId, tdFullName, tdEmail, tdPhone, tdIsGraduated, tdDelete);
        tBody.append(row)
        console.log(row);
    })
}


renderStudents(students);