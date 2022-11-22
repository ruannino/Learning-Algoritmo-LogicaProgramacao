// Desenvolva uma função que 
// receba uma frase como parâmetro 
// e retorne essa string somente 
// com as consoantes,ou seja, 
// sem as vogais.

function remocaoVogal(frase) {
    const vogais = [
        "a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]

    vogais.forEach(vogal => frase = 
        frase.replace(vogal, ''))

    return frase
}

console.log(remocaoVogal("favoritos"))
console.log(remocaoVogal("especiais"))
console.log(remocaoVogal("nunca serao"))