// Exercícios de interpretação de código

// 1. 
// console.log(b) -> 10
// console.log(a, b) -> 10, 5

// 2.
// console.log(a, b, c) -> 10, 10, 10

// 3.
// let horasTrabalhadasDia
// let recebeDia
// alert(`Voce recebe ${Number(recebeDia)/Number(horasTrabalhadasDia)} por hora`)

// Exercícios de escrita de código

// 1.
let nome
let idade
console.log(typeof nome, typeof idade)
// foi impresso undefined pois não foi atribuido nenhum valor as variáveis ao declara-las
nome = prompt("Qual seu nome?")
idade = Number(prompt("Qual sua idade?"))
console.log(typeof nome, typeof idade)
// agora o tipo das variáveis foi string e number, pois a variável nome recebeu uma string e a variavel idade recebeu uma string convertida em um numero
console.log("Olá", nome, ", você tem", idade, "anos.")

// 2.
let pergunta1 = "Você meditou hoje?"
let pergunta2 = "Você leu hoje?"
let pergunta3 = "Você correu hoje?"

let meditou = prompt(pergunta1)
let leu = prompt(pergunta2)
let correu = prompt(pergunta3)

console.log(pergunta1, "-", meditou)
console.log(pergunta2, "-", leu)
console.log(pergunta3, "-", correu)

// 3.
let a = 10
let b = 25

let c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

// Desafio
let num1 = Number(prompt("Digite o primeiro número"))
let num2 = Number(prompt("Digite o segundo número"))
console.log(`1. ${num1} somado a ${num2} resulta em: ${num1 + num2}`)
console.log(`2. ${num1} multiplicado por ${num2} resulta em: ${num1 * num2}`)