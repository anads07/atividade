let valor = parseInt(prompt("Digite um número:"));
let resultado = document.getElementById("resultado")

resultado.innerHTML += `O número digitado foi ${valor}, sua raiz quadrada é  ${Math.sqrt(valor).toFixed(2)} e cubica é ${Math.cbrt(valor).toFixed(2)}`
console.log(`O número digitado foi ${valor}, sua raiz quadrada é  ${Math.sqrt(valor).toFixed(2)} e cubica é ${Math.cbrt(valor).toFixed(3)}`)
