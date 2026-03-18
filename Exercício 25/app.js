let balas = parseInt(prompt("Digite a quantidade de balas:"))
let amigos = parseInt(prompt("Digite em quantos amigos será divido:"))
let valor = Math.floor(balas / amigos) 
let sobras = balas % amigos

if (sobras > 0) {
    document.getElementById('resultado').innerHTML = `Cada amigo irá receber ${valor} bala(s) e tem mais ${sobras} bala(s) sobrando`;
    console.log(`Cada amigo irá receber ${valor} bala(s) e tem mais ${sobras} bala(s) sobrando`)
} else {
    document.getElementById('resultado').innerHTML = `Cada amigo irá receber ${valor} bala(s)`;
    console.log(`Cada amigo irá receber ${valor} bala(s)`) 
}