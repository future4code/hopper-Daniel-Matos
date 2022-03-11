/*
Exercícios de interpretação de código

1.
{ nome: "Amanda Rangel", apelido: "Mandi" }
0
[
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

{ nome: "Laís Petra", apelido: "Laura" },
1
[
  { nome: "Amanda Rangel", apelido: "Mandi" }
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

{ nome: "Letícia Chijo", apelido: "Chijo" }
2
[
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]


2.
[ "Amanda Rangel", "Laís Petra", "Letícia Chijo" ]


3.
[
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" }
]
*/

// Exercícios de escrita de código
// 1.
const pets = [
  { nome: "Lupin", raca: "Salsicha"},
  { nome: "Polly", raca: "Lhasa Apso"},
  { nome: "Madame", raca: "Poodle"},
  { nome: "Quentinho", raca: "Salsicha"},
  { nome: "Fluffy", raca: "Poodle"},
  { nome: "Caramelo", raca: "Vira-lata"},
]
// a)
const petsNome = pets.map(pet => pet.nome)
console.log(petsNome)
// b)
const petsSalsicha = pets.filter(pet => pet.raca === "Salsicha")
console.log(petsSalsicha)
// c)
const petsDescontoPoodles = pets
.filter(pet => pet.raca === "Poodle")
.map(petPoodle => `Você ganhou um cupom de desconto de 10% para tosar o/a ${petPoodle.nome}!`)
console.log(petsDescontoPoodles)

// 2.
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 100 }
]
// a)
const produtosNomes = produtos.map(produto => produto.nome)
console.log(produtosNomes)
// b)
const aplicarDesconto = (produtos, desconto) => {
  desconto = (100 - desconto) / 100

  return produtos.map(produto => {
    return {
      nome: produto.nome,
      preco: Number((produto.preco * desconto).toFixed(2)) // https://www.w3schools.com/jsref/jsref_tofixed.asp
    }
  })
}
const produtosDesconto = aplicarDesconto(produtos, 5)
console.log(produtosDesconto)
// c)
const produtosBebidas = produtos.filter(produto => produto.categoria === "Bebidas")
console.log(produtosBebidas)
// d)
const produtosYpe = produtos.filter(produto => produto.nome.includes("Ypê"))
console.log(produtosYpe)
// e)
const produtosYpeFrase = produtosYpe.map(produto => `Compre ${produto.nome} por ${produto.preco}`)
console.log(produtosYpeFrase)

// Desafios