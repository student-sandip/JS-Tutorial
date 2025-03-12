// it is more easier or usefull then foreach and filter like ---

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// here we does not need to use return keyword.
const newNums = nums.map( (items) => items * 2)
console.log(newNums);

// now print one multiiplication table ---

const table = 5;
const mul = nums.map( (items) => table * items)
console.log(mul);

// now the proper multtiipliication table ---

const tables = nums.map (num => {
    return nums.map(n => `${num} x ${n} = ${num * n}`).join('\n');
})

tables.forEach( table => {
    console.log(table);
})