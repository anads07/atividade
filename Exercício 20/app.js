let amigos = parseInt(prompt("Digite quantos amigos você convidou"))
let presentes = amigos * 2;

document.getElementById('resultado').innerHTML = `Você convidou ${amigos} amigos e reberá ${presentes} presentes`;

console.log ( `Você convidou ${amigos} amigos e reberá ${presentes} presentes`)