// A fim de criar um mecanismo de 
// busca para sua aplicação, você 
// precisa iniciar criando uma função para
// identificar palavras semelhantes.
// Escreva uma função que recebe como
// primeiro parâmetro uma palavra e, 
// como segundo parâmetro, um array de
// strings. A função deverá filtrar 
// as palavras do array que contêm nelas
// a string do primeiro parâmetro.

function buscadorPalavras(start, palavras) {
    return palavras.filter(
        palavra => palavra.includes(start))
}

console.log(buscadorPalavras(
    "bas", ["basico", "programas", "baseado"]))

console.log(buscadorPalavras(
    "pa", ["palavra", "paroxitona", "paz"]))