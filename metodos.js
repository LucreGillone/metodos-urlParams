// Métodos de String

let string = "      Esto es un string  "

console.log(string.toLowerCase())
console.log(string.toUpperCase())
console.log(string.trim())
console.log(string.slice(9, 15))
//splice(indiceInicio, indiceFin) el indiceFin se excluye de la cadena
console.log(string.replace("string", "otra cosa"))
console.log(string.split(" "))
console.log(string.startsWith("string"))
console.log(string.startsWith(" "))


//Métodos de Números
let numberString = "35.95"
let number = 45.4111

console.log(parseInt(numberString))
console.log(parseFloat(numberString))
console.log(Number(numberString))
console.log(isNaN(numberString))
console.log(number.toFixed(2))

console.log(Math.max(2,58,74))
console.log(Math.min(2,3,4,5,-2))
console.log(Math.random())

console.log(Math.ceil(number))
console.log(Math.floor(number))
console.log(Math.round(number))
