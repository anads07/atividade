let resultado = document.getElementById("resultado");
let nota1 = parseInt(prompt("Digite a primeira nota:"));
let nota2 = parseInt(prompt("Digite a segunda nota:"));
let nota3 = parseInt(prompt("Digite a terceira nota:"));
let nota4 = parseInt(prompt("Digite a quarta nota:"));

let media = ((nota1) + (nota2 * 2) + (nota3 * 3) + ( nota4 * 4))/ 10 

resultado.innerHTML += `A média ponderadas das notas é ${media.toFixed(2)}`
console.log(`A média ponderadas das notas é ${media.toFixed(2)}`)
