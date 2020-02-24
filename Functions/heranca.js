const functionalLanguage = {
    paradigm: "functional"
}

const scheme = {
    name: "scheme",
    year: 1975
};

Object.setPrototypeOf(scheme, functionalLanguage);

const javascript = {
    name: "JavaScript",
    year: 1995
}
Object.setPrototypeOf(javascript, functionalLanguage);

for (const key in scheme) {
    console.log(key, scheme.hasOwnProperty(key));
}

console.log(scheme.paradigm);
console.log(javascript.paradigm);