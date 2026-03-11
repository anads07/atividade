let num1 = parseFloat(prompt("Digite um número:"))
let num2 = parseInt(prompt("Digite outro número:"))
let num3 = parseInt(prompt("Digite outro número:"))
let num4 = parseInt(prompt("Digite outro número:"))
let num5 = parseInt(prompt("Digite outro número:"))
let soma = num1 + num2 + num3 + num4 + num5;



document.getElementById('resultado').innerHTML = `Os números digitados foram ${num1}, ${num2}, ${num3}, ${num4}, ${num5} e a soma deles é ${soma}.`;

console.log (`Os números digitados foram ${num1}, ${num2}, ${num3}, ${num4}, ${num5} e a soma deles é ${soma}. <br> `)