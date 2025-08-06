// MATH

// console.log(Math.max(1,2,3)); // 3
// console.log(Math.min(1,2,3)); // 1

// console.log(Math.floor(3.37)); // 3
// console.log(Math.floor(3.97)); // 3

// console.log(Math.ceil(3.37)); //  4
// console.log(Math.ceil(3.97)); //  4


// console.log(Math.round(3.37)); // 3
// console.log(Math.round(3.97)); // 4


// console.log(Math.trunc(3.97)); // 3
// console.log(Math.abs(-3)); // 3

// console.log(Math.sqrt(49)); // 7


// console.log(Math.fround(3.56)); 



// console.log(Math.random());
// console.log(Math.round(Math.random() * 10));
// console.log(Math.floor(Math.random() * 10));

// 10 - 40

// Math.random() * (MAX - MIN) + MIN

// console.log(Math.floor(Math.random() * 30 +  10));
// console.log(Math.round(Math.random() * 5 +  5));


const changeColorBtn = document.querySelector("#changeColorBtn")

changeColorBtn.addEventListener("click", ()=>{
    // console.log(alert("u clicked me!"));
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    
})


// setInterval(()=>{
//     const red = Math.floor(Math.random() * 256)
//     const green = Math.floor(Math.random() * 256)
//     const blue = Math.floor(Math.random() * 256)

//     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    
// }, 1000)