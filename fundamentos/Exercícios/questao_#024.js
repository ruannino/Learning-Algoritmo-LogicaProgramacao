// Desenvolva uma função que 
// recebe um caractere e uma 
// string como parâmetros e 
// retorne a quantidade de vezes
// que o caractere se repete 
// na string. A função deverá 
// ser case-sensitive, ou seja, 
// irá diferenciar maiúsculas de
// minúsculas.

function contarCaractere(buscadorCaractere, frase) {
    let contador = 0

    for(let i = 0; i < frase.length; i++)
        if(frase.charAt(i) === buscadorCaractere)
            contador++

    return contador
}

console.log(contarCaractere("a","eu sou Ana"))
console.log(contarCaractere("N","RuanniNo"))
console.log(contarCaractere("l","paralelepipedo"))