import express, { Request, Response } from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { clients } from "./data";
import { Client, Extrato, Transferencia } from "./types";

const app = express();
app.use(express.json());
app.use(cors())

const getIdade = (dateString: Date): number => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}
const getDate = (data?: string): string =>  {
  if(data) {
    const ano = data.split("/")[2]
    const mes = data.split("/")[1]
    const dia = data.split("/")[0]
    return `${ano}-${mes}-${dia}`
  } else {
    const date = new Date()
    const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    return today
  }
}
const getClientByCPF  = (clients: Client[], cpfNovoCliente: string): Client[] => {
  return clients.filter(c => c.cpf === cpfNovoCliente)
}

app.get('/client/all', (req: Request, res: Response) => {
  res.status(200).send(clients)
})

app.post("/client/create", (req: Request, res: Response) => {
  let errorCode = 500
  const client = req.body as Client

  try {
    if(!client.nome || !client.cpf || !client.dataNascimento) {
      errorCode = 422
      throw new Error("Ausência de parâmetros no body");
    }

    client.dataNascimento = getDate(client.dataNascimento)
    const idade: number = getIdade(new Date(client.dataNascimento))
    if(idade < 18) {
      errorCode = 422
      throw new Error("Cliente tem que ter 18 anos ou mais")
    }

    if(getClientByCPF(clients, client.cpf).length > 0) {
      errorCode = 422
      throw new Error("Este CPF já está cadastrado")
    }
 
    clients.push({...client, saldo: 0, extratos: []})
    res.status(200).send(clients)
  
  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

app.get("/client/:nome/saldo", (req: Request, res: Response) => {
  let errorCode = 500
  const nome = req.params.nome as string
  const cpf = req.body.cpf as string

  const [client] = getClientByCPF(clients, cpf)

  try {  
    if(!client || client.nome !== nome) {
      errorCode = 404
      throw new Error("Usuário não encontrado");
    }

    res.status(200).send(`${client.saldo}`)

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

app.patch("/client/:nome/saldo", (req: Request, res: Response) => {
  let errorCode = 500
  const nome = req.params.nome as string
  const cpf = req.body.cpf as string
  const saldo = req.body.saldo as number
  const [client] = getClientByCPF(clients, cpf)

  try {  
    if(!client || client.nome !== nome) {
      errorCode = 404
      throw new Error("Usuário não encontrado");
    }

    client.saldo += saldo
    res.status(200).send(client)

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

app.put("/client/:nome/pagar-conta", (req: Request, res: Response) => {
  let errorCode = 500
  const nome = req.params.nome as string
  const cpf = req.body.cpf as string
  const conta = req.body.conta as Extrato
  const [client] = getClientByCPF(clients, cpf)
  
  try {  
    if(!client || client.nome !== nome) {
      errorCode = 404
      throw new Error("Usuário não encontrado");
    }
    
    if(!conta.valor) {
      errorCode = 422
      throw new Error("Valor da conta tem que ser maior que 0");
    }

    if(client.saldo < conta.valor) {
      errorCode = 401
      throw new Error("Saldo insuficiente");
    }
    
    const data = getDate(conta.data)
    const today = getDate() 
    if(new Date(data) < new Date(today)) {
      errorCode = 401
      throw new Error("Data inválida");
    }

    conta.data = data
    client.saldo -= conta.valor
    client.extratos.push(conta)
    res.status(200).send(`${JSON.stringify(client.extratos)}\n${client.saldo}`)

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

app.put("/transferencia", (req: Request, res: Response)=> {
  let errorCode = 500
  const transferencia = req.body as Transferencia
  const [clientRemetente] = getClientByCPF(clients, transferencia.cpfRemetente)
  const [clientDestinatario] = getClientByCPF(clients, transferencia.cpfDestinatario)
  const nomeRemetente = transferencia.nomeRemetente
  const nomeDestinatario = transferencia.nomeDestinatario
  const today = getDate()
  try {
    if(!clientRemetente 
      || !clientDestinatario
      || clientRemetente.nome !== nomeRemetente 
      || clientDestinatario.nome !== nomeDestinatario) 
    {
      errorCode = 404
      throw new Error("Usuário não encontrado");
    }

    if(clientRemetente.saldo < transferencia.valor) {
      errorCode = 401
      throw new Error("Saldo insuficiente");
    }

    clientRemetente.saldo -= transferencia.valor
    clientRemetente.extratos.push(
      {
        valor: transferencia.valor,
        data: today, 
        descricao: `Transferencia interna para ${clientDestinatario.nome}`
      }
    )
    clientDestinatario.saldo += transferencia.valor 

    res.status(200).send(clients)

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
