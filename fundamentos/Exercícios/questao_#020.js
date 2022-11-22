// Faça uma função que recebe 
// a base e a altura de um 
// triângulo e retorne a área 
// desse triângulo. A precisão 
// deverá ser de duas casas 
// decimais, arredondando se 
// necessário.

function areaTriangulo(base, altura) {
    const area = (base * altura) / 2

    return area.toFixed(2) // irá arredondar o numero para manter 2 casa decimais
}

console.log(areaTriangulo(2, 3))
console.log(areaTriangulo(2, 10))
console.log(areaTriangulo(7.8, 3.5))
console.log(areaTriangulo(2, 300))