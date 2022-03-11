console.log("Boas vindas ao jogo de Blackjack!")

// if(confirm("Quer iniciar uma nova rodada?")) {
if(true){
  const usuario = {
    cartas: [],
    pontos: 0,
    addCarta: function({novaCarta}) {
      this.cartas = [...this.cartas, novaCarta.texto] // usando o metodo push(), todos os obj copiados usando o spread também tem a propriedade alterada
      this.pontos += novaCarta.valor
    }
  }
  const computador = {...usuario}

  for(let i = 0; i < 2; i++) {
    usuario.addCarta(comprarCarta())
    computador.addCarta(comprarCarta())
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
