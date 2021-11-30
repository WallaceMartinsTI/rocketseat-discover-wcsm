// Navegando pelos elementos
// Obs.: todos com Element, descartam espaço
// já sem o uso do Element, espaços são contados

// -- parentNode parentElement
// const element = document.querySelector('h1')
// console.log(element.parentNode)

// -- childNodes children
// const el = document.querySelector('body')
// - firstChild firstElementChild
// console.log(el.firstElementChild)
// - lastChild LastElementChild
// console.log(el.lastElementChild)

const el = document.querySelector('header')
// -- nextSibling nextElementSibling
console.log(el.nextSibling)
// -- previousSibling previousElementSibling
console.log(el.previousSibling)