// function* forever() {
//     let value = 1;
//     while (true) {
//         try {
//             const reset = yield value++;
//             if (reset) {
//                 value = 1
//             }
//         } catch (error) {
//             console.log(error)
//         }

//     }
// }

// function today() {
//     const date = new Date()
//     console.log(date)
// }

// const generator = forever();
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

// // generator.return();
// generator.throw("error");

// console.log(generator.next(true))
// console.log(generator.next())

// today();

function sum(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}

function async (fn) {
    const gen = fn();
    asyncR(gen)
}

function asyncR(gen, result) {
    const obj = gen.next();
    if (obj.done) return;
    obj.value.then((result) => {
        asyncR(gen, result)
    })
}

async (function* () {
    const a = yield sum(2, 2);
    const b = yield sum(4, 4);
    const result = yield sum(a, b);
    console.log(result)
});