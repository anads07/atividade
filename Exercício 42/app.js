let idade = parseInt(prompt("Digite a sua idade: "));
let resultado = document.getElementById("resultado");


resultado.innerHTML += `A sua idade em dias é ${idade * 365} dias`
console.log(`A sua idade em dias é ${idade * 365} dias`)