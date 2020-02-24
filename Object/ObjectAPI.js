let javascript = {
    name: "js",
    year: 1995,
    paradigm: "functional",
    author: "Brandan Eich",
    influencedBy: "Java, Scheme and Self"
};

let javascript2 = {};

// Copiar propriedades de um objeto para outro
Object.assign(javascript2, javascript);

// NAO DEIXA CRIAR mas deixa eu alterar, deletar e ler as propriedades
Object.preventExtensions(javascript2);
javascript2.published = "Doidera"
javascript2.name = "JavaScript";
delete javascript2.author;

// NAO DEIXA CRIAR NEM DELETAR mas deixa alterar as propriedades
Object.seal(javascript2);
javascript2.published = "Doidera"
javascript2.name = "ECMAScript";
delete javascript2.influencedBy;

// nao deixa fazer mais nada no objeto
Object.freeze(javascript2);
javascript2.published = "Doidera"
javascript2.name = "ECMAScript 6";
delete javascript2.influencedBy;

console.log(javascript2);

// console.log(Object.keys(javascript));
// console.log(Object.values(javascript));
// console.log(Object.entries(javascript));
// console.log(javascript);
