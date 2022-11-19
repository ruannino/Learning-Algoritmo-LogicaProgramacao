// Desenvolva uma função que recebe dois números
// inteiros não negativos (maiores ou iguais a zero)
// e realize a multiplicação deles. Porém, 
// não utilize o operador de mutiplicação.

function multiplicacao(x, y) {
    let resultado = 0;

    for(let i = 0; i < y; i++)
        resultado += x;
    
    return resultado;
}

console.log(multiplicacao(2, 2));
console.log(multiplicacao(4, 16));
console.log(multiplicacao(200, -16)); // resultado = 0
