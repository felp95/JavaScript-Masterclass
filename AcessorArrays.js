const languages = ["Python", "C", "Java"];

// retorna a posiçao do array caso encontre
console.log(languages.indexOf("Python"))

// retorna true caso encontre
console.log(languages.includes("Python"))

const newLanguages = ["C#", "JavaScript"]

// concatena dois ou mais arrays
console.log([].concat(languages, newLanguages));

console.log(languages.slice(0, 2))

console.log(languages.join(";"))