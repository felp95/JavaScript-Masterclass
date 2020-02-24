let string = "Doidera"
let object = {Nome: "Self", Paradigm: "OO"}

let json = JSON.stringify(string);
let json2 = JSON.stringify(object);

console.log(json);
console.log(json2);

let jsonConvert = JSON.parse(json2)

console.log(jsonConvert.Nome);