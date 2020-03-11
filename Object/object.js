let Title = "Clean Code";
let Author = "Robert C. Martin";
let Pages = 464;
let Language = "English";
let Available = true;

let book = {
    Title,
    Author,
    Pages,
    Language,
    Available
};

// console.log(book);
// console.log(book.Author);

// let bool = "Title" in book;

// console.log(bool)

// delete book.Available;

console.log(book)

// comparando objetos

let book2 = {
    Title,
    Author,
    Pages,
    Language,
    Available: false
};

let equal = true;

for (const key in book) {
    if (book[key] !== book2[key]) equal = false;
}

for (const key in book2) {
    if (book2[key] !== book[key]) equal = false;
}

console.log(equal)

const obj = [
  {
    id: 1,
    atividade: "Evento",
    materia: "Matemática",
    descricao: "Super evento",
    aluno: "Aluno 1",
    cor: "#0075bf",
    data: "2020-03-10T17:00:00.638Z"
  },
  {
    id: 2,
    atividade: "Evento",
    materia: "Matemática",
    descricao: "Evento muito massa",
    aluno: "Aluno 1",
    cor: "#0075bf",
    data: "2020-03-11T18:00:00.638Z"
  },
  {
    id: 3,
    atividade: "Evento",
    materia: "Matemática",
    descricao: "Vol 5 | Equações lineares",
    aluno: "Aluno 1",
    cor: "#0075bf",
    data: "2020-03-11T18:00:00.638Z"
  },
  {
    id: 4,
    atividade: "Trilha",
    materia: "Matemática",
    descricao: "Matemática Vol 5 | Equações lineares",
    aluno: "Aluno 1",
    cor: "#FFEB3B",
    data: "2020-03-13T19:00:00.638Z"
  },
  {
    id: 5,
    atividade: "Avaliação",
    materia: "Matemática",
    descricao: "Matemática Vol 1",
    aluno: "Aluno 1",
    cor: "#FF9800",
    data: "2020-03-10T17:00:00.638Z"
  }
];

for (const key in obj) {
  for (const key2 in obj) {
    if (obj[key].id !== obj[key2].id) {
      let equal = true;
      if (obj[key].data !== obj[key2].data) {
        equal = false;
      }
      console.log(`${obj[key].id} - ${equal}`);
    }
  }
}
