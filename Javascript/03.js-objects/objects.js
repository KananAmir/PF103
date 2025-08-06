// "object litheral"syntaxt

// const person = {}

// "object constructor" syntax
// const animal = new Object()

// console.log(animal);


// key: value



// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age  
// };
// }

// let user = makeUser("John", 30);
// alert(user.name); // John


// let a = {
//     for: "test",
//     function: "hello"
// }


// this keyword
//global object: window
const student = {
    firstName: "Gunel",
    lastName: "Allahverdiyeva",
    age: 28,
    courses: ["Math", "Physics", "Computer Science"],
    grades: [85, 100, 74, 92, 80],
    // getFullname: () => {
    //     return `${this.firstName} ${this.lastName}`
    // }
    // getFullname: function(){
    //    return `${this.firstName} ${this.lastName}`
    // }
    getFullname(){
       return `${this.firstName} ${this.lastName}`
    },
    addCourse(course){
      this.courses.push(course)

      return "Course added successfully!"
    },
    getAverageScore: function(){
       return this.grades.reduce((sum, item) => sum + item , 0) / this.grades.length 
    }
}

student.universityName = "Harvard"
student.age = 18

// console.log(student);
// console.log(student.firstName);
// console.log(student.grades);
// console.log(student["age"]);


console.log(student.getFullname());


console.log(student.courses);
console.log(student.addCourse("Frontend"));
console.log(student.courses);
console.log(student.getAverageScore());


// object methods


console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));


// Object.freeze(student)

// delete student.grades

// student.city = "Baku"
// student.age = 19
// console.log(student);

Object.seal(student)

delete student.grades

student.city = "Baku"
student.age = 19
console.log(student);


const user = Object.assign({
    username: "jhon_doe"
}, {
    email: "jhon@gmail.com"
})

console.log(user);
