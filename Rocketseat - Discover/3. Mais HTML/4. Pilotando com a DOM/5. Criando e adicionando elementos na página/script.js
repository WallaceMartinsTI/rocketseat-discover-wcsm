// Criando e adicionando elementos

// -- createElement
const div = document.createElement('div')
div.innerText = "Olá devs!"

// -- append prepend
// const body = document.querySelector('body')

body.append(div) // adiciona depois do header
body.prepend(div) // adiciona antes do header

// -- insertBefore
const body = document.querySelector('body')
const script = body.querySelector('script')

body.insertBefore(div, script)