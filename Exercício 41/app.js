let raio = parseInt(prompt("Digite a medida do raio da esfera: "));
let resultado = document.getElementById("resultado");


resultado.innerHTML += `A area da esfera é ${Math.PI.toFixed(2) * Math.pow(raio, 2) * 4} e o volume ${(Math.PI.toFixed(2) * Math.pow(raio, 3) * 4) / 3}`
console.log(`A area da esfera é ${Math.PI.toFixed(2) * Math.pow(raio, 2) * 4} e o volume ${(Math.PI.toFixed(2) * Math.pow(raio, 3) * 4) / 3}`)