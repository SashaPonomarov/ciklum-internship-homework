const deepExtend = require("./deep_extend.js");

console.log('testing deep extend:');

let o1 = {a: 1, b: 'some string', c: {a: 10, b: 11, c: 12}};
let o2 = {a: 2, b: [1, 2, 3], c: {d: 9}, x: {y: null}};

console.log(deepExtend(o1, o2));




const deepCompare = require("./deep_compare.js");

console.log('testing deep compare:');

o1 = {a: 1, b: 'some string', c: null, d: {a: 1}, arr: [1, 2, 3]};
o2 = {a: 1, b: 'some string', c: null, d: {a: 1}, arr: [1, 2, 3]};

console.log(o1 + ' = '  + o2);
console.log(deepCompare(o1, o2)); //true


o1 = {a: 1, b: {}, c: null, d: {a: 1}, arr: [1, 2, 3]};
o2 = {a: 1, b: 'some string', c: null, d: {a: 1}, arr: [1, 2, 3]};

console.log(o1 + ' = '  + o2);
console.log(deepCompare(o1, o2)); //false