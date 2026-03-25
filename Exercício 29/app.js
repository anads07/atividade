let preco = parseFloat(prompt("Preço do livro:"));

let desconto = preco * 0.10;
let total = preco - desconto;

document.getElementById('resultado').innerHTML = `O valor do livro com desconto de 10% é: R$${total}`;
console.log(`O valor do livro com desconto de 10% é: R$${total}`);