

function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("R");
    console.log("Y");
    console.log("A");
}

// sayMyName();

function addTwoNumbers(number1 , number2){
    console.log(number1 + number2)
}

function addTwoNumbers(number1 , number2){
    let result = number1 + number2
    return result
}

addTwoNumbers(3 , 4);
// addTwoNumbers(3 , "4");
const result = addTwoNumbers(3 , 4);
console.log("Result: ",result)


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter username")
        return
    }
    return `${username}  just logged in `
}

console.log(loginUserMessage("Surya"))
console.log(loginUserMessage())



function calculateCartPrice(num1){
    return num1;
}

console.log(calculateCartPrice(200,300,400))

//rest oprator
function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200,300,400))


function calculateCartPrice(val1 , val2 ,...num1){
    return num1;
}

console.log(calculateCartPrice(200,300,400,500,1000))


const user = {
    username : "surya",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and  price is ${anyobject.price}`);
}

handleObject(user);

const myNewArray = [200 , 400 , 100 , 600]

function returnSecondValue(getArray){
        return getArray[1]
}

console.log(returnSecondValue(myNewArray));