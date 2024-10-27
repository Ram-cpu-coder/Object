

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
