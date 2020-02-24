// importanto somente oq eu quero do outro arquivo
// import {PI, pow} from './Math.mjs'

// Importa TUDO do outro arquivo
// import * as math from './Math.mjs'

// Importa DEFAULT do outro arquivo
import Circle from './Circle.mjs'

const circle = new Circle(10);
console.log(circle)
console.log(circle.area)