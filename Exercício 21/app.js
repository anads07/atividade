let sorvetes = parseInt(prompt("Digite a quantidade de sorvetes vendidos:"))
let valor = parseInt(prompt("Digite o valor dos sorvetes:"))
let total = sorvetes * valor

document.getElementById('resultado').innerHTML = `O valor total arrecadado com a venda de sorvetes é R$ ${total}`;
console.log('O valor total arrecadado com a venda de sorvetes é R$ ${total}')