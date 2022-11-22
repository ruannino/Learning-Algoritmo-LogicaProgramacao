// Criar uma função que receba um 
// array de números e retorne o
// menor número desse array.

function menorNumeroDoArray(numeros) {
    let menor = [0]

    for(let i in numeros)
        if(numeros[i] < menor)
            menor = numeros[i]

    return menor
}

console.log(menorNumeroDoArray([10, 1, 9, 0.2, -3]))
console.log(menorNumeroDoArray([100, 0, 298, 1, 4]))
console.log(menorNumeroDoArray([53, 22, 17, 90, -0.22]))