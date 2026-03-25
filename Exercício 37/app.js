let base1 = parseInt(prompt("Digite a area da base triangular: "));
let base2 = parseInt(prompt("Digite a medida da base maior "));
let altura = parseInt(prompt("Digite a altura do trapézio: "));
let resultado = document.getElementById("resultado");

resultado.innerHTML += `O area do trapézio é: ${(base1 + base2) * altura / 2}`
console.log(`O area do trapézio é: ${(base1 + base2) * altura / 2}`)