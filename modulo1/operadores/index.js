// Exercícios de interpretação de código

// 1.
// true && false = false
// true && false && true = false
// true && (true || false) = true && true = true
// bolean

// 2.
// como o prompt retorna uma string, em vez de somar os dois numeros, vai ser feito a concatenação deles
// exemplo: assim como "La" + "benu" = "Labenu", 3" + "5" = "35"

// 3.
// a função Number() resolveria esse problema da questão 2
// exemplo: 
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))
// ou
// const soma = Number(primeiroNumero) + Number(segundoNumero)

// Exercícios de escrita de código

// 1.
// let idadeUsuario = Number(prompt("Qual sua idade?")) // a
// let idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo ou amiga?")) // b
// console.log("Sua idade é maior do que seu melhor amigo?", idadeUsuario > idadeMelhorAmigo) // c
// console.log("Diferença de idade entre você e seu melhor amigo:", idadeUsuario - idadeMelhorAmigo) // d

// 2.
// let numero = Number(prompt("Digite um número par")) // a
// console.log(`Resto da divisão de ${numero} por 2: ${numero % 2}`) // b
// c) O resto da divisão de qualquer número PAR por 2 sempre resulta em 0
// b) O resto da divisão de qualquer número IMPAR por 2 sempre resulta em 1

// 3.
// let idade = Number(prompt("Digite sua idade em anos"))
// console.log("Idade em meses:", idade * 12) // a
// console.log("Idade em dias:", idade * 365) // b
// console.log("Idade em horas:", idade * 365 * 24) // c

// 4.
// let num1 = Number(prompt("Numero 1"))
// let num2 = Number(prompt("Numero 2"))
// console.log("O primeiro numero é maior que segundo?", num1 > num2) 
// console.log("O primeiro numero é igual ao segundo?", num1 === num2) 
// console.log("O primeiro numero é divisível pelo segundo?", (num1 % num2) === 0) 
// console.log("O segundo numero é divisível pelo primeiro?", (num2 % num1) === 0) 
