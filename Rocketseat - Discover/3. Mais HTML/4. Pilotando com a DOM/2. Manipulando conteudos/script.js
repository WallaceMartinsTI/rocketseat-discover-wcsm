// Manipulando conteúdo

// -- textContet
// const element = document.querySelector('h1')
// element.textContent = "Olá Devs!"
// ou para concatenar
// element.textContent += " Olá devs!"
// console.log(element)

// -- innerText
// element.innerText = "Olá Devs!"

// -- innerHTML
// element.innerHTML = "Olá Devs! <small>!!!</small>"

// -- value
// const element = document.querySelector('input')
// console.log(element.value)
// element.value = "outro valor"

// Atributos
const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('class'))
header.removeAttribute('id')
header.setAttribute('class', 'bg header')