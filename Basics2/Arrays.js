// Arrays 

const myArr = [0,1,2,3,4,5]
console.log(myArr[4]); //it will print 4
console.log(myArr.length); //it will print 6

myArr.push(6); //it will add 6 at the end of the array
console.log(myArr);

myArr.pop(5);
console.log(myArr); //it will remove 6 from the array

myArr.shift(0);
console.log(myArr); //it will remove 0 from the array

myArr.unshift(0);
console.log(myArr); //it will add 0 at the beginning of the array


console.log(myArr.includes(3)); //it will print true


console.log(myArr.includes(7)); //it will print false

console.log(myArr.indexOf(8));  //it will print -1 because the 8th index does present in the array


const newArr = myArr.join();  //it will convert the array into a string
console.log(newArr);

console.log(typeof newArr); //it will print string


// sclice & splice


const myArr1 = [0,1,2,3,4,5]
const newArr1 = myArr1.slice(2,4); //it will print [2,3] (returns a section of an array)
console.log(newArr1);

const newArr2 = myArr1.splice(2,4); //it will print [2,3,4,5] (removes elements from an array)
console.log(newArr2);

/* The biggest difference between slice and splice is that ---
   splice changes the original array, while slice does not. 
   It is the important difference between them. */

