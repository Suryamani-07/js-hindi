
//object litreals

const mySym = Symbol("key1")

const JsUser = {
    name : "Surya",
    age : 20,
    [mySym] : "mykey1",
    location : "Jaipur",
    email : "surya2gmail.com",
    isLoggedIn : false,
    lastLoggedInDays : ["Monday" , "Sunday"] 
}

console.log(JsUser);
console.log(JsUser.email);
console.log(JsUser["email"]);
// console.log(typeof JsUser.mySym); string 
console.log(JsUser[mySym]);

JsUser.email = "surya@chatgpt.com"
console.log(JsUser);

//Object.freeze(JsUser)
JsUser.email = "surya@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User")
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}
console.log(JsUser.greetingTwo());

