// console.log("Hello World!")

const math = require("./math")
const os = require("os")
// const path = require("path")

const{add,subtract,multiply,divide} = require("./math")

// console.log(os.version())
// console.log(os.type())

// console.log(os.homedir())

// console.log(path.basename(__filename))
// console.log(path.dirname(__filename))


// //by using this we get all the information about the file
// console.log(path.parse(__filename))

console.log(add(2,3))
console.log(subtract(2,3))
console.log(multiply(2,3))
console.log(divide(2,3))