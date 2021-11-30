/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []
    
Agora, crie uma função que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a família está com
saldo positivo ou negativo, seguido do valor do saldo

*/

let objeto = {
    receitas: [20.23, 50.99, 237.3],
    despesas: [29.35, 101.49]
}

function toFixedAndReplace(value){
    return value.toFixed(2).replace(".", ",")
}

function spentCalculator(revenues, expenditure){
    let totalRevenues = 0
    let totalExpenditure = 0

    for(let i = 0; i < revenues.length; i++){
        totalRevenues += revenues[i]
    }
    for(let i = 0; i < expenditure.length; i++){
        totalExpenditure += expenditure[i]
    }

    let total = totalRevenues - totalExpenditure

    console.log(`Receita Total R$${totalRevenues}`)
    console.log(`Despesa Total R$${totalExpenditure}`)

    if(total > 0){
        console.log(`Saldo restante R$${toFixedAndReplace(total)}`)
        console.log("Parabéns saldo positivo!!!")
    } else {
        console.log(`Atenção!!! Saldo insuficiente (R$${toFixedAndReplace(total)})`)
        console.log(`Faltou R$${toFixedAndReplace(total * -1)} para cobrir as despezas`)
    }
    
}

spentCalculator(objeto.receitas, objeto.despesas)
