// Criar uma função que receba 
// uma string como parâmetro e 
// conte quantas palavras tem nela.

function contarPalavras(frase) {
    const palavras = frase.split(" ")

    return palavras.length
}

console.log(contarPalavras(
    "Eu comprei um PC do Milhão"))

console.log(contarPalavras(
    "Eu falo tudo que ela gosta de escutar"))