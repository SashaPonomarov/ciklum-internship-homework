const deepExtend = require("./deep_extend.js")

console.log('testing deep extend:')

let o1 = {a: 1, b: 'some string', c: {a: 10, b: 11, c: 12}}
let o2 = {a: 2, b: [1, 2, 3], c: {d: 9}, x: {y: null}}

console.log(deepExtend(o1, o2))