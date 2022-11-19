// Escreva uma função que receba dois parâmetros. O primeiro 
// parâmetro é o elemento que repetirá, enquanto que o segundo
// será o número de vezes que haverá repetição. 
// Um array será retornado.

function repeticao(valor, repetir) {
    let resultado = [];

    for(let i = 0; i < repetir; i++)
        resultado.push(valor);

    return resultado;
}

console.log(repeticao("FatherKill", 4))
console.log(repeticao(16, 4))

function rep(x, y) {
    let result = [];

    for(let i = 0; i < y; i++)
        result.push(x);

    return result;
}

console.log(rep("alou", 3))