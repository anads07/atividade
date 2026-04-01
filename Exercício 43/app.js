let salariomin = parseFloat(prompt("Digite o valor do salário míninmo: "));
let kwgastos = parseFloat(prompt("Digite o tanto de kW gastos na sua residêcncia: "));
let resultado = document.getElementById("resultado");

let valor100kw = salariomin / 7
let valorkw = valor100kw / 100
let valorconta = valorkw * kwgastos
let valordesconto = valorconta * 0.9 

resultado.innerHTML = `O valor do quilowatt é R$${valorkw.toFixed(2)} <br>`
resultado.innerHTML += `O valor a ser pago na residência é R$${valorconta.toFixed(2)} <br>`
resultado.innerHTML += `O valor a ser pago na residência com desconto é R$${valordesconto.toFixed(2)}`

console.log (
`O valor do quilowatt é R$${valorkw.toFixed(2)}`
`O valor a ser pago na residência é R$${valorconta.toFixed(2)}`
 `O valor a ser pago na residência com desconto é R$${valordesconto.toFixed(2)}`
)