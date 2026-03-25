let lado1 = parseInt(prompt("Digite um dos lados do paralelepipido: "));
let lado2 = parseInt(prompt("Digite outro lado do paralelepipido: "));
let lado3 = parseInt(prompt("Digite outro lado do paralelepipido: "));
let resultado = document.getElementById("resultado");

resultado.innerHTML += `O volume do paralelepipido é: ${lado1 * lado2 * lado3}`
console.log(`O volume do paralelepipido é: ${lado1 * lado2 * lado3}`)