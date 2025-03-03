
const mySym = Symbol('mySymm');

const obj = {
    name : 'sandip',
    age :21,
    isMarried : false,
    email: 'sandip1@gmail.com',
    // address : {
    //     city : 'Kolkata',
    //     state : 'WB'
    // }

    lastLoggedIn : ["sunday", "monday", "tuesday"],

    // now if we want to access the Symbol key then we have to use the [] notation

    [mySym] : 'I am a Symbol'
    
}

console.log(obj.name); 

// aro ak rokom kore access kora jay jeta officialy recommended 
console.log(obj['name']);

console.log(obj[mySym]);
console.log(typeof mySym);  //output : symbol
console.log(typeof obj[mySym]); //output : string

/*obj.name = 'Sandip';
Object.freeze(obj); 
obj.name = "sanduu"; //it will not change the value of name property
console.log(obj.name);  //besically it not showing any output because of freeze method
*/
console.log(obj); 


// Object.seal(obj); //it will not allow to add or delete any property but we can change the value of the property
// obj.name = 'Sand';
// obj.age
// console.log(obj);


obj.greeting = function(){
    console.log('Hello');
}
console.log(obj.greeting()); // output will come: [Function (anonymous)]

obj.greet = function(){
    console.log(`Hello ${this.name}`);
}
console.log(obj.greet()); //output will come: Hello Sandip


