let score = true  

//const {score} = req.body
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(valueInNumber);

// 1. "33"        => 33             (Pure number string converts easily)
// 2. "33abc"     => NaN            (Contains letters, cannot fully convert)
// 3. "hitesh"    => NaN            (Pure text cannot be converted to number)
// 4. null        => 0              (Null becomes zero)
// 5. undefined   => NaN            (Undefined has no numeric meaning)
// 6. true        => 1              (Boolean true is 1)
// 7. false       => 0              (Boolean false is 0)

/*
* NaN stands for: "Not a Number"
* Type of NaN: typeof NaN is "number" (Common interview trap!)
* Caution: Even if a string converts to NaN, JS will still say its typeof is "number". 
  Always check the actual value, not just the type!
*/


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


//1 => true; 0 => false
//"" => false
//"Surya" => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

/*
33          => "33"
typeof      => "string"
*/