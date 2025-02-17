const name = "Sandip";
const age = 20

// console.log(name + age + "Hello")

console.log(`My name is ${name} and my age is ${age}`) //template literals     \
// mordan way to write string


const otherName = new String ("senuyaa");

// if we put it in browser's console then it will show the string like this ---

/* String {'senuyaa'}
0:"s"
1:"e"
2:"n"
3:"u"
4:"y"
5:"a"
6:"a"
length:7
[[Prototype]]:String
[[PrimitiveValue]]:"senuyaa" */


console.log(otherName[0]) //output -- s
console.log(otherName.__proto__) //output -- String {'senuyaa'};
console.log(otherName.length) //output -- 7
console.log(otherName.charAt(4)) //output -- a
console.log(otherName.indexOf('a')) //output -- 5



const newString = otherName.substring(0, 3) //substring(start, end)
console.log(newString) //output -- sen

const newString1 = otherName.slice(-5, 6) //slice(start, end)
console.log(newString1) //output -- nuya

// in slice method the negetive numbers are works  but in substring it ignore the negetive numbers

const  url = "https://sandip.com/sandip%20saha"
console.log(encodeURI(url)) //output -- https://sandip.com/sandip%20saha

console.log(url.replace("sandip", "senuyaa")) //output -- https://senuyaa.com/sandip%20saha 
// this only remove the first occurance of the word sandip but nor the second one

// this line can be replaced all the occurance of the word sandip
console.log(url.replace(/sandip/g, "senuyaa")) //output -- https://senuyaa.com/senuyaa%20saha



// that's how string converts to an array ---

const summary = "This is a summary of the string"

console.log(summary.split(" ")) //output -- ["This", "is", "a", "summary", "of", "the", "string"]
// it splits the string by the space and convert it to an array


console.log(summary.smash(" ")) //output -- Thisisasummaryofthestring
// it removes the space from the string