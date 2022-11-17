function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function() {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    };
}

const d1 = criarData(22, 07, 2018);
const d2 = criarData(11, 03, 2022);
const d3 = criarData(31, 04, 2033);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());