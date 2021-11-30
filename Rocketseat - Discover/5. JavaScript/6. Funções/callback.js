// callback function

function sayMyName(name) {
    console.log("Antes de executar a callback")
    name()
    console.log("Após executar a callback")
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)