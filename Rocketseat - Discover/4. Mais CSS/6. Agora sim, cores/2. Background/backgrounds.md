## Background

- Define um fundo para o nosso elemento
- Sua área de atuação é a caixa toda
- por padrão, é transparente

### Exemplos

- Usar cores sólidas
- Usar imagens
- Controlar
    - a posição das imagens,
    - se elas se repetem ou não
    - o tamanho delas na caixa
- Usar cor e imagem juntas
- Usar cor e gradiente

```css
header {
    background-color: red;
    background-image: url('https://source.unsplash.com/random');

    background-repeat: repeat;
    /* no-repeat = para a imagem não se repetir */ 

    background-position: center;

    background-size: contain;
    /* contain = fica dentro do container */
    /* cover = se estica para preencher todo o container */

    background-origin: content-box;
    /* border-box = começa contando com a borda */
    /* content-box = fica dentro da borda */
    /* padding-box = fica dentro do padding */
    
    background-clip: content-box;
    /* afeta cor e imagem, mesmos valores que o origin */

    background-attachment: fixed;
    /* padrão 'scroll' = imagem movimenta com o scrolar da página */
    /* fixed = fixa a imagem de background */

    /* Shorthand */
    background: blue url('https://source.unsplash.com/random') no-repeat
    right top / cover border-box content-box fixed;
    /* Sequência: color > image > repeat > position > / size > origin > clip > attachment */

    /* Cor gradiente */
    background: linear-gradient(red, yellow);
    background: radial-gradient(red, yellow);   /* de forma circular */
    /* vai do vermelho para amarelo */
}
```
