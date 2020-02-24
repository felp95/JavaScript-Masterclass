let doidera = "doidera";

let a = `Template literalzada ${doidera}`;

console.log(a);

let b = new String('JavaScript');

console.log(b);

console.log("teste escapando a string \"doidera\" ")
console.log('teste escapando a string com apostrofo doidera\'s ')
console.log("teste escapando a string \n teste")

let daysOfWeek = " 0 - Sunday\n 1 - Monday\n 2 - Tuesday\n 3 - Wednesday\n 4 - Thursday\n 5 - Friday\n 6 - Saturday"

console.log(daysOfWeek);

let monthsOfYear = `0 - Jan
1 - Fev
2 - Mar
3 - Abr
4 - Mai`

console.log(monthsOfYear);

let teste = "teste";
let teste1 = "tes";

console.log(teste === teste1)

console.log("a".localeCompare("b"));

let eliminandoEspacoComeco = "      teste";
console.log(eliminandoEspacoComeco.trim());

let eliminandoEspacoFinal = "teste      ";
console.log(eliminandoEspacoFinal.trimLeft());