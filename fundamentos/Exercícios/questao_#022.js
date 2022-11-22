// Desenvolva uma função que receba 
// como parâmetro um número de 1 a 10. 
// Internamente, na função, será gerado 
// um número aleatório de 1 a 10. 
// A função deverá retornar se o parâmetro
// de entrada foi igual ao número sorteado 
// internamente. Se o valor fornecido foi 
// o sorteado, retorne 
// "Parabéns! O número sorteado foi o X". 
// Se não for igual, retorne 
// "Que pena! O número sorteado foi o X". 
// X é o número que foi sorteado.

function sorteioUmADez(numeroEscolhido) {
    const min = 1
    const max = 10
    const numeroAleatorio = Math.floor
        (Math.random() * (max - min + 1 ) + min)

    return (numeroEscolhido === numeroAleatorio ?
        `Parabéns! O número sorteado foi o ${numeroAleatorio}` :
        `Quepena, o número sorteado foi o ${numeroAleatorio}`
    )
}

console.log(sorteioUmADez (1))
console.log(sorteioUmADez (2))
console.log(sorteioUmADez (3))
console.log(sorteioUmADez (4))
console.log(sorteioUmADez (5))
console.log(sorteioUmADez (6))
console.log(sorteioUmADez (7))
console.log(sorteioUmADez (8))
console.log(sorteioUmADez (9))
console.log(sorteioUmADez (10))