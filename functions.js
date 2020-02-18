// function declaration, posso invocar a função antes de criar ela.
//console.log(sum(1, 2));

// arguments da acesso aos parametros que foram passados para função

function sum(a = 1, b = 1) {
    let total = 0;
    for (const argument in arguments) {
        total += arguments[argument];
    }
    return total;
}

// function expression
const soma = function (a, b) {
    return a + b;
}

//console.log(soma(1, 2));

// funções de primeira classe podem ser atribuidas a uma variavel, passadas por parametros ou serem retornadas de uma outra função.
const subtract = function (a, b) {
    return a - b;
};

//console.log(subtract(2, 2))

const calculator = function (fn) {
    return function (a, b) {
        return fn(a, b);
    };
};

const restParameters = function (...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
};

//console.log(calculator(sum)(2, 2))
// console.log(sum(1,2,3,4,5,6,7,8,9))
// console.log(restParameters(1,2,3,4,5,6,7,8,9))

// AULA FUNCTION > THIS

// const rectangle = {
//     x: 10,
//     y: 2,
//     calculateArea: function () {
//         return this.x * this.y;
//     }
// };

//console.log(rectangle.calculateArea())

// AULA FUNCTION - CALL, APPLY AND BIND

// const calculateArea = function(fn) {
//     return fn(Math.PI * Math.pow(this.radius, 2));
// }

// const circle = {
//     radius: 10,
//     calculateArea
// }

// CALL 
// console.log(calculateArea.call(circle, Math.round))

// // APPLY tem que passar parametros dentro do array
// console.log(calculateArea.apply(circle, [Math.round]))

// // BIND
// const calculateAreaForCircle = calculateArea.bind(circle);
// console.log(calculateAreaForCircle(Math.round))

// AULA FUNCTION - NEW

const _new = function (fn, ...params) {
    const obj = {};
    Object.setPrototypeOf(obj, fn.prototype);
    fn.apply(obj, params);
    return obj;
}

const Person = function (name, city, year) {
    this.name = name;
    this.city = city;
    this.year = year;
};

Person.prototype.getAge = function () {
    return new Date().getFullYear() - this.year
}

const person1 = new Person("Linus Torvalds", "Helsinki", 1969);
const person2 = new Person("Bill Gates", "Seattle", 1955);

console.log(person1)
console.log(person1.getAge())
console.log(person2)
console.log(person2.getAge())