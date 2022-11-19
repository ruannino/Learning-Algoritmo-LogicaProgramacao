// Crie uma função que receba três números como
// parâmetro (numero, minimo, maximo) e também um 
// parâmetro booleano (inclusivo) e retorne se o 
// parâmetro numero (o primeiro parâmetro) está 
// entre minimo e maximo. Quando o parâmetro 
// inclusivo for true, tenha "entre" como inclusivo,
// ou seja, considerando se numero é igual a minimo
// ou a maximo. Caso o parâmetro inclusivo não seja 
// informado, seu valor padrão deverá ser false, 
// portanto, a lógica será exclusiva, 
// não considerando se numero é igual a minimo ou 
// a maximo.

function estaEntreNumeros(min, num, max, incluso = false) {
        if(incluso) return num >= min && num <= max 

        return num > min && num < max
}

console.log(estaEntreNumeros(2, 5, 6));
console.log(estaEntreNumeros(2, 1, 6));
console.log(estaEntreNumeros(2, 5, 6, true));
console.log(estaEntreNumeros(2, 5, 6, false));
console.log(estaEntreNumeros(0, 0, 0, false));
console.log(estaEntreNumeros(0, 0, 0, true));
