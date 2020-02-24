// SET NAO PERMITE ELEMENTOS DUPLICADOS, se tentar colocar um elemento q ja exista dentro do set ele ignora este elemento
let charsets = new Set();
charsets.add("ASCII");
charsets.add("ISO-8859-1");
charsets.add("UTF-8");

console.log(charsets);
console.log(charsets.size);

charsets.forEach((item) => {
    console.log(item);
});

console.log(charsets.has("ASCII"));
console.log(charsets.delete("ASCII"));
console.log(charsets.size);
charsets.clear();
console.log(charsets.size);

// SET Ajuda a eliminar a duplicação de dentro do array
let array = [10, 10, 10];

let set = new Set(array);
console.log(set);

array = Array.from(set);
console.log(array);

