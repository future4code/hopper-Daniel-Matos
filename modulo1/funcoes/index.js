// Exercícios de interpretação de código
// 1
// a
// 2 * 5 -> 10
// b
// A função vai ser invocada e retornara algum valor,
// porem esse valor não será guardado em nenhuma variavel 
// ou impresso no console

// 2
// a
// a função outraFuncao recebe um texto como parametro e retorna um boolean
// ela serva para verificar se o texto recebido tem a palavra 'cenoura'
// é usado o toLowerCase() já que o JS é case sensitive e o includes() para verificar se existe determinada palavra no texto
// b
// i. true
// ii. true
// iii. true

// Exercícios de escrita de código
// 1
// a
const mensagem = _ => console.log("Eu sou Daniel, tenho 22 anos, moro em Ibiraçu e sou estudante.")
mensagem()
// b
const unificarMensagem = (nome, idade, cidade, profissao) => `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
const nome = "Daniel"
const idade = 22
const cidade = "Ibiraçu"
const profissao = "ACS"
console.log(unificarMensagem(nome, idade, cidade, profissao))

// 2
// a
const soma = (num1, num2) => num1 + num2
console.log(soma(3, 7))
// b
const compararNumeros = (num1, num2) => num1 >= num2
console.log(compararNumeros(0, 1))
// c
const numeroPar = num => num % 2 === 0
console.log(numeroPar(420))
// b
const tamanhoMensagem = msg => [msg.length, msg.toUpperCase()]
const frase = "The universe is not required to be in perfect harmony with human ambition"
console.log(tamanhoMensagem(frase)[0], tamanhoMensagem(frase)[1])

// 3
const operacoesBasicas = (num1, num2, tipoOperacao) =>{
    const soma = tipoOperacao.toLowerCase().trim() === "soma"
    const subtracao = tipoOperacao.toLowerCase().trim() === "subtração"
    const multiplicacao = tipoOperacao.toLowerCase().trim() === "multiplicação"
    const divisao = tipoOperacao.toLowerCase().trim() === "divisão"

    return (
        (soma && num1 + num2) || 
        (subtracao && num1 - num2) || 
        (multiplicacao && num1 * num2) || 
        (divisao && num1 / num2)
    ) 
}

const num1 = Number(prompt("Número 1"))
const num2 = Number(prompt("Número 1"))

console.log(`Números inseridos: ${num1} e ${num2}
Soma: ${operacoesBasicas(num1, num2, "Soma")}
Subtração: ${operacoesBasicas(num1, num2, "Subtração")}
Multiplicação: ${operacoesBasicas(num1, num2, "Multiplicação")}
Divisão: ${operacoesBasicas(num1, num2, "Divisão")}
`)

// Desafios
// 1
// a
const imprimirParametro = parametro => console.log(parametro)
// b
const somaParametros = (parametro1, parametro2) => imprimirParametro(parametro1 + parametro2)
somaParametros(4, 21)

// 2
const calculoHipotenusa = (cateto1, cateto2) => Math.sqrt((cateto1 * cateto1) + (cateto2 * cateto2))
console.log(calculoHipotenusa(40, 25))
