// for

// break - para a execução do loop
// continue - pula a execução do momento

// for(iniciar a variavel; condicao por loop repetir; expressão após o loop)
for(let i = 0; i < 10; i++) {
    console.log(i)
    if(i == 5){
        console.log(`Chegou no ${i}`)
        break;
    }
}