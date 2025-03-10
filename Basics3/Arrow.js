const user = {
    name: 'John',
    age: 30,

    sayHi: function() {
        console.log(`hello ${this.name}`);
    }
}
user.sayHi(); // John
// now if we chenge the current "name" from john to sandip then it will print sandip
// because this keywords represents the current value of the object
user.name = 'Sandip';
user.sayHi(); // Sandip



// now come to our main topic of arrow function

function first() {
    console.log(this); // It will print the window object
}
first(); // window object

// we can also declare it with object
const obj = function() {
    console.log(this);
}
obj(); // window object



// now we will see the arrow function
const arrow = () => {
    console.log(this);
}
arrow(); // window object
// so the arrow function also print the window object
// because arrow function does not have its own this
// it takes the this from its outer scope
// so it will take the this from its parent scope


// now we discuss about the implcit and explicit return
// implicit return

const implicit = (num1, num2) => num1 + num2;
console.log(implicit(2, 3)); // 5

// here we are not using the parenthesis and the return keyword but sometimes it is very important to use the parenthesis 
// for an example -- if we want  to declare an object then we have to use the parenthesis
const implicitObject = (name, age) => ({name, age});
console.log(implicitObject('John', 30)); // {name: "John", age: 30}



// explicit return

const explicit = (num1, num2) => {
    return num1 + num2;
}
console.log(explicit(2, 5)); // 7    




