let conta = parseFloat(prompt("Digite o valor total da conta:"));
let gorjeta = parseFloat(prompt("Digite o valor da gorjeta desejada em porcentagem(%):"));
let resultado = document.getElementById("resultado")

let valorgorgeta = conta * (gorjeta / 100)
let total = conta + valorgorgeta

resultado.innerHTML = `O valor da gorjeta é R$${valorgorgeta} <br>`
resultado.innerHTML += `O valor total da conta é R$${total}`

console.log (`O valor da gorjeta é R$${valorgorgeta}
O valor total da conta é R$${total}`)