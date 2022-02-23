// Exercícios de interpretação de código

// 1
// a
// Matheus Nachtergaele
// Virginia Cavendish
// {canal: "Globo", horario: "14h"}

// 2
// a
// {nome: "Juca", idade: 3, raca: "SRD"}
// {nome: "Juba", idade: 3, raca: "SRD"}
// {nome: "Jubo", idade: 3, raca: "SRD"}
// b
// "espalha"/copia as propriedades daquele objeto dentro de outro objeto

// 3
// a
// false
// undefined
// b
// a função recebe um objeto e o nome de uma propriedade
// acessa o valor daquela propriedade dentro do objeto
// usando a notação de colchetes
// objeto["propriedade"]

// Exercícios de escrita de código

// 1
const imprimeMensagem = pessoa => `Eu sou ${pessoa["nome"]}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`
const pessoa = {
    nome: "Daniel", 
    apelidos: ["Dranel", "DN", "Dan"]
}
console.log(imprimeMensagem(pessoa))

// 2
const imprimeArray = usuario => [usuario.nome, usuario.nome.length, usuario.idade, usuario.profissao, usuario.profissao.length]
const usuario1 = {
	nome: "Joe Rogan", 
    idade: 54,    
	profissao: "Podcaster"
}
const usuario2 = {
	"nome": "Neil deGrasse", 
    idade: 63,
	profissao: "Astrophysicist"
}
console.log(imprimeArray(usuario1))
console.log(imprimeArray(usuario2))

// 3
const carrinho = []
const colocarFrutaCarrinho = fruta => fruta.disponibilidade && carrinho.push(fruta)
const fruta = {
    nome: "banana",
    disponibilidade: true
}
colocarFrutaCarrinho(fruta)
colocarFrutaCarrinho({...fruta, nome: "mamão", disponibilidade: true})
colocarFrutaCarrinho({nome: "pera", disponibilidade: true})
console.log(carrinho)

// const carrinho = {
//     frutas: [],
//     colocarFruta: (fruta) => fruta.disponibilidade && carrinho.frutas.push(fruta),
//     verCarrinho() {console.log(carrinho.frutas)}
// }
// carrinho.colocarFruta({nome: "pera", disponibilidade: true})
// carrinho.colocarFruta({nome: "amora", disponibilidade: true})
// carrinho.verCarrinho()

// Desafions

// 1
const nome = "Daniel"
const idade = 22
const profissao = "ACS"
const pessoaDesafio = {
    nome,
    idade,
    profissao
}
console.log(pessoaDesafio, typeof pessoaDesafio)

// 2
const compararFilmes = (filme1, filme2) => {
    console.log("O primeiro filme foi lançado antes do segundo?", filme1.anoLancamento < filme2.anoLancamento)
    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", filme1.anoLancamento === filme2.anoLancamento) 
}
const filme1 = {
    nome: "Mil São Impossível",
    anoLancamento: 1915
}
const filme2 = {
    nome: "Vê Lousa e Furiosos",
    anoLancamento: 1945
}
compararFilmes(filme1, filme2)

// 3
const controleEstoque = fruta => !fruta.disponibilidade
console.log(fruta.disponibilidade + " -> " + controleEstoque(fruta))
