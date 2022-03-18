// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.map((item, indice) => array[(array.length - 1) - indice])
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter(item => item % 2 === 0)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  return array.filter(numPar => numPar % 2 === 0).map(numQuadrado => numQuadrado ** 2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return array.sort((a, b) => a - b)[array.length - 1]
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const getHigherNumber = (num1, num2) => num1 > num2 && num1 || num2
  const getSmallestNumber = (num1, num2) => num2 < num1 && num2 || num1
  return {
    maiorNumero: getHigherNumber(num1, num2),
    maiorDivisivelPorMenor: getHigherNumber(num1, num2) % getSmallestNumber(num1, num2) === 0,
    diferenca: getHigherNumber(num1, num2) - getSmallestNumber(num1, num2)
  }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let pairNumbers = [0]
  for(let i = 0; i < n-1; i++) pairNumbers.push(pairNumbers[i] + 2)
  return pairNumbers
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoA === ladoC) return "Equilátero"
  else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) return "Isósceles"
  else return "Escaleno"
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  return [
    array.sort((a, b) => a-b)[array.length-2], 
    array.sort((a, b) => a-b)[1]
  ]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  const imprimirAtores = listaAtores => {
    let atores = ""
    for(let i = 0; i < listaAtores.length; i++) {
      if(i === listaAtores.length - 1) atores += listaAtores[i]
      else atores += listaAtores[i]+", "
    }
    return atores
  }
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, `
  +`dirigido por ${filme.diretor} e estrelado por ${imprimirAtores(filme.atores)}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return {...pessoa, nome: "ANÔNIMO"}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}