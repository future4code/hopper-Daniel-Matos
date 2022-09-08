// EXE 1

// a
// let minhaString: string = 1
// Type 'number' is not assignable to type 'string'.

// b
let meuNumero: number | string 
// Union Type 
 
// c
type Pessoa = {
  nome: string,
  idade: number,
  corFavorita: Cores,
}

// d
enum Cores {
  VERMELHO = "Vermelho",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
}

const pessoa1: Pessoa = {
  nome: "Daniel",
  idade: 22,
  corFavorita: Cores.VERMELHO
}
const pessoa2: Pessoa = {
  nome: "Daniel",
  idade: 22,
  corFavorita: Cores.AMARELO
}
const pessoa3: Pessoa = {
  nome: "Daniel",
  idade: 22,
  corFavorita: Cores.VERDE
}

// EXE 2
type Estatisticas = {
  maior: number,
  menor: number,
  media: number,
}

function obterEstatisticas(numeros: number[]): Estatisticas {
  
  const numerosOrdenados: number[] = numeros.sort(
      (a, b) => a - b
  )

  let soma: number = 0

  for (let num of numeros) {
      soma += num
  }

  const estatisticas: Estatisticas = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length
  }

  return estatisticas
}

type AmostraDeDados = {
  numeros: number[],
  obterEstatisticas: (numeros: number[]) => Estatisticas
}

const amostraDeIdades: AmostraDeDados = {
  numeros: [21, 18, 65, 44, 15, 18],
  obterEstatisticas: obterEstatisticas
}

console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))

// EXE 3
type Post = {
  autor: string,
  texto: string,
}

const posts: Post[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]

function buscarPostsPorAutor(posts: Post[], autorInformado: string) {
  return posts.filter(
    (post) => {
      return post.autor === autorInformado
    }
  )
}

// EXE 4

// EXE 5
