let num1 = parseInt(prompt("Digite um número:"))
let var1 = num1 - 1;
let var2 = num1 + 1;


document.getElementById('resultado').innerHTML = `O número digitado foi ${num1}, seu antecesor é ${var1} e seu sucessor é ${var2}. `;

console.log ( `O número digitado foi ${num1}, seu antecesor é ${var1} e seu sucessor é ${var2}. `)