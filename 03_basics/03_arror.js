const user = {
    username : "Surya",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website `);
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);



// function chai(){
//     let username ="Surya"
//     console.log(this.username);//undifined
// }

// chai()


// const chai = function(){
//     let username = "Surya"
//     console.log(this.username)
// }  undifined

// chai()


// const chai = () => {
//     let username = "Surya"
//     console.log(this.username);
// }  

// chai()


// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));
// curly breces meand you have to write return keyword 

// const addTwo = (num1 , num2) =>   num1 + num2
// const addTwo = (num1 , num2) =>   (num1 + num2)

const addTwo = (num1 , num2) =>   ({username : "Surya"})  // ( ) this is nessesary for object 
console.log(addTwo(3,4));