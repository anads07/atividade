let x = parseInt(prompt("Flores plantadas no 1º dia:"));

let d1 = x;
let d2 = x * 2;
let d3 = x * 3;
let d4 = x * 4;
let d5 = x * 5;

let total = d1 + d2 + d3 + d4 + d5;

document.getElementById("resultado").innerHTML = `
Dia 1: foram plantadas ${d1} flores <br>
Dia 2: foram plantadas ${d2} flores <br>
Dia 3: foram plantadas ${d3} flores <br>
Dia 4: foram plantadas ${d4} flores <br>
Dia 5: foram plantadas ${d5} flores <br><br>
Total de flores plantadas: ${total}
`;

console.log(`Dia 1: foram plantadas ${d1} flores
Dia 2: foram plantadas ${d2} flores 
Dia 3: foram plantadas ${d3} flores 
Dia 4: foram plantadas ${d4} flores 
Dia 5: foram plantadas ${d5} flores 
Total de flores plantadas: ${total}`);



