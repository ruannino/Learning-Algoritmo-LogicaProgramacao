// Escreva uma função que receba um
// array de números e retornará 
// a soma de todos os números desse
// array

function somarNumArrays(num) {
    let soma = 0
    num.forEach(num => soma += num);

    return soma;
}

console.log(somarNumArrays([14, 14, 10]))