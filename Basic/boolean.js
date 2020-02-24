// jeito "errado" de fazer no JAVASCRIPT
function generateSerial(max) {

    if (max === undefined) {
        max = 1000;
    }
    return Math.floor(Math.random() * max);
}
// jeito correto de fazer no JAVASCRIPT
function generateSerialCerta(max) {

    console.log(max);

    console.log(!!max);

    max = max || 1000;
    return Math.floor(Math.random() * max);
}


// console.log(generateSerialCerta(1000));
// console.log(generateSerialCerta(100));
// console.log(generateSerialCerta(10));
console.log(generateSerialCerta());

let a = ('10' === 10) ? ('a' > 'b') ? 1 : 2 : (null === undefined) ? 3 : 4

console.log(a);