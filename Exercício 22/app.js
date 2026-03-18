let sorvete_choc = parseInt(prompt("Digite a quantidade de sorvetes de chocolate vendidos:"))
let sorvete_bau = parseInt(prompt("Digite a quantidade de sorvetes de baunilha vendidos:"))
let valor_choc = parseInt(prompt("Digite o valor do sorvete de chocolate:"))
let valor_bau = parseInt(prompt("Digite o valor do sorvete de chocolate:"))
let total = sorvete_choc * valor_choc + sorvete_bau * valor_bau

document.getElementById('resultado').innerHTML = `O valor total arrecadado com a venda de sorvetes é R$ ${total}`;
console.log(`O valor total arrecadado com a venda de sorvetes é R$ ${total}`)