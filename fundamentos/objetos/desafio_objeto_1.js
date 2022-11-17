// Objeto data
// Atributos: dia, mes ee ano
// Método: exibir -> "dia/mes/ano"

const data = {
    dia: 17,
    mes: 07,
    ano: 2018,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

data.dia = 22;

console.log(data.exibir())