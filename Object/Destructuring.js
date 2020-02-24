const CreateLanguage = function(name, author, year, dodera) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.changeLanguage = function (newName) {
        this.name = newName;
    }
}

const language = new CreateLanguage("C", "Dennis Ritchie", 1955)
const language2 = new CreateLanguage("C#", "Anders Hejlsberg", 1960)

language.changeLanguage("Doidera")

const {name:abobrinha} = language

console.log(abobrinha)

var languages = [language,language2]

for (const key of languages) {
    const {name, author, year} = key;
    console.log(`${name} - ${author} - ${year}`)
}

// const {name, author, year} = language

// console.log(name)
