// we basically declare a math like ---
const score = 500
console.log(score) //output --500;


const balence = new Number (100)
console.log(balence) //output --100;

console.log(balence.toString().length) //output --3;
console.log(balence.toFixed(2)) //output --100.00;

const otherBalence = 123.8765
console.log(otherBalence.toPrecision(3)) //output --124; 
// but if we put 4 in the toPrecision then it will show 123.9 samely ---

const otherBalence1 = 23.8765
console.log(otherBalence1.toPrecision(4)) //output --23.88;

// .toPrecision() method is used to format a number to a specified length
// it is very interesting topic bar bar dekha important

const hundred = 100000;
console.log(hundred.toLocaleString()) //output --100,000; //US English

console.log(hundred.toLocaleString('en-IN')) //output --1,00,000; //Indian English


// ++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math) //output --[object Math]

console.log(Math.abs(-100)) //output 100; //absolute value

console.log(Math.round(5.6)) //output  6; //round off

// now if we say that na amar to 5.6 a 6 lagbe ba 5 er boro holei seta 6 hobe tahole we use -- 
console.log(Math.ceil(5.6)) //output 6; //round up

// but if we say that na amar to 5.6 a 5 lagbe ba 5 er choto holei seta 5 hobe tahole we use --
console.log(Math.floor(5.6)) //output 5; //round down

// to check the power of a number ---
console.log(Math.pow(2, 3)) //output 8; //2 to the power of 3

// to check the square root of a number ---
console.log(Math.sqrt(42)) //output 6.48074069840786; //square root of 42

// to check the cube root of a number ---
console.log(Math.cbrt(27)) //output 3; //cube root of 27


console.log(Math.trunc(5.6)) //output 5; //remove the decimal part

// for random numbers wwe use random method (it's range always be 0 & 1);
console.log(Math.random()) //output 0.123456789101112; //random number


// now arekta example ---

const min = 15
const max = 30

// now we print it & see --
console.log(Math.floor(Math.random() * (max - min + 1) + min)) 
//output 16; //random number between 15 & 30 
//here we use the floor method to round down the number