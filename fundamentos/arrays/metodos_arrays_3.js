const numeros = [10, 20, 30, 40];

function praCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array);
}

numeros.forEach(praCadaElemento);

numeros.forEach(function(_, _, array) {
    console.log(array)
});

numeros.forEach(function(_, ind, _) {
    console.log(ind)
});

// for(let n of numeros) {
//     console.log(n);
// }

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
//}