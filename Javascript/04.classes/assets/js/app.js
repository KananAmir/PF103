// OOP - object oriented programming

// object litheral

// const obj = {
//     name: 'John',
// }

// new Object() konstruktoru ilə

const user = new Object();
user.name = "Ali";
user.age = 30;
user.sayHi = function () {
    console.log(`Salam, ${this.name}`);
};

user.sayHi();


//cunstruction function

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function() {
//     console.log(`Salam, mən ${this.name}`);
//   };
// }

// const p1 = new Person("Aysel", 28);
// p1.greet(); // Salam, mən Aysel


// Factory Function (obyekt qaytaran funksiya)


function createUser(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(`Salam, mən ${this.name}`);
        }
    };
}

const user1 = createUser("Leyla", 22);
user1.greet(); // Salam, mən Leyla


// ES6 class ilə


// class Person {
//     //properties
//     //access modifiers: public, private, protected
//     name;
//     age;
//     //constructor function
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }


//     // methods

//     sayHi(){
//         console.log("Hello!");

//     }
// }


//person instance

// const gunay = new Person("Gunay", 25);

// console.log(gunay);



class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    start() {
        console.log(`${this.brand} ${this.model} işə salındı`);
    }
}

const myCar = new Car("BMW", "X5");
myCar.start(); // BMW X5 işə salındı


//inheritance

class Person {
    static id = 0
    constructor(name, age) {
        this.name = name; // property
        this.age = age;
        this.id = Person.id++
    }

    greet() { // method
        console.log(`Salam, mənim adım ${this.name}, yaşım ${this.age}`);
    }

    static info() {
        console.log("Bu mənim info metodum");
    }
}

const person1 = new Person("Kanan", 25);
const person2 = new Person("Zaur", 20);
console.log(person1, person2);

person1.greet(); // Salam, mənim adım Kanan, yaşım 25



class Employee extends Person {

    constructor(name, age, salary, position) {
        super(name, age);
        this.salary = salary
        this.position = position
    }

    work() {
        console.log(`${this.name} ${this.position} kimi işləyir`);
    }
}

const employee1 = new Employee("Gunel", 25, 1000, "Manager");
console.log(employee1);
// Person.info()
employee1.greet()

class Animal {
    constructor(name) {
        this.name = name
        if(this.constructor === Animal){
            throw new Error("Bu Animal classının constructorudur");
        }
    }
    speak() {
        console.log("Heyvan səs çıxarır");
    }
}

const animal = new Animal() // error

// animal.speak()

class Dog extends Animal {
    constructor(name, color) {
        super(name)
        this.color = color
    }
    speak() {
        console.log("İt hürür: Hav-hav!");
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name)
        this.color = color
    }
    speak() {
        console.log("Pişik miyoldayır: Miyau!");
    }
}

const dog = new Dog("Dorry", "Qara");
const cat = new Cat("Tom", "Ağ");

console.log(dog);
console.log(cat);

dog.speak()
cat.speak()


// class BankAccount {

//     #balance = 0; // private property


//     //setter
//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//             console.log(`Balans yeniləndi: ${this.#balance} AZN`);
//         }else{
//             console.log("Məbləğ 0-dan böyük olmalıdır");
//         }
//     }

//     //getter
//     getBalance() {
//         return `${this.#balance} AZN`;
//     }
// }

// const account = new BankAccount();
// account.deposit(100);
// account.deposit(30);
// console.log(account.getBalance());
// // console.log(account.#balance); ❌ Xəta — private property-ə çata bilmərik




class BankAccount {
  #balance = 0; // private property

  // Getter (balansı oxumaq üçün)
  get balance() {
    return `${this.#balance} AZN`;
  }

  // Setter (balansı artırmaq üçün)
  set balance(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Balans yeniləndi: ${this.#balance} AZN`);
    } else {
      console.log("Məbləğ müsbət olmalıdır!");
    }
  }
}

const account = new BankAccount();

// Setter istifadə (deposit kimi işləyir)
account.balance = 100; // Balans yeniləndi: 100 AZN
account.balance = 50;  // Balans yeniləndi: 150 AZN

// Getter istifadə
console.log(account.balance); // 150 AZN

// console.log(account.#balance); ❌ Xəta — private property



