let nome = prompt("Digite seu nome: ")
let sobrenome = prompt("Digite seu sobrenome: ")
let idade = prompt("Digite sua idade: ")

document.getElementById('informações').innerHTML = nome + " " + sobrenome + ", " + idade + " anos."
console.log(nome + " " + sobrenome + ", " + idade + " anos.")
alert(nome + " " + sobrenome + ", " + idade + " anos.")
