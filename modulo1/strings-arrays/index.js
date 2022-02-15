// Exercícios de interpretação de código

// 1. 
// let array
// console.log('a. ', array)
// a. undefined

// array = null
// console.log('b. ', array)
// b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// c. 11

// let i = 0
// console.log('d. ', array[i])
// d. 3

// array[i+1] = 19
// console.log('e. ', array)
// e. [3,    19   , 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor)
// f. 9

// 2.
// const frase = prompt("Digite uma frase")
// Subi num ônibus em Marrocos
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// SUBI NUM ÔNIBUS EM MIRROCOS 27

// Exercícios de escrita de código

// 1.
const nome = prompt("Digite seu nome").trim()
const email = prompt("Digite seu e-mail").trim()
console.log(email.includes("@") && `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!` || "e-mail invalido")

// 2.
const comidas = ["estrogonofe", "hamburguer", "galinha ensopada", "lasanha", "batata frita"]
// a.
console.log(comidas)
// b.
console.log(`Essas são as minhas comidas preferidas: 
${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}
`)
// c.
const comidaUsuario = prompt("Digite sua comida prefereida").trim().toUpperCase()
comidas[1] = comidaUsuario
console.log(`Essas são as minhas comidas preferidas: 
${comidas[0]}
${comidas[1]} // usuario
${comidas[2]}
${comidas[3]}
${comidas[4]}
`)

// 3.
// a.
const listaDeTarefas = []
// b
listaDeTarefas.push(prompt("Tarefa 1").trim())
listaDeTarefas.push(prompt("Tarefa 2").trim())
listaDeTarefas.push(prompt("Tarefa 3").trim())
// c.
console.log(listaDeTarefas)
// d.
const indiceTarefa = prompt(`Digite o indice da tarefa que deseja remover
${listaDeTarefas[0]} - indice 0
${listaDeTarefas[1]} - indice 1
${listaDeTarefas[2]} - indice 2
`).trim()
// e.
const tarefaRemovida = listaDeTarefas.splice(indiceTarefa, 1)
console.log(`Tarefa '${tarefaRemovida[0]}' removida com sucesso`)
// f.
console.log(listaDeTarefas)

// Desafio
// 1.
const frase = "We all acquire language the same way. we all digest food the same no significant individual variation"
console.log(frase.split(" "))

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let fruta = "Abacaxi"
// let fruta = prompt("Qual fruta deseja pesquisar?").trim
console.log(`${frutas[frutas.indexOf(fruta)]} está no indice ${frutas.indexOf(fruta)}`)