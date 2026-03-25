let raio = parseInt(prompt("Digite o raio do circulo: "));
let resultado = document.getElementById("resultado");

resultado.innerHTML += `O perímetro do circulo é ${Math.PI.toFixed(2) * Math.pow(raio, 2)} e sua área é ${Math.PI.toFixed(2) * raio * 2}`
console.log(`O perímetro do circulo é ${Math.PI.toFixed(2) * Math.pow(raio, 2)} e sua área é ${Math.PI.toFixed(2) * raio * 2}`)