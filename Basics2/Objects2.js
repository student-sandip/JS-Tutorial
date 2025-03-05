const myName ={
    fullName: {
        firstName: "Sandip",
        lastName: "Saha"
    }
}

console.log(myName.fullName.firstName);
console.log(myName.fullName.lastName);
console.log(myName.fullName.middleName); //output will come: undefined because i don't give any middle name.


const herName = {
    fulName: {
        fName: "Sneha",
        lName: "Dey"
    }
}

console.log(herName.fulName.firstName);
console.log(herName.fulName.lastName);


const ourName = Object.assign({}, myName, herName);
console.log(ourName); //output will come: { fullName: { firstName: 'Sneha', lastName: 'Dey' } }



const obj1 = {1: "a", 2: "b", 3: "c"};
const obj2 = {4: "d", 5: "e", 6: "f"};
const obj3 = Object.assign({},obj1, obj2);
console.log(obj3); //output will come: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


// but we don't need to use Object.assign() method to merge two objects. We can use the spread operator to merge two objects.

// for example:

const obj4 = {...obj1, ...obj2};
console.log(obj4); //output will come: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

console.log(Object.keys(obj4)); //output will come: [ '1', '2', '3', '4', '5', '6' ]
console.log(Object.values(obj4)); //output will come: [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(Object.entries(obj4)); //output will come: [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ], [ '5', 'e' ], [ '6', 'f' ] ]
