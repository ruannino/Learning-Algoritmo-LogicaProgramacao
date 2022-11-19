// Elabore uma função que recebe um número 
// como parâmetro e retorne uma string com
// o símbolo "+" na quantidade especificada
// no parâmetro.

function stringMais(valor) {
    let vezes = " ";

    for (let i = 0; i < valor; i++)
        vezes += "+";

    return vezes;
}

console.log(stringMais(2));
console.log(stringMais(22));
console.log(stringMais(222));