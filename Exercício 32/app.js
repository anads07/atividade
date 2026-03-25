let valor = parseInt(prompt("Digite um número:"));
let resultado = document.getElementById("resultado")

resultado.innerHTML += `O número digitado foi ${valor}, seu valor elevado ao quadrado é  ${Math.pow(valor,2)} e ao cubo é ${Math.pow(valor,3)}`
console.log(`O número digitado foi ${valor}, seu valor elevado ao quadrado é  ${Math.pow(valor,2)} e ao cubo é ${Math.pow(valor,3)}`)
