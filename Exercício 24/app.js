let lanche = parseInt(prompt("Digite o valor do lanche:"))
let economia = parseInt(prompt("Digite quanto você já economizou:"))
let valor = lanche - economia

document.getElementById('resultado').innerHTML = `O valor que falta ecnomizar para pagar seu lanche é de R$${valor}`;
console.log(`O valor que falta ecnomizar para pagar seu lanche é R$${valor}`)