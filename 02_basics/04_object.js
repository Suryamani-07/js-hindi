//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Summy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "surya@google.com",
    fullname : {
        userfullname : {
            firstname : "surya",
            lastname : "yadav"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

// const obj3 = Object.assign( {}, obj1  ,  obj2 , obj4);
const obj3 = {...obj1 , ...obj2}
console.log(obj3)

const user = [
    {
        id : 1,
        email : "surya@google.com",
        
    },
    {
        id : 1,
        email : "surya@google.com",

    },
    {
        id : 1,
        email : "surya@google.com",

    }
]

user[1].email
console.log(tinderUser);    
console.log(Object.keys(tinderUser));    
console.log(Object.values(tinderUser));    
console.log(Object.entries(tinderUser));  
console.log(tinderUser.hasOwnProperty('isLoggedIn')); 
console.log(tinderUser.hasOwnProperty('isLogged'));



const course = {
    coursename: "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
} 

const {courseInstructor: instructor} = course

console.log(instructor);

// const navbar = (company) => {

// }

// navbar(company = "hitesh")

//json
// api
// {
//     "name" : "surya",
//     "courcename": "js in hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]
