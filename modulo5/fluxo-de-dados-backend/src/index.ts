import express, { Request, Response } from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => console.log("Servidor aberto na porta 3003"))

app.get("/test", (req, res) => {
  res.status(201).send("API está funcional")
})



// type IUser = {
//   id: string,
//   name: string,
//   age: number
// }

// const usuarios: IUser[] = [];

// app.post('/create/user', (req: Request, res: Response) => {
  
//   let statusCode = 500
//   try {
//     const { id, name, age } = req.body as IUser

//     if (!id || !name || !age) {
//       statusCode = 401
//       throw new Error("Credênciais invalidas.")
//     }

//     const usarioExiste = usuarios.find((user) => user.id === id)
//     if (usarioExiste) {
//       statusCode = 409
//       throw new Error("Usuário já existe")
//     }

//     const user: IUser = {
//       id,
//       name,
//       age
//     }

//     usuarios.push(user)

//     return res.status(201).send("Usuário criado com sucesso.")

//   } catch (error: any) {
//     return res.status(statusCode).send({ message: error.message, status: statusCode })
//   }

// })

// app.get('/usuarios', (req: Request, res: Response) => {
//   try {
//     const resultado: IUser[] = usuarios.map((result) => result)

//     return res.status(200).send(resultado)
//   } catch (error: any) {

//   }
// })

// app.delete('/usuario/:id', (req: Request, res: Response) => {
//   let statusCode = 500
//   try {
//     const { id } = req.params
//     if (!id) {
//       statusCode = 404
//       throw new Error("Credências invalida.")
//     }

//     const filterValue = usuarios.find((usuario, indice) => {
//       if (usuario.id === id) {
//         usuarios.splice(indice, 1)
//       }
//     })

//     return res.status(200).send(filterValue)

//   } catch (error: any) {
//     return res.status(statusCode).send({ message: error.message })
//   }
// })

// app.put('/edit/user/:id', (req: Request, res: Response) => {
//   let statusCode = 500
//   try {

//     const { id } = req.params

//     const { name, age } = req.body as IUser

//     if (!name || !age) {
//       statusCode = 401
//       throw new Error("Credênciais invalidas.")
//     }

//     const usarioExiste = usuarios.find((user) => user.name === name)
//     if (usarioExiste) {
//       statusCode = 409
//       throw new Error("Usuário já existe")
//     }

//     const usuarioPeloId = usuarios.find((user) => user.id === id)
//     if (!usuarioPeloId) {
//       statusCode = 404
//       throw new Error("Usuário não encontrado")
//     }

//     usuarioPeloId.id = id
//     usuarioPeloId.name = name
//     usuarioPeloId.age = age

//     return res.status(200).send(usuarioPeloId)
//   } catch (error: any) {
//     return res.status(statusCode).send({ message: error.message })
//   }

// })

