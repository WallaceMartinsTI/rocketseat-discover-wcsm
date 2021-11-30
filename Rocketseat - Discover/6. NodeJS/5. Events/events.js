const { EventEmitter } = require('events')

const ev = new EventEmitter()

// ouvindo o evento
ev.on('saySomething', (message) => {
    console.log("Eu ouvi a mensagem: ", message)
})

// emitindo o evento
ev.emit("saySomething", "Mensagem")
ev.emit("saySomething", "João")

// ouvindo o evento uma única vez
// é usado o:   ev.once