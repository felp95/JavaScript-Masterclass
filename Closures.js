// function fn1() {
//     const v1 = 10;
//     return function () {
//         console.log(v1);
//     }
// }

// const fn2 = fn1();

// const v1 = 100;

// fn2();

// TODAS AS FUNÇÕES EM JS SAO CLOSURES, TEM O SCOPE CHAIN ESTATICO E DEFINIDO NA CRIAÇÃO.

// const fn3 = function () {
//     let v1 = 10;
//     return {
//         m1() {
//             console.log(++v1);
//         },
//         m2() {
//             console.log(--v1);
//         }
//     };
// }

// const obj1 = fn3();
// obj1.m1();
// obj1.m2();

const obj1 = {};

for (var v1 = 0; v1 < 3; v1++) {
    obj1[v1] = (function (v2) {
        return function () {
            console.log(v2)
        }
    })(v1);
}

obj1[0]();
obj1[1]();
obj1[2]();