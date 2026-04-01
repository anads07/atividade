// let n1 = prompt("Digite um número:");

// //verificar se o número é par
// let resposta = (n1 % 2 == 0)? "PAR" :  "IMPAR"

// //primeiro jeito de fazer
// document.getElementById("resultado").innerHTML = resposta 

// //segundo jeito de fazer
// console.log((n1 % 2 == 0)? "PAR" :  "IMPAR")

// //terceiro jeito de fazer
// // document.getElementById("resultado").innerHTML = (n1 % 2 == 0)? "PAR" :  "IMPAR"


// --------------------------------------------------------

let dia = prompt("Digite o dia da semana (0-6): ")

if (dia == 0){
    console.log("Domingo")
}else if (dia == 1) {
    console.log("Segunda")
} else if (dia == 2) {
    console.log("Terça")
}else if (dia == 3) {
    console.log("Quarta")
}else if (dia == 4) {
    console.log("Quinta")
}else if (dia == 5) {
    console.log("Sexta")
}else if (dia == 6) {
    console.log("Sabado")
}