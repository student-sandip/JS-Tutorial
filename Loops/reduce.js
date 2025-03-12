const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce(function(acc, current) {
    // if we want to check that how the accumulator is changing and the current value
    console.log(`acc: ${acc} and the current value is: ${current}`);
    
    return acc + current;
}, 4)       // here we  also pput value of accumulator as 4
// so the sum will be 4 + 1 + 2 + 3 + 4 + 5 = 19

console.log(`The sum is ${sum}.`);
