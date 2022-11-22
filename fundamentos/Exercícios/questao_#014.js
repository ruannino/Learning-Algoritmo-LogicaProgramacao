// Desenvolva uma função que recebe 
// como parâmetro um objeto e retorne 
// um array de arrays, em que cada
// elemento é um array formado pelos 
// pares chave/valor que corresponde 
// a um atributo do objeto. Observe os 
// exemplos abaixo para um melhor 
// entendimento:

function objectForArray(objeto) {
    const retorno = [];

    for(let item in objeto)
        retorno.push([item, objeto[item]]);

    return retorno;
}

console.log(objectForArray
    ({nome: 'maria', profissão: 'ascalobaloba'}));

console.log(objectForArray
    ({nome: 'Ruannino', profissão: 'Pirata Espacial'}));