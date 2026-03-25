let valor = parseInt(prompt("Digite um número:"));
let resultado = document.getElementById("resultado")

resultado.innerHTML += `A raiz quadrada de ${valor} é ${Math.sqrt(valor)}`
console.log( `A raiz quadrada de  ${valor} é ${Math.sqrt(valor)}`)
