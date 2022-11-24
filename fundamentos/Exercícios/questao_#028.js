// Elabore uma função que recebe 
// dois parâmetros: o primeiro é 
// um array de números e o segundo 
// é um número que especifica uma 
// quantidade de dígitos. Essa função 
// deverá retornar somente aqueles 
// números do array que têm a 
// quantidade de dígitos indicada pelo 
// segundo parâmetro.

function seletorNumerosArray(numeros, quantDes) {
    let resultado = []

    for(numero of numeros){
        const quantidadeDeNum = String(numero).length

        if(quantidadeDeNum === quantDes)
        resultado.push(numero)
    }

    return resultado
}

console.log(seletorNumerosArray([10, 55, 22, 444, 777, 9], 3))