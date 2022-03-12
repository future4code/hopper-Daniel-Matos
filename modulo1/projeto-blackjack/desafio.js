console.log("Boas vindas ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {
  const usuario = {
    cartas: [],
    pontos: 0,
    addCarta: function (novaCarta) {
      this.cartas = [...this.cartas, novaCarta.texto]
      this.pontos += novaCarta.valor
    },
    zerarCartas: function () {
      this.cartas = []
      this.pontos = 0
    }
  }
  const computador = { ...usuario }

  let distribuindoCartas = true
  while (distribuindoCartas) {
    usuario.addCarta(comprarCarta())
    usuario.addCarta(comprarCarta())
    computador.addCarta(comprarCarta())
    computador.addCarta(comprarCarta())
    if (usuario.pontos === 22 || computador.pontos === 22) {
      usuario.zerarCartas()
      computador.zerarCartas()
    }
    else distribuindoCartas = false
  }

  let comprarMaisCarta = true
  while (comprarMaisCarta) {
    comprarMaisCarta = confirm(
      `Suas cartas são ${usuario.cartas.map(carta => "[" + carta + "]")}. A carta revelada do computador é ${computador.cartas[0]}.` +
      "\n" +
      "Deseja comprar mais uma carta?"
    )
    if (comprarMaisCarta) usuario.addCarta(comprarCarta())
    if (usuario.pontos >= 21) comprarMaisCarta = false
  }

  let mensagem = (usuario, computador) => {
    return `Suas cartas são ${usuario.cartas.map(carta => "[" + carta + "]")} . \nSua pontuação é ${usuario.pontos}.` +
      `\n\nAs cartas do computador são ${computador.cartas.map(carta => "[" + carta + "]")} . \nA pontuação do computador é ${computador.pontos}.`
  }

  if (usuario.pontos > 21) alert(mensagem(usuario, computador) + `\n\nO computador ganhou!`)

  if (usuario.pontos <= 21) {
    while (computador.pontos < usuario.pontos) {
      computador.addCarta(comprarCarta())
    }
    if (computador.pontos === usuario.pontos) alert(mensagem(usuario, computador) + `\n\nEmpate!`)
    else if (computador.pontos > 21 || usuario.pontos > computador.pontos) alert(mensagem(usuario, computador) + `\n\nO usuário ganhou!`)
    else if (computador.pontos > usuario.pontos) alert(mensagem(usuario, computador) + `\n\nO computador ganhou!`)
  }
}
