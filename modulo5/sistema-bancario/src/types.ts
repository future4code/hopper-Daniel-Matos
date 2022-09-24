export type Client = {
  nome: string,
  cpf: string,
  dataNascimento: string,
  saldo: number,
  extratos: Extrato[],
}

export type Extrato = {
  valor: number,
  data: string,
  descricao: string,
} 

export type Transferencia = {
  nomeRemetente: string,
  cpfRemetente: string,
  nomeDestinatario: string,
  cpfDestinatario: string,
  valor: number, 
}
