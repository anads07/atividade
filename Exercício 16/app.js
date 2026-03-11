let num1 = parseFloat(prompt("Digite um número:"))
let num2 = parseFloat(prompt("Digite outro número:"))
let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2; 
let divisao = num1 / num2;
let media = (num1 + num2) / 2;

document.getElementById('resultado').innerHTML = `Os números digitados foram ${num1} e ${num2}. <br>
A soma dos números ${num1} e ${num2} é ${soma}. <br>
A subtração dos números ${num1} e ${num2} é ${subtracao}. <br> 
A multiplicação dos números ${num1} e ${num2} é ${multiplicacao}. <br> 
A divisão dos números ${num1} e ${num2} é ${divisao}. <br> 
A média dos números ${num1} e ${num2} é ${media}. <br> `;

console.log (`Os números digitados foram ${num1} e ${num2}. 
A soma dos números ${num1} e ${num2} é ${soma}. 
A subtração dos números ${num1} e ${num2} é ${subtracao}. 
A multiplicação dos números ${num1} e ${num2} é ${multiplicacao}. 
A divisão dos números ${num1} e ${num2} é ${divisao}.  
A média dos números ${num1} e ${num2} é ${media}. `)