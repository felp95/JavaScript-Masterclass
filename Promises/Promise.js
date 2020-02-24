// function sum(a, b, callback) {
//     setTimeout(() => {
//         callback(a + b);
//     }, 1000);
// }

// // UTILIZANDO CALLBACKS ANINHADOS O CODIGO FICA MUITO COMPLICADO PARA DAR MANUTENÇÃO
// sum(2, 2, function (a) {
//     sum(4, 4, function (b) {
//         sum(a, b, function (result) {
//             console.log(result)
//         });
//     });
// });

function sum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid Input")
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}

// TRATANDO PROMISES COM VARIOS CATCHS

// sum(2, 2).then(function (a) {
//     sum(4, 4).then(function (b) {
//         sum().then(function (result) {
//             return console.log(result);
//         }).catch(e => {
//             console.log(e)
//         });
//     }).catch(e => {
//         console.log(e)
//     });
// }).catch(e => {
//     console.log(e)
// });

// TRATANDO PROMISE COM UM CATCH SO E USANDO RETURNS DENTRO DA CADEIA DE PROMISES

// console.time("performance")
// sum(2, 2).then(function (a) {
//     return sum(4, 4).then(function (b) {
//         return sum(a, b).then(function (result) {
//             console.log(result);
//             console.timeEnd("performance")
//         })
//     })
// }).catch(e => {
//     console.log(e)
// });

// EXECUTANDO TODAS AS PROMISES DE UMA VEZ
console.time("performance")
Promise.all([
    sum(2, 2),
    sum(4, 4),
]).then(values => {
    const [a, b] = values;
    return sum(a, b).then(result => {
        console.log(result);
        console.timeEnd("performance");
    });
});