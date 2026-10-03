// IMEDIATE INVOKE FUNCTION EXPRESION 

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
}) (); // for end this ;


(function aurcode(){
    console.log(`DB CONNECTED TWO`);
}) ();


( () => {
    console.log(`DB CONNECTED TWO`);
}) ();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('Surya')

// chai()