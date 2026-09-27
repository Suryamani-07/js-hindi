const name = "Surya"
const repoCount = 50

console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Sur-ya-hc')

// console.log(gameName[0])
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperrCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0 ,4)
console.log(newString);

const anotherString = gameName.slice(-8,4) // you can give here negetibve value also 
console.log(anotherString);

const newStringOne = "    Surya    "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove the staring and ending spaces 

const url = "https://surya.com/sumit%20y"

console.log(url.replace('%20' , '-'))

url.includes('surya')

console.log(url.includes('surya')) //surya hai ya nhi url me 

console.log(gameName.split('-'));