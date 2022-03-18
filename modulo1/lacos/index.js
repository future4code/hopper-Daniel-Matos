/*
Exercícios de interpretação de código
1. 10

2.
a) 21, 23, 25, 27, 30
b) 
Não. O for...of... é usado para acessar o valor de cada item do array
Uma alternativa seria usar for(let i = 0; 1 < array.length; i++) {}
Ou for...in... que percorre o indice do array 

3. 
*
**
***
****

*/

// Exercícios de escrita de código
// 1.
const bichinhos = 4 // prompt

if (bichinhos > 0) {
  const nomesBichinhos = []
  for (let i = 0; i < bichinhos; i++) {
    nomesBichinhos.push("Suzi") // prompt
  }
  console.log(nomesBichinhos)
}
else console.log("Que pena! Você pode adotar um pet!")

// 2
// a)
const imprimirItensArray = (arrayOriginal) => {
  for (let numero of arrayOriginal) console.log(numero)
}  
// b)
const imprimirDivisaoItensArray = (arrayOriginal) => {
  for (let numero of arrayOriginal) console.log(numero / 10)
}
// c)
const imprimirParesArray = (arrayOriginal) => {
  const arrayPares = []
  for (let numero of arrayOriginal) {
    if (numero % 2 === 0) arrayPares.push(numero)
  }
  console.log(arrayPares)
}
// d)
const imprimirFrasesArray = (arrayOriginal) => {
  const arrayFrase = []
  for (let i = 0; i < arrayOriginal.length; i++) {
    arrayFrase.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
  }
  console.log(arrayFrase)
}
// e)
const imprimirMaiorMenorNumArray = (arrayOriginal) => {
  let maiorNum = 0
  let menorNum = Infinity
  for (let i = 0; i < arrayOriginal.length; i++) {
    let numero = arrayOriginal[i]
    if (numero > maiorNum) maiorNum = numero
    if (numero < menorNum) menorNum = numero
  }
  console.log(`O maior número é ${maiorNum} e o menor é ${menorNum}`)
}

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

imprimirItensArray(arrayOriginal)
imprimirDivisaoItensArray(arrayOriginal)
imprimirParesArray(arrayOriginal)
imprimirFrasesArray(arrayOriginal)
imprimirMaiorMenorNumArray(arrayOriginal)
