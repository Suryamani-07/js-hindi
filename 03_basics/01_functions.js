

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