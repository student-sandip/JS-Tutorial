const tour = {
    name: "Park",
    location: "Kolkata",
    price: 100,
    description: "This is a park in Kolkata."
}

console.log(tour.name);

// now we see how to distructure the object.
// for example:
const{name, location, price, description} = tour;
console.log(tour); //this is how we can destructure the object.

// if we want to chenge the name of the object then we can also do it inside the curly braces. like ---
const{name: n, location: l, price: p, description: d} = tour;
console.log(n); //output will come: Park
console.log(tour); // it will also shows the full output.

