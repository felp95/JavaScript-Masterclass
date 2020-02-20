const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const calculator = (fn) => {
    return (a, b) => {
        return fn(a, b);
    };
}

console.log(calculator(sum)(2, 2))

// ARROW FUNCTIONS NAO POSSUEM THIS E ARGUMENTS

const person = {
    name: "James Goslin",
    city: "Alberta",
    year: 1955,
    getAge: function () {
        return new Date().getFullYear() - this.year;
    }
}

console.log(person.getAge())

const createPerson = (name, city, year) => ({
    name,
    city,
    year
})

const person1 = createPerson("Alan Key", "Springfield", 1940)

console.log(person1)