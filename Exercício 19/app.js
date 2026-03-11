let lado1 = parseFloat(prompt("Digite a medida do lado menor do retângulo:"))
let lado2 = parseFloat(prompt("Digite a medida do lado maior do retângulo:"))
let area = lado1 * lado2;
let perimetro = (lado1 * 2) + (lado2 * 2);


document.getElementById('resultado').innerHTML = `A área do retângulo é ${area} e o perímetro é ${perimetro}`;

console.log ( `A área do retângulo é ${area} e o perímetro é ${perimetro}`)