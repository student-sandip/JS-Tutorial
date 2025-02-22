const myTeam = ["Sandip", "Sneha","Ghonta","Ghonti","Senu"]
const oppoTeam = ["Keshab", "Diga","Mota"]


console.log(myTeam)


//myTeam.push(oppoTeam); //it will add the oppoTeam array at the end of the myTeam array
//console.log(myTeam); // ["Sandip", "Sneha","Ghonta","Ghonti","Senu",["Keshab", "Diga","Mota"]]


// here's one similar method like the puch() method ---

//myTeam.concat(oppoTeam); // it will add the oppoTeam array at the end of the myTeam array
//console.log(myTeam); // ["Sandip", "Sneha","Ghonta","Ghonti","Senu",["Keshab", "Diga","Mota"]]

// but the difference is that the concat() method will not change the original array, it will return a new array with the added elements
// so, if you want to keep the original array unchanged, you can use the concat() method

// now if i spread the oppoTeam array in the myTeam array, it will add the elements of the oppoTeam array in the myTeam array
// myTeam.push(...oppoTeam);
//console.log(myTeam); // ["Sandip", "Sneha","Ghonta","Ghonti","Senu","Keshab", "Diga","Mota"]


// now if i want to remove the elements of the oppoTeam array from the myTeam array, i can do it like this --
myTeam.splice(2,oppoTeam.length);
console.log(myTeam); // ["Sandip", "Sneha","Ghonta","Ghonti","Senu"]

// we also write it like this --
const  AllPlayers = [...myTeam, ...oppoTeam]
console.log(AllPlayers);

// also---

const allPlayers = myTeam.concat(oppoTeam);
console.log(allPlayers); // ["Sandip", "Sneha","Ghonta","Ghonti","Senu","Keshab", "Diga","Mota"]



// now if i want to add the elements of the oppoTeam array in the myTeam array at a specific index, i can do it like this --
myTeam.splice(2,0,...oppoTeam);
console.log(myTeam); // ["Sandip", "Sneha","Keshab", "Diga","Mota","Ghonta","Ghonti","Senu"]

// now we use the flat method to flatten the array --- 
const arr = [1,2,4,[8,5],3,[6,2,[9,7]]];

console.log(arr.flat(Infinity)) // [1, 2, 4, 8, 5, 3, 6, 2, 9, 7]
// flat and inside the () we have to define the depth of the array, if we don't define the depth, it will flatten the array only one level deep
// if we define the depth as Infinity, it will flatten the array to the deepest level


