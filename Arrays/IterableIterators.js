const newLanguages = ["JavaScript", "C#", "Angular"];
const oldLanguages = ["Java", "Spring", "JSF"];

// Spread Operators
const languages = [...newLanguages, ...oldLanguages];

let map = new Map([
    ["C#", 2019],
    ["Java", 2018]
])

for (const [language, year] of map) {
    console.log(language, year)
}


//console.log(languages)