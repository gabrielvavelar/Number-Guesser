let numeroAleatorio

function geraNumeroAleatorio() {
    numeroAleatorio = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    console.log(numeroAleatorio)
}

function verificaNumeroDigitado() {
    numeroDigitado = Number(document.getElementById("numeroDigitado").value)

    if (/^\d{4}$/.test(numeroDigitado)) { // Expressão regular que verifica se o número possui exatamente 4 digitos
        const limiteProximidade = 100
        if(numeroDigitado > numeroAleatorio) {
            if(numeroAleatorio + limiteProximidade >= numeroDigitado) {
                document.getElementById("resultado").innerHTML = "O número digitado é um pouco maior do que o número sorteado!"
            }
            else {
                document.getElementById("resultado").innerHTML = "O número digitado é muito maior do que o número sorteado!"
            }    
        }
        else if(numeroDigitado < numeroAleatorio) {
            if(numeroAleatorio - limiteProximidade <= numeroDigitado) {
                document.getElementById("resultado").innerHTML = "O número digitado é um pouco menor do que o número sorteado!"
            }
            else {
                document.getElementById("resultado").innerHTML = "O número digitado é muito menor do que o número sorteado!"
            }
        }
        else {
            document.getElementById("resultado").innerHTML = "Parabéns! Você acertou o número sorteado!"
        }
    }
    else {
        document.getElementById("resultado").innerHTML = "Por favor, insira um número com exatamente quatro dígitos."
    }
}