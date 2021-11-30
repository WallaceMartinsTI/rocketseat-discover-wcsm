/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema
númerico para sistema de notas em caracteres tipo A B C

* de 90 para cima   - A
* entre 80 - 89     - B
* entre 70 - 79     - C
* entre 60 - 69     - D
* menor que 60      - F

*/

function scoreTransform(score) {
    let newScore;

    if(score >= 90 && score <= 100){
        newScore = "A"
    } else if(score >= 80 && score <= 89){
        newScore = "B"
    } else if(score >= 70 && score <= 79){
        newScore = "C"
    } else if(score >= 60 && score <= 69){
        newScore = "D"
    } else if(score < 60){
        newScore = "E"
    } else {
        console.log("Nota inválida")
    }

    return newScore;
}

console.log(scoreTransform(95))
console.log(scoreTransform(85))
console.log(scoreTransform(75))
console.log(scoreTransform(65))
console.log(scoreTransform(50))
console.log(scoreTransform(125))
