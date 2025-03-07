function userName(name) {
    return `${name} is in.`
}
// console.log(userName("san"));


function name(param) {
    // if (param === undefined) {
    //     console.log("Please Enter a params.");
    // }

// the 2 if conditions are same we use both of two. like the upper one and lower one.

    if (!param) {
        console.log("Please Enter a params.");
    }
    return `${param} is a parameter.`
}
console.log (name());


function calculateTheValue (...first) {         //(...) it is a rest operator we can access all the values which is pass by first. means the output will be -- [1, 3, 5, 4, 6, 7]
    return first                                //but if we pass only the value first without rest operator it will print the 1st output means output will be -- 1.
}
console.log(calculateTheValue(1,3,5,4,6,7));





// functions with object --- 
const user = {
    username : "sandip",
    password : 12345
}

function handleName(useAny) {
    console.log(`The username is ${useAny.username} The password is ${useAny.password}`);
    
}
handleName(user)

// we can pass object directly like -- 
handleName ({
    username : "sndp",
    password : 54321
})

// now on arrays---

const newArray = [21, 87, 65]

function thesecondvalue (value) {
    return value[1]
}
console.log(thesecondvalue());

console.log(thesecondvalue([15, 37, 97]));


