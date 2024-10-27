

///============================================== nested object=========================================================================

// const person = {
//     firstName: "Ram",
//     lastName: "Dhimal",
//     Age: 23,
//     isMarried: false,

//     getFullName: function(){
//         return this.firstName + " " + this.lastName;
//     },
// }



// const person2 = {
//     firstName: "Shyam",
//     lastName: "Dhimal",
//     Age: 23,
//     dob:{
//         year:2000,
//         month:1,
//         day:14,
//     },
//     isMarried: false,
//     address: {
//         street: "Church St",
//         city: "Sydney",
//         state: "NSW",
//         postcode: 2150
//     },

//     getCurrentAge: function(){
//        let today = new Date();
//        let currentYear = today.getFullYear() - this.dob.year;
//        return `The current age of ${this.firstName} is ${currentYear}`;
//     },

//     getFullAddress: function(){
//         return `The full address is, ${this.address.street}, ${this.address.city}, ${this.address.state}, ${this.address.postcode}`;
//     },

//     getFullName: function(){
//         return this.firstName + " " + this.lastName;
//     },
// }

// console.log(person.getFullName());
// console.log(person2.getFullName());
// console.log(person.Age);

// console.log(person2.getFullAddress());
// console.log(person2.getCurrentAge());



// ===========================================Destructing the object=============================================


// const car = {
//     name: "ford Mustang",
//     year: 1980,
//     model: "Hedgeback",
// };

// //traditional way 
// // const name = car.name;
// // const model = car.model;
// // const year = car.year;

// //convenient way to assign the value of the properties in new variable
// const {model, name, year} = car;
// console.log(model, name, year);




//===============================================DEFAULT========================================================
// const addSum = (a, b =10, name = " DEFAULT NAME")=>{
//     return (a + b) + name; 
// }
// console.log(addSum(1));


// =======================================REST operator==============================================
// const person = ["ram", " Shyam"];

// const anotherPerson = person;
// person.push("HAri");
// console.log(person);
// console.log(anotherPerson);

// in above shallow copy is being done.
// that means whatever is changed in the first variable is changed in the another one
//shallow copy is to copy the adress of the variable


//now deep copy
// it is done using the REST operator



const car = {
    name: "ford Mustang",
    year: 1980,
    model: "Hedgeback",
};


const car2 = { ...car}; ///using the REST operator
 
car.name = " BMW"; // changing the value of the variable 

console.log(car);

console.log(car2);


