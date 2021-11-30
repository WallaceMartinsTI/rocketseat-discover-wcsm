// function expression
// function anonymous

// parâmetros (parameters)
const sum = function(number1, number2) {
    let total = number1 + number2
    return total
}

sum(2, 3)   // arguments - argumentos


let number1 = 34
let number2 = 25

// * Toda função sem RETURN, retorna UNDEFINED

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)