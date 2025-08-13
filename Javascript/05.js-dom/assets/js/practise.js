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

decrementBtn.addEventListener("click", ()=>{
    countValue--
    count.textContent = countValue
    
    if(countValue === 0){
        decrementBtn.setAttribute("disabled", "true")
        return
    }
    
})


incByValueBtn.addEventListener("click", ()=>{
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


addBtn.addEventListener("click", ()=>{
    // const firstValue = Number(firstNumber.value);
    // const secondValue = Number(secondNumber.value);
    // const resultValue = firstValue + secondValue;

    // result.textContent = resultValue;


    result.textContent = Number(firstNumber.value) + Number(secondNumber.value);
})

substructBtn.addEventListener("click", ()=>{
    result.textContent = Number(firstNumber.value) - Number(secondNumber.value);
})
multiplyBtn.addEventListener("click", ()=>{
    result.textContent = Number(firstNumber.value) * Number(secondNumber.value);
})
divideBtn.addEventListener("click", ()=>{
    result.textContent = Number(firstNumber.value) / Number(secondNumber.value);
})