// dates

// 1. Create a Date object
let today = new Date();
console.log(today.toString());
console.log(today.toDateString());   //it shows the currents date
console.log(today.toTimeString());   //it shows the current time but in GMT format
console.log(today.toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'}));  //it shows the current time in Indian time zone

console.log(typeof today); //it is also an object(today is an object)


// 2. Get the full year
let myCreateDate = new Date(1999, 11, 12, 12, 30, 45, 0);

// let's brake down the above date
/*1999: This is the year component of the date.
11: This is the month component of the date. It is important to note that JavaScript months are zero-indexed, meaning that 0 corresponds to January and 11 corresponds to December. Therefore, 11 represents December.
12: This is the day of the month.
12: This is the hour of the day in a 24-hour format.
30: This is the minute component of the time.
45: This is the second component of the time.
0: This is the millisecond component of the time.*/

console.log(myCreateDate.toDateString());
 
console.log(myCreateDate.toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'}));



let newDate = new Date();
// now if we want to customaize the date and time format
console.log(newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Kolkata'
}));
