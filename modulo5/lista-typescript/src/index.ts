// EXE 1
const separaData = (nome: string, data: string):string =>  {
  const dia: string = data.split("/")[0]
  const mes: string = data.split("/")[1]
  const ano: string = data.split("/")[2]
  return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}` 
}

// EXE 2
const imprimirTipo = (valor: any): void => {
  console.log(typeof valor) 
}

// EXE 3
type Filme = {
  nome: string,
  ano: number,
  genero: GENERO,
  pontos: number | undefined,
}
enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
const organizarFilmes = (nome: string, ano: number, genero: GENERO, pontos?: number): Filme => {
  return {nome, ano, genero, pontos}
}

// EXE 4
enum SETOR {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINANCEIRO = "financeiro",
}
type Colaborador = {
  nome: string,
  salario: number,
  setor: SETOR,
  presencial: boolean,
}
const colaboradores: Colaborador[] = [
	{ nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: SETOR.MARKETING, presencial: true }
]
const filtrarColaboradores = (colaboradores: Colaborador[]): Colaborador[] => {
  return colaboradores.filter(colaborador => colaborador.setor === SETOR.MARKETING && colaborador.presencial)
}

// EXE 5
enum ROLE {
  USER = "user",
  ADMIN = "admin",
}
type USER = {
  name: string,
  email: string,
  role: ROLE,
}
const users: USER[] = [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN},  
]
const filtrarUsuarios = (usuarios: USER[]): USER[] => {
  return usuarios.filter(usuario => usuario.role === ROLE.ADMIN)
}

// EXE 6
type Cliente = {
  cliente: string,
  saldoTotal: number,
  debitos: number[],
}
const clientes: Cliente[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]
const filtrarClientesSaldoNegativo = (clientes: Cliente[]): Cliente[] => {
  return clientes.filter((cliente, index) => {
    
    let debTotal: number = cliente.debitos.reduce((prevVal, curVal) => prevVal + curVal, 0)
    clientes[index].saldoTotal = cliente.saldoTotal - debTotal

    if (cliente.saldoTotal - debTotal < 0) return cliente
  
  })
}

console.log(filtrarClientesSaldoNegativo(clientes))
