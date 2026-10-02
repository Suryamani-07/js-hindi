let myDate = new Date();
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

// let myCreatedDate = new Date(2026 , 0 , 25)
// console.log(myCreatedDate.toString()); 
let myCreatedDate = new Date("01-25-2026")
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());