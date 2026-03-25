let conta = parseFloat(prompt("Valor da conta:"));
let gorjeta = parseFloat(prompt("Percentual da gorjeta (%):"));

let total = conta + (conta * gorjeta / 100);


document.getElementById('resultado').innerHTML = "o total a pagar: R$ " + total;
console.log("o total a pagar: R$ " + total);