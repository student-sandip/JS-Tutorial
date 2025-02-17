// primitive (Call By Vlaue);

// 7 types: Number, String, Boolean, Undefined, Null, Symbol,(BigInt);



const num = 90;   //number
const score = 100; //number
const name = "sandip";

const isLggedIn = true; //boolean
const temperature =  null //null

let userEmail; //undefined

// Symbolssssssssssss

const sym1 = Symbol("sandip");  //unique value
const sym2 = Symbol("sandip");  //unique value
console.log(sym1 === sym2); //output --false


// BigInt
const bigInt = 1234567890123452345678901234567890n; //n is used to define BigInt


// Non-Primitive(Call By Reference);

// Array, Objects, Functions;


const subjects = ["Math", "Science", "English"];

let student = {
    name: "sandip",
    age: 21
}

const Myfunction = function add(){
    console.log("Hii.!");
}

console.log(typeof Myfunction); //it retuurns function
// but
console.log(typeof student); //it returns object
    