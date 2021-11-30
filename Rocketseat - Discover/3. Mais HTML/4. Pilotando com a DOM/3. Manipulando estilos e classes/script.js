// Alterando estilos
// const element = document.querySelector('body')
// element.style.backgroundColor = '#f9f3d2'
// console.log(element.style.backgroundColor)
const element = document.querySelector('body')
element.classList.add('active', 'green')
console.log(element.classList)
// element.classList.remove('active')
element.classList.toggle('active') // toggle(se tiver on, desliga, se off, liga)

console.log(element.classList)