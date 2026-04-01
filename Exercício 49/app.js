let nota1 = parseFloat(prompt("Digite o valor da primeira nota:"));
let nota2 = parseFloat(prompt("Digite o valor da segunda nota:"));
let nota3 = parseFloat(prompt("Digite o valor da terceira nota:"));
let nota4 = parseFloat(prompt("Digite o valor da quarta nota:"));
let nota5 = parseFloat(prompt("Digite o valor da quinta nota:"));
let resultado = document.getElementById("resultado")

resultado.innerHTML = `A nota 1 foi ${nota1} <br>`
resultado.innerHTML += `A nota 2 foi ${nota2} <br>`
resultado.innerHTML += `A nota 3 foi ${nota3} <br>`
resultado.innerHTML += `A nota 4 foi ${nota4} <br>`
resultado.innerHTML += `A nota 5 foi ${nota5} <br>`
resultado.innerHTML += `A média das notas é: ${(nota1 + nota2 + nota3 + nota4 + nota5) / 5}`

console.log (`A nota 1 foi ${nota1} <br>
A nota 2 foi ${nota2} 
A nota 3 foi ${nota3} 
A nota 4 foi ${nota4} 
A nota 5 foi ${nota5} 
A média das notas é: ${(nota1 + nota2 + nota3 + nota4 + nota5) / 5}`)