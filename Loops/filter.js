const heros =['Batman', 'Superman', 'Spiderman', 'Ironman', 'Thor', 'Hulk']

const values = heros.forEach (function(items, index) {
    console.log(items, index)
})

console.log(values); //undefined
// soit alwayes give undefined values because it does not return anything.
// so we can use filter method instead of forEach method.
// example --- 

const value = heros.filter ( () => !null )

console.log(value);


// now will de another example --- 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (items) => items > 3)
console.log(newNums);


const myArr = ["sn", "Senu", "Sneha", "Sandip"]

// we you declare scope method {} then we have to use return keyword.
const newArr = myArr.filter( (items) => {
    return items.length > 2
})

console.log(newArr);
