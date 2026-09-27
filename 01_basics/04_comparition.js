// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);


console.log(undefined == 0); //Avoid


console.log(null > 0);  //Avoid this type of convertion ,to not confused
console.log(null == 0); // null --> NaN 
console.log(null >= 0); // null --> 0


// ===  this check striktly not change the datatype 
console.log("2" === 2); // striktly No