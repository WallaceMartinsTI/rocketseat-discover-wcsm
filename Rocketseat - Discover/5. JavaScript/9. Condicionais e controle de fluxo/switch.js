// switch
let expressao = true
switch (expressao) {
    case 'a':
        // codigo
        break

    case 'b':
        // codigo
        break

    case 'c':
        // codigo
        break
    
    default:
        // se nao cumpriu nenhum caso acima, cai aqui
        break
}

// EXEMPLO

function calculator(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }
    return result
}

console.log(calculator(4, '+', 8))