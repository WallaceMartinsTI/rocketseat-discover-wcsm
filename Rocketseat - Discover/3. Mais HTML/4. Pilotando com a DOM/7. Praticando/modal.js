const button = document.querySelector('#openModal')
const div = document.querySelector('.modal-wrapper')

button.addEventListener('click', showModal)

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'
    if(isEscKey) {
        div.classList.add('invisible')
    }
})

function showModal() {
    div.classList.remove('invisible')
}