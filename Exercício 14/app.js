let num1 = parseInt(prompt("Digite um número:"))
let num2 = parseInt(prompt("Digite outro número:"))
let var1 = num1 + 1;
let var2 = num2 - 1;


document.getElementById('resultado').innerHTML = `Os números digitados foram ${num1} e ${num2}. <br>
O ${num1} acrescido de uma unidade é ${var1}. <br>
O ${num2} decrescido de uma unidade é ${var2}. `;

console.log (`Os números digitados foram ${num1} e ${num2}. 
O ${num1} acrescido de uma unidade é ${var1}. 
O ${num2} decrescido de uma unidade é ${var2}. `)