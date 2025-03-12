const heros =['Batman', 'Superman', 'Spiderman', 'Ironman', 'Thor', 'Hulk']

heros.forEach (function(items, index) {
    console.log(items, index)
})

// arrow function use koreo likha jay for example --- 

heros.forEach( (items) => {
    console.log(items)
})

// wea also execute it like this ---

function PrintsHeros(items){
    console.log(items);
}

heros.forEach(PrintsHeros);     //we give it just the reference of the function.


// now we will do declare objects incide an array like ---

const myCoding =[
    {
        ProgrammingLanguage : "JavaScript",
        inShort : "JS",
        use : "Frontend Development" 
    },
    {
        ProgrammingLanguage : "Java",
        inShort : "Java",
        use : "Backend Development" 
    },
    {
        ProgrammingLanguage : "Python",
        inShort : "py",
        use : "Mechine Learning" 
    },
    {
        ProgrammingLanguage : "Kotlin",
        inShort : "Kotlin",
        use : "App Development" 
    },
    {
        ProgrammingLanguage : "Swift",
        inShort : "Swift",
        use : "iOS Development"
    }
]

myCoding.forEach( (items) => {
    console.log(items.ProgrammingLanguage, 
        `is known as shortcut`, 
        items.inShort, `& use for`, 
        items.use);
} )


