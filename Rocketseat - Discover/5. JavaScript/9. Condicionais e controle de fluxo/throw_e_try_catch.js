// throw

function sayMyName(name = "") {
    if (name === "") {
        throw "Nome é obrigatório"
        // throw new Error("Nome é obrigatório")
    }
    console.log("Depois do erro")
}

try {
    sayMyName()
} catch(e) {
    console.log(e)
}