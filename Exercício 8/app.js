let texto = "feliz ano novo!"
for (var i = 1; i <= 3; i++) {
    console.log(texto);
    document.getElementById('mensagem').innerHTML += texto + '<br>';
}
alert(texto)