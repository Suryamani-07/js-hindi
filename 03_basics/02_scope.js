// let a = 10;
// const b = 20;
// var c = 30;


var c = 300;
let a = 300;

// scope
if(true){
    let a = 10;
    const b = 20;
    var c = 30; // c = 30 .. same problem 
    console.log("Inner : -" , a);
}

// console.log(a)
// console.log(b)
console.log(c);
console.log(a);


function one(){

    const username = "surya"

    function two(){

        const website = "youtube"
        console.log(username);

    }
    // console.log(website);

     two()
}

one()
// two()



if(true){
    const username = "Surya"
    if(username === "Surya"){
        const website = " Youtube"
        console.log(username + website);
    }
    // console.log(website);  Error 1
}
// console.log(username); Error 2





// +++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5))

function addone(num){
    return num + 1
}


// addTwo(5) error

const addTwo = function(num){
    return num + 2
}

addTwo(5) 
