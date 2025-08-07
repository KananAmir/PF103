const student = {
    id: 101,
    fullName: "Azif Vahidov",
    age: 21,
    isGraduated: false,
    scores: {
        math: 85,
        english: 78,
        programming: 92,
    },
    contact: {
        email: "ali.mammadov@example.com",
        phone: "+994501234567",
    },
    getInfo: function () {
        return `Mənim adım ${this.fullName}. Mənim ${this.age} yaşım var.`
    }
};


// #Studentin email ünvanını konsola çıxart
// #Yeni property əlavə et (gender)
// #Math balını dəyişərək 94 et
// #isGraduated dəyərini true et
// #Obyektin bütün key'lərini array şəklində göstər
// #getInfo adinda methodu olsun, və metod geriyə ətraflı məlumat qaytarsın
// Məsələn: Adım Ali Mammadov, 21 yaşım var. 
console.log(student.getInfo());

// #scores obyektinin toplam bal ortalamsınız tapın

// console.log(Object.values(student.scores));

// student.calcAverageScore = function () {
//     const scores = Object.values(student.scores) // [85, 78, 92]
//     let sum = 0;

//     for (let i = 0; i < scores.length; i++) {
//         sum+=scores[i]        
//     }

//     return `Average score is ${sum / scores.length}`

// }

student.scores.history = 66

student.calcAverageScore = function () {
    const scores = Object.values(this.scores) // [85, 78, 92 , 66]
    let sum = 0;
    scores.forEach((score) => {
        sum += score;
    })
    return `Average score is ${sum / scores.length}`

    //    let average =  scores.reduce((sum, item) => sum + item, 0) / scores.length
    //    return `Average score is ${average}`
}

// #Yeni method əlavə et — getContactInfo, email və telefon birləşmiş şəkildə qaytarsın
// Nəticə: Email: ali.mammadov@example.com, Telefon: +994501234567




console.log(student.calcAverageScore());

console.log({});
