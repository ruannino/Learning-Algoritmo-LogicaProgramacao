// Desenvolva uma função que 
// recebe um objeto como parâmetro 
// e retorne um outro objeto que 
// corresponde ao ao objeto recebido 
// como parâmetro, porém com 
// as posições das chaves e valores invertidas.

function inverter(objeto) {
    const objetoInvert = {}

    Object.entries(objeto).forEach(parChaveValor => {
        const chave = 0,
        valor = 1

        objetoInvert[parChaveValor[valor]] = parChaveValor[chave]
    })

    return objetoInvert
}

console.log(inverter({a: 1, b: 2, c: 3,d: 4, e: 5}))