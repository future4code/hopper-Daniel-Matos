import express, { Request, Response } from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { Client, clients } from "./data";

const app = express();
app.use(express.json());
app.use(cors())

app.get('/client', (req: Request, res: Response) => {
  res.status(200).send(clients)
})

app.post("/client/cleate", (req: Request, res: Response) => {
  let errorCode = 500
  try {
    const client = req.body as Client
    
    if(!client.nome || !client.cpf || !client.dataNascimento) {
      errorCode = 422
      throw new Error("Ausência de parâmetros no body");
    }

    const ano = client.dataNascimento.split("/")[2]
    const mes = client.dataNascimento.split("/")[1]
    const dia = client.dataNascimento.split("/")[0]
    const idade = new Date(`${ano}-${mes}-${dia}`)
    console.log(idade)

    clients.push({...client, saldo: 0, extratos: []})
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
