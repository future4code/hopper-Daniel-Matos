/*

1.
a)
Recebe um número do usuário e verifica, através do if, se esse número é par
b)
Números que divididos por 2 o resto é 0, ou seja, números pares
c)
Números que divididos por 2 o resto é 1, ou seja, números impares

2.
a)
Verifica o preço de uma fruta
b)
O preço da fruta Maçã é R$ 2.25
c)
O preço da fruta Pêra é R$ 5
Abaixo uma observação retirada da documentação (www.w3schools.com/js/js_switch.asp)
"Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case."

3.
a)
Recebe um número através do prompt e converte o mesmo para Number
b)
10 -> "Esse número passou no teste"
-10 -> bloco do if não é executado 
c)
O último console retornará um erro
Pois a variável “mensagem" foi declarada com let dentro do if, não sendo acessível fora desse bloco

*/

const pergunta = (pergunta, tipoEsperado = "s") => {
    // Tipo esperado -> Number = n, String = s, Boolean = b
    if (tipoEsperado.toLowerCase() === "s") return prompt(pergunta).trim().toLowerCase()
    else if (tipoEsperado.toLowerCase() === "n") return Number(prompt(pergunta).trim().toLowerCase())
    else if (tipoEsperado.toLowerCase() === "b") return confirm(pergunta)
}

// 1.
const idade = pergunta("Qual sua idade?", "n")

if (idade >= 18) console.log("Você pode dirigir")
else console.log("Você NÃO pode dirigir")

// 2.
const turno = pergunta("Qual turno você estuda?")

if (turno === "m") console.log("Bom dia")
else if (turno === "t") console.log("Boa tarde")
else if (turno === "n") console.log("Boa noite")
else console.log("Turno não encontrado")

// 3.
switch(turno) {
    case "m":
        console.log("Bom dia")
        break
    case "t":
        console.log("Boa tarde")
        break
    case "n":
        console.log("Boa noite")
        break
    default:
        console.log("Turno não encontrado")
}

// 4.
const generoFilme = pergunta("O genero do filme é fantasia?", "b");
const valorIngresso = pergunta("Qual o valor do ingresso?", "n");

if (generoFilme && valorIngresso < 15) console.log("Bom filme!")
else console.log("Escolha outro filme :(")
