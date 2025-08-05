// Strings - primitive data type
// strings are immutable

let username = "gunay"

// username[0] = "s"

// let newUsername = "s" + username.slice(1)
// console.log(newUsername);




let str = "frontend"

console.log(str[0]);
console.log(str[str.length - 1]);
console.log(str.charAt(2));

console.log(str.includes("n")); //true
console.log(str.includes("a")); //false
console.log(str.includes("end")); //true

console.log(str.split(""));
console.log("1,2,3,4,5".split(","));
console.log("1-2-3-4-5".split("-"));

console.log(str.substring(2, 4));
console.log(str.slice(-3));

let sentence = "JavaScript provides a rich set of methods for working with strings"

console.log(sentence.split(" "));

console.log("Azif".toUpperCase());
console.log("Azif".toLocaleUpperCase("az"));



 let sampleNews = `As software developers, the natural tendency is to start developing applications based on your ownhands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
and new features happen.`;


// task: sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.

let count = 0;
for (let i = 0; i < sampleNews.length; i++) {
    // sampleNews[i] === " " && count++;
    if(sampleNews[i] === " "){
        count = count + 1
    }
}

console.log(count);

// let city = "baku"
// for (let i = 0; i < city.length; i++) {
//    console.log(city[i]);   
// }

// for(start, condition, step) {

// }



