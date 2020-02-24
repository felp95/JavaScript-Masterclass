// Os tipos de dados na linguagem JavaScript se dividem em PRIMITIVOS e OBJETOS. Os primitivos são imutáveis, ou seja, ao longo do tempo seu valor não é alterado

typeof 10;
typeof "10";
typeof true;
typeof Symbol("iterator");
typeof null;
typeof undefined;


// Os objetos são valores que representam uma referência em memória que pode ser alterada

typeof function sum(a, b) {return a + b}
typeof {name: "teste"}