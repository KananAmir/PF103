

const promise = new Promise((resolve, reject) => {
    let age = 26
    if (age >= 18) {
        resolve("success")
    } else {
        reject("failed")
    }
})


// console.log(promise);


// promise states: pending, fulfilled, rejected


//blocks: then, catch, finally

// promise.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("finally");
// })



// const myPromise = new Promise((res, rej) => {
//     const students = ["gunay", "zaur", "alizamin"]

//     students.length = 0

//     if (students.length > 0) {
//         res(students)
//     } else {
//         rej("no student yet!")
//     }
// })


// myPromise.then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// })


const myPromise = new Promise((res, rej) => {
    const students = ["gunay", "zaur", "alizamin"]

    if (students.length > 0) {
        res(students)
    } else {
        rej("no student yet!")
    }
})


myPromise.
    then((result) => {
        result.push("gunel")
        return result
    }).then((students) => {
        // console.log(students);
        students.shift()
        return students
    }).then((students) => {
        console.log(students);
    }).catch((err) => {
        console.log(err);
    })

    console.log(1);

    setTimeout(()=>{
        console.log(2);
    }, 0)

    new Promise((res, rej)=>{
        res(3)
    }).then((data)=>{
        console.log(data);
        
    })
    
    console.log(4);
    