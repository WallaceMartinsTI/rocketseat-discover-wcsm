/* A função sofre Hoisting quando criada de forma comum */
function sayMyName() {}

/* Quando criada como varíavel (const, let, var), não acontece o Hoisting */
const digaMeuNome = function() {}

/*
Se a função for chamada antes de sua declaração,
ela só irá funcionar se acontecer o hoisting,
caso contrário, retornará um erro.
*/