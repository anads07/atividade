let raio1 = parseInt(prompt("Digite a medida do raio da circunferência maior: "));
let raio2 = parseInt(prompt("Digite a medida do raio da circunferência menor: "));
let areamenor = Math.PI.toFixed(2) * raio1 * 2;
let areamaior = Math.PI.toFixed(2) * raio2 * 2;
let resultado = document.getElementById("resultado");

resultado.innerHTML += `A  area da coroa circular é ${areamaior - areamenor}`
console.log(`A  area da coroa circular é ${areamaior - areamenor}`)