# Variáveis

* nomes simbólicos para receber algum valor
* Atalhos de código
* Identificadores
* 3 palavras reservadas para criar uma variável
    * var
    * let
    * const

```js
    // var
    var clima = "Quente"
    console.log(clima)
    // alterando valor da variável (o mesmo pra let)
    clima = "Frio"

    const carro = "Uno"
    // carro = "Gol"     retorna erro, pois CONST é imutável
```

O JS é uma linguagem fracamente tipada e dinâmica
- Variáveis não precisam ter um tipo
previamente definido
- Podemos mudar o conteúdo da variável

```js
    let clima = ""
    console.log(typeof clima)
    // retorno: string

    let estacao = true      // boolean
    estacao = "Primavera"   // string
```