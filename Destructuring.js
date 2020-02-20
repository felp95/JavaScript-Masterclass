const CreateLanguage = function(name, author, year, dodera) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.company = function () {
        this.dodera = dodera
    }
}


const language = new CreateLanguage("C", "Dennis Ritchie", 123, "Malandro")
console.log(language)
const language2 = new CreateLanguage("Java", "dasdsa", 312)
const language3 = new CreateLanguage("C#", "qeeqwe", 321312)
const language4 = new CreateLanguage("JavaScript", "xcvxvce", 31231)
const language5 = new CreateLanguage("Dart", "adse", 3123)
const language6 = new CreateLanguage("Angular", "dsfsd", 312312)

var languages = [language,language2,language3,language4,language5,language6]

for (const key of languages) {
    const {name, author, year} = key;
    console.log(`${name} - ${author} - ${year}`)
}

// const {name, author, year} = language

// console.log(name)
