import express, { Request, Response } from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { Client, clients, Extrato } from "./data";

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
const formatarDataNascimento = (data: string): string =>  {
  const ano = data.split("/")[2]
  const mes = data.split("/")[1]
  const dia = data.split("/")[0]
  return `${ano}-${mes}-${dia}`
}
const getClientByCPF  = (clients: Client[], cpfNovoCliente: string): Client[] => {
  return clients.filter(c => c.cpf === cpfNovoCliente)
}

app.get('/client', (req: Request, res: Response) => {
  res.status(200).send(clients)
})

app.post("/client/cleate", (req: Request, res: Response) => {
  let errorCode = 500
  const client = req.body as Client
  try {
    if(!client.nome || !client.cpf || !client.dataNascimento) {
      errorCode = 422
      throw new Error("Ausência de parâmetros no body");
    }

    client.dataNascimento = formatarDataNascimento(client.dataNascimento)
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

app.get("/client/saldo", (req: Request, res: Response) => {
  let errorCode = 500
  const nome = req.query.nome as string
  const cpf = req.query.cpf as string
  try {
    const client = getClientByCPF(clients, cpf)
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