//  here we learn about scope functions ---
let a = 700
if (true) {
    let a =  3
    const b = 9
    var c = 5
    d = 2
    console.log("inner a: ", a);  //local scope
    
}

// console.log(a);  we can't access the value of a 
// console.log(b);  we also can't access the value of b
console.log(c); console.log(d);   
// here's the problem occurs because we declare the "c" and "d" variables into an if condition but it still prints the output.
// that's why we don't use var 

console.log("outer a: ", a);   //global scope




// nested scope --- 

function one() {
    const name = "sandip"

    function two() {
        const me = "senu"
        console.log(name);
        
    }
    // console.log(me);

    two()
    
}

one()

// now another one ---

if (true) {
    const username = "senu "

    if (username === "senu ") {
        const me = "sandip"
        console.log(username + me);
        
    }
    // console.log(me);
    
}

// console.log(username);


// ************** interesting *****************

function addone(params) {
    return params + 1
}
console.log(addone(5))



const addTwo = function (params) {
    return params + 2
}
console.log(addTwo(7));  //if we write this on the first it shows Cannot access 'addTwo' before initialization this error.


