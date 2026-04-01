let produto1 = parseFloat(prompt("Digite o valor do primeiro produto:"));
let produto2 = parseFloat(prompt("Digite o valor do segundo produto:"));
let produto3 = parseFloat(prompt("Digite o valor do terceiro produto:"));
let total = produto1 + produto2 + produto3
let resultado = document.getElementById("resultado")


resultado.innerHTML = `O valor total da compra é R$${total}<br>`
resultado.innerHTML += `O valor da compra com 10% de desconto é R$${total * 0.90.toFixed(2)}<br>`
resultado.innerHTML += `O valor da compra com 20% de desconto é R$${total * 0.80.toFixed(2)}<br>`
resultado.innerHTML += `O valor da compra com 30% de desconto é R$${total * 0.70.toFixed(2)}<br>`
resultado.innerHTML += `O valor da compra com 50% de desconto é R$${total * 0.50.toFixed(2)}<br>`
console.log (`O valor total da compra é R$${total}
O valor da compra com 10% de desconto é R$${total * 0.90.toFixed(2)}
O valor da compra com 20% de desconto é R$${total * 0.80.toFixed(2)}
O valor da compra com 30% de desconto é R$${total * 0.70.toFixed(2)}
O valor da compra com 50% de desconto é R$${total * 0.50.toFixed(2)}`)