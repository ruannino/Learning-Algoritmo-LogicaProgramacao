// Crie uma função que receba uma 
// array e retorne o primeiro e o 
// último elemento desse array como 
// um novo array:

function receberItens(elementos) {
    const iPrimeiro = 0
    const iUltimo = elementos.length - 1
    const elemento1 = elementos[iPrimeiro]
    const elemento2 = elementos[iUltimo]

    return [elemento1, elemento2];
}

console.log(receberItens([1, 3, 4, 66, 234, 999]));