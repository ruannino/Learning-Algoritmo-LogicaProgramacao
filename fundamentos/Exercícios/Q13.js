// Crie uma função que receba um array de 
// elementos e retorne um array somente com
// os números presentes no array recebido
// como parâmetro.

function filtroNumeros(num) {
    const resultado = []
    for(let item of num)
        if(typeof item === "number")
            resultado.push(item);

    return resultado;
}

console.log(filtroNumeros
    ([15, 'larray', 'somulequedoido',100]));