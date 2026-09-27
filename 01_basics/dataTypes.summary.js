// Primitive

// 7 types : String, Number , Boolean , null, undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined if print 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); //  false retrun value is not same

const bigNumber = 34567243236652363n


//Referance (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "dogo"]; // array

{// curly breses inside is object 
    name : "Surya";  
    age : 20;
}

let myObj = {// curly breses inside is object 
    name : "Surya",  
    age : 20,
}

const muFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);


/*
======================================================
  KEY TAKEAWAYS: JAVASCRIPT DATA TYPES
======================================================

Data types in JavaScript are divided into two categories:

1. PRIMITIVE DATA TYPES (Stored by Value / Copy):
   - Number: Both integers and decimals (e.g., 100, 100.3).
   - String: Text data.
   - Boolean: true or false.
   - null: Represents an intentional empty or blank value.
   - undefined: A variable is declared, but no value is assigned yet.
   - Symbol: Used to create guaranteed unique values (even with identical descriptions).
   - BigInt: Used for numbers larger than standard Number limits (ends with 'n').

2. NON-PRIMITIVE DATA TYPES (Stored by Reference):
   - Array: An ordered list of elements inside square brackets [].
   - Object: Key-value pairs inside curly braces {}.
   - Function: Reusable code block stored inside a variable.

3. QUICK REVISION FACTS:
   - JavaScript is dynamically typed (no need to specify data types explicitly).
   - Symbol('123') == Symbol('123') returns false because every Symbol is unique.
   - typeof null returns "object" (an old JavaScript quirk).
   - typeof of any function returns "function" (object function).
======================================================
*/





//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Memory 
// stack(Primitive) memory [copy create ] , Heap (Non-Primitive) [referenace ]

let myYoutubename = "Surya" // it save in stack memroy because it is premitive type

let anothername = myYoutubename
anothername = "chaiaurcode" // copy is created of this 

console.log(myYoutubename);
console.log(anothername);


// heap memory 
let userOne = {
    email: "surya@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "bijoy@oogle.com"

 console.log(userOne.email)
 console.log(userTwo.email)

