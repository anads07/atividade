let peso = parseFloat(prompt("Digite o seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua alura em m :"));

let resultado = document.getElementById("resultado")

if (peso != 0 && altura != 0) {
    let imc = peso / Math.pow(altura,2)
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}kg/m²`
    console.log (`Seu IMC é ${imc.toFixed(2)}kg/m²`)
} else {
    resultado.innerHTML = `Digite um valor diferente de zero`
    console.log (`Digite um valor diferente de zero`)
}