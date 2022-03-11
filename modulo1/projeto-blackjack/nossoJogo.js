/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
  const usuario = {
    cartas: [],
    pontos: 0
  }
  const computador = {
    cartas: [],
    pontos: 0
  }

  for(let i = 0; i < 2; i++) {
    const cartaUsuario = comprarCarta()
    usuario.cartas.push(cartaUsuario.texto)
    usuario.pontos += cartaUsuario.valor

    const cartaComputador = comprarCarta()
    computador.cartas.push(cartaComputador.texto)
    computador.pontos += cartaComputador.valor
  }

  console.log(`Usuário: ${usuario.cartas.map(carta => "["+carta+"]")} - ${usuario.pontos}`)
  console.log(`Computador: ${computador.cartas.map(carta => "["+carta+"]")} - ${computador.pontos}`)

  if(usuario.pontos > computador.pontos) console.log("O usuário ganhou!")
  else if(usuario.pontos < computador.pontos) console.log("O computador ganhou!")
  else console.log("Empate!")

} 
else {
  console.log("O jogo acabou")
}
