const frameworks = ["Angular", "React", "Vue"]

frameworks.forEach(x => {
    // console.log(x)
});

const CreateFrameworks = function (name, contribuitors) {
    this.name = name;
    this.contribuitors = contribuitors;
}

var framework1 = new CreateFrameworks("Angular.js", 1548)
var framework2 = new CreateFrameworks("vue.js", 746)
var framework3 = new CreateFrameworks("React", 10000)

const arrays = [framework1, framework2, framework3]

const resultFilter = arrays.filter((framework) => {
    return framework.contribuitors < 2000;
});

const resultFind = arrays.find((framework) => {
    return framework.name === "Angular.js";
});

// retorna true se achou algum elemento com a especificação
const resultSome = arrays.some((framework) => {
    return framework.name.includes("js");
});

// retorna true se achou TODOS os elementos com a especificação
const resultEvery = arrays.every((framework) => {
    return framework.name.includes("js");
});

// Converte um array em outro
const resultMap = arrays.map((framework) => {
    return framework.name;
});

// Retorna a soma de todos os elementos
const resultReduce = arrays.reduce((total, framework) => {
    return total + framework.contribuitors;
}, 0);

console.log(resultFilter);
console.log(resultFind);
console.log(resultSome);
console.log(resultEvery);
console.log(resultMap);
console.log(resultReduce);