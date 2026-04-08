let valor = 5.3
let resultado = document.getElementById("resultado")

resultado.innerHTML = `O valor digitado foi  ${valor} <br>`

// potencia 
let pot = Math.pow(valor,2)

resultado.innerHTML += `O valor elevado ao quadrado é ${pot} <br><br>`

//raiz quadrada
valor = 4 
let raizq = Math.sqrt(valor)

resultado.innerHTML += `O valor digitado foi  ${valor} <br>`
resultado.innerHTML += `O valor da raiz quadrada é ${raizq} <br><br>`

//raiz cubica
valor = 27 
let raizc = Math.cbrt(valor)

resultado.innerHTML += `O valor digitado foi  ${valor} <br>`
resultado.innerHTML += `O valor da raiz cubica é ${raizc} <br><br>`


//raiz >3
valor = 123 
let raizset = Math.pow(valor, 1/7)

resultado.innerHTML += `O valor digitado foi  ${valor} <br>`
resultado.innerHTML += `O valor da raiz setima é ${raizset} <br> <br>`


//PI
let pi = Math.PI

resultado.innerHTML += `O valor de PI é  ${pi} <br>`

//casa decimal (3)
resultado.innerHTML += `O valor de PI é  ${pi.toFixed(3)} <br><br>`

//arrendodar valor pra cima
valor = 5.6789
let valorcima = Math.ceil(valor)

resultado.innerHTML += `O valor digitado foi  ${valor} <br>`
resultado.innerHTML += `O valor arrendodado para cima é ${valorcima}<br><br>`

//arrendodar valor pra cima
valor = 5.993
let valorbaixo = Math.floor(valor)

resultado.innerHTML += `O valor digitado foi  ${valor} <br>`
resultado.innerHTML += `O valor arrendodado para baixo é ${valorbaixo} <br><br>`

//arrendodar 
valor = 5.4
let valorarrendodado = Math.round(valor)

resultado.innerHTML += `O valor digitado foi  ${valor} <br>`
resultado.innerHTML += `O valor arrendodado é ${valorarrendodado} <br><br>`

//maior 
let maior = Math.max(5, 10, 3, 8, -5, 14, 22)

resultado.innerHTML += `Sequência: 5, 10, 3, 8, -5, 14, 22 <br>`
resultado.innerHTML += `O maior valor é ${maior}<br><br>`

//menor 
let menor = Math.min(5, 10, 3, 8, -5, 14, 22)

resultado.innerHTML += `Sequência: 5, 10, 3, 8, -5, 14, 22 <br>`
resultado.innerHTML += `O maior valor é ${menor}<br><br>`

//aleatorio 
let aleatorio = Math.random()
resultado.innerHTML += `Número aleatório: ${Math.floor(aleatorio * 1000)}`



