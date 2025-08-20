const startBtn = document.querySelector(".start")
const stopBtn = document.querySelector(".stop")
const resetBtn = document.querySelector(".reset")
const counter = document.querySelector(".counter")


startBtn.addEventListener("click", start)
stopBtn.addEventListener("click", stop)
resetBtn.addEventListener("click", reset)

let interval;
let count = 0

stopBtn.disabled = true

function start(e){
    // clearInterval(interval)
    stopBtn.disabled = false
    e.target.disabled = true

    interval = setInterval(()=>{
        count++
        counter.textContent = count
    }, 1000)
}

function stop(e){
    clearInterval(interval)
    e.target.disabled = true
    startBtn.disabled = false
}

function reset(){
    clearInterval(interval)
    count = 0
    counter.textContent = count
    startBtn.disabled = false
    stopBtn.disabled = true

}


// let seconds = parseInt(prompt("Neçə saniyəlik geri sayım olsun?"), 10);

// const timer = setInterval(() => {
//   console.log(seconds);
//   seconds--;

//   if (seconds < 0) {
//     clearInterval(timer);
//     console.log("Time’s up!");
//   }
// }, 1000);