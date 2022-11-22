// Você está trabalhando numa aplicação pessoal 
// de controle de despesas. Na tela principal 
// dessa aplicação, é possível adicionar produtos
// ou serviços, informando nome, categoria e preço.
// Uma funcionalidade que você está desenvolvendo no 
// momento é a de somar o total das despesas. 
// Crie uma função que receba um array de produtos 
// e retorne o total das despesas.

function despesasTotal(itens) {
    var total = 0

    for(let item of itens)
        total += item.preco

    return total
}

console.log(despesasTotal([
    {nome: "Processador Ryzen 5800G", categoria: "WorkStation",
    preco: 2700.00},
    {nome: "GPU Nvidia RX 580 8 gb", categoria: "WorkStation",
    preco: 3499.00}]));