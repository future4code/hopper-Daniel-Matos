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
  const getHigherNumber = (num1, num2) => num1 > num2 ? num1 : num2 // num1 > num2 && num 1 || num 2
  const getSmallestNumber = (num1, num2) => num2 < num1 ? num2 : num1
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
  const atores = filme.atores.reduce((acc, cur) => acc+", "+cur)
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, `
  +`dirigido por ${filme.diretor} e estrelado por ${atores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return {...pessoa, nome: "ANÔNIMO"}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter(pessoa => pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60)
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  return pessoas.filter(pessoa => pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60)
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  return contas.map(cliente => {
    const comprasTotais = cliente.compras.reduce((acc, cur) => acc + cur, 0)
    const saldoTotal = cliente.saldoTotal - comprasTotais
    return {...cliente, saldoTotal, compras: []}
  })
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  const compare = (paciente1, paciente2) => {
    if (paciente1.nome < paciente2.nome) return -1;
    if (paciente1.nome > paciente2.nome) return 1;
    return 0;
  }
  return consultas.sort(compare)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  const compare = (paciente1, paciente2) => {
    let data1 = paciente1.dataDaConsulta.split("/")
    let data2 = paciente2.dataDaConsulta.split("/")
    data1 = new Date(data1[2], data1[1]-1, data1[0])
    data2 = new Date(data2[2], data2[1]-1, data2[0])

    if (data1 < data2) return -1;
    if (data1 > data2) return 1;
    return 0;
  }
  return consultas.sort(compare)
}