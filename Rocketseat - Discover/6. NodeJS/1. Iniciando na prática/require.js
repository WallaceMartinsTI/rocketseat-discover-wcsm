// módulo nativo do node
// import path from "path";     -> ES6
const path = require("path")

console.log(path.basename(__filename))

// meus módulo
const myModule = require("./exports.js")
console.log(myModule)