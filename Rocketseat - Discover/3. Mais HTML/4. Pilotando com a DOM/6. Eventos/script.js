// Eventos

// Adicionando eventos via HTML
function print1() {
    console.log('print1')
}

// Eventos de teclado
const input = document.querySelector('input')
input.onkeypress = function() {
    console.log('rodei')
}

// Adicionando eventos via JS
const h1 = document.querySelector('h1')
h1.addEventListener('', print2)
function print2() {
    console.log('print2')
}

// Adicionando eventos via JS (Outro método)
const h1 = document.querySelector('h1')
h1.addEventListener('click', print3)

function print3() {
    console.log('print3')
}

h1.addEventListener('click', function() {
    console.log('outro momento')
})

// argumento event
const input2 = document.querySelector('input')
input2.onkeydown = function(event) {
    console.log(event)
}