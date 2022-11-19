// Elabore uma função que receba um 
// array de números e retorne um array 
// que tenha todos os números que são 
// pares e que também tenham índices pares. 

function soParesInclusoIndice(numero) {
    let final = []

    for(let i = 0; i < numero.length; i += 2) {
        const numPares = numero[i] % 2 === 0

        if(numPares)
            final.push(numero[i])

    }

    return final
}

console.log(soParesInclusoIndice([1, 2, 2, 3, 4, 6, 23, 345]));