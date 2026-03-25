let raio = parseInt(prompt("Digite a medida do raio da base: "));
let altura = parseInt(prompt("Digite a medida da altura do cilindro: "));
let arebase = Math.PI.toFixed(2) * raio * 2;
let resultado = document.getElementById("resultado");

resultado.innerHTML += `O volume do cilindro ${arebase * altura}`
console.log(`O volume do cilindro ${arebase * altura}`)