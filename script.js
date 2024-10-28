

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



// const car = {
//     name: "ford Mustang",
//     year: 1980,
//     model: "Hedgeback",
// };


// const car2 = { ...car}; ///using the REST operator
 
// car.name = " BMW"; // changing the value of the variable 

// console.log(car);

// console.log(car2);



// ===============================challenge===============
// Get Sum of Array Elements
// Example input : [1, 2, 3, 4, 5]
// output : 15

// const input = [1, 2, 3, 4, 5];
// const sum = input.reduce((acc, item) =>{
//     return acc + item;
// },0)

// console.log(sum);


// Get multiplication of Array Elements
// Example input : [1, 2, 3, 4, 5]
// output : 120


// const input = [1, 2, 3, 4, 5];
// const result = input.reduce((acc, item) => {
//     return acc * item;
// },1);
// console.log(result);


// =========================isPalindrome==============

// Palindrome Checker
// check if a given string is a palindrome
// input : racecar
// output : true

// const input = "racecar";
// function isPalindrome(input){

//     let reversedInput = "";
//     for( let i = input.length-1; i >= 0; i-- ){
    
//      reversedInput += input[i];
//      console.log(reversedInput);
     
// }
// return input === reversedInput
// }

// console.log(isPalindrome(input));



// // ==================================Print all factors========
// const input = 10;
// function factor(input){
//     for(let i = 1; i <= input; i++){
        
//         if(input % i === 0){
//             console.log(i);
            
//         }
    
//     }

// }

// console.log(factor(input));


// ==============================



// let inputString = "Hello World";
// let vowelArray = "aeiou";

// let counter = 0;

// for(let i = 0; i< inputString.length; i++){

//     if(vowelArray.split("").includes(inputString[i].toLowerCase()))
//         {
//             counter += 1;
//         }
     
    
// }

// console.log(counter);
