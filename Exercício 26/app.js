let dinheiro = parseInt(prompt("Digite a quantidade de dinheiro a ser divido:"))
let x = dinheiro / 7
let amigo1 = x * 2
let amigo2 = x * 4
let amigo3 = x * 6

document.getElementById('resultado').innerHTML = `O primeiro amigo irá receber R$${amigo1}, o segundo R$${amigo2} e o terceiro R$${amigo3}`;
console.log(`O primeiro amigo irá receber R$${amigo1}, o segundo R$${amigo2} e o terceiro R$${amigo3}`)

