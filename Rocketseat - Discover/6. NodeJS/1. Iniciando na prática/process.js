// lista de argumentos
console.log(process.argv)
const firstName = process.argv[2]
const lastName = process.argv[3]

// após colocar no console: node process <Nome> <Sobrenome>
console.log(`Seu nome é ${firstName} ${lastName}`)

