// what is iifi ? 
// Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined.
// It is a design pattern which is also known as Self-Executing Anonymous Function and contains two major parts.
// The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
// This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately executing function expression () through which the JavaScript engine will directly interpret the function.

// for example --

(function iifi() {
    console.log('IIFE');    //it is called named IIFE
}
)();
// IIFE
// so here we are declaring a function and calling it at the same time
// so it will print the IIFE

( () => {
    console.log('IIFE');     //it is called unnamed IIFE
}
)();
// IIFE
// so here we are declaring an arrow function and calling it at the same time
// so it will print the IIFE