console.log(globalThis);

// terminal:  node 120_globalThis.js

// <ref *1> Object [global] {
// global: [Circular * 1],
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//         [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//         [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     }
// }