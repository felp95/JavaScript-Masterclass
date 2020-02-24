const languages = ["Python", "C", "Java"];

// MUTATOR METHODS 

// adiciona no final do array
languages.push("C#")
languages.push("Ruby")

// remove no final do array
languages.pop()

// adiciona no começo do array
languages.unshift("HTML")

// remove no começo do array
languages.shift();

// remove, substitui ou adiciona um ou mais elementos em uma determinada posição
// console.log(languages.splice(0, 1));
// console.log(languages.splice(0, 0, "C++", "GO"))


const CreateLanguage = function (name, year) {
    this.name = name;
    this.year = year;
}

var language1 = new CreateLanguage("Python", 1991);
var language2 = new CreateLanguage("C", 1972);
var language3 = new CreateLanguage("Java", 1995);
var language4 = new CreateLanguage("C#", 2001);

var arrays = [language1, language2, language3, language4]

arrays.sort(function (a, b) {
    return a.year - b.year;
})

console.log(arrays)

arrays.sort(function (a, b) {
    return a.name.localeCompare(b.name);
})

console.log(arrays)

console.log(arrays.reverse())
