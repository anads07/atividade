let lado = parseFloat(prompt("Digite a medida do lado do quadrado:"))
let area = lado * lado;
let perimetro = lado * 4;


document.getElementById('resultado').innerHTML = `A área do quadrado é ${area} e o perímetro é ${perimetro}`;

console.log ( `A área do quadrado é ${area} e o perímetro é ${perimetro}`)