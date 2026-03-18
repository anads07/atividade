let mesada = parseInt(prompt("Digite o valor da sua mesada:"))
let economia = parseInt(prompt("Digite quanto você deseja economizar:"))
let valor = mesada - economia

document.getElementById('resultado').innerHTML = `O valor que restará da sua mesada será R$${valor}`;
console.log(`O valor que restará da sua mesada será R$${valor}`)