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