// import express, { Request, Response } from "express";
// import cors from "cors"
// import { AddressInfo } from "net";
// import { User, users, USER_ROLE } from "./data";

// const app = express();
// app.use(express.json());
// app.use(cors())

// // Comando para possível erro no ts-node-dev: npm i ts-node@latest ts-node-dev@latest

// app.get('/users', (req: Request, res: Response) => {
//   let errorCode = 400
//   try {
//     const name = req.query.name as string

//     if (!name) {
//       errorCode = 422
//       throw new Error("Falta o parâmetro de busca!");
//     }

//     const user = users.find((u) => {
//       return u.name.toLowerCase() === name.toLowerCase()
//     })
//     // const user = users.find(u => u.name === name)

//     if (!user) {
//       errorCode = 404
//       throw new Error("Usuário não encontrado");
//     }

//     res.status(200).send(user)
//   } catch (error: any) {
//     res.status(errorCode).send(error.message)
//   }
// })

// app.get('/users/:id', (req: Request, res: Response) => {
//   let errorCode = 500
//   try {
//     const id = Number(req.params.id)

//     if (isNaN(id)) {
//       errorCode = 422
//       throw new Error("Id precisa ser um number!");
//     }

//     const user = users.filter((u) => { // ou [user]
//       return u.id === id
//     })

//     if (!user.length) { // user.length === 0 ou !user[0]
//       errorCode = 404
//       throw new Error("Usuário não encontrado");
//     }

//     res.status(200).send(user)

//   } catch (error: any) {
//     res.status(errorCode).send(error.message)
//   }
// })

// app.post('/users', (req: Request, res: Response) => {
//   let errorCode = 400
//   try {
//     const { name, email, type, age } = req.body

//     if (!name || !email || !type || !age) {
//       errorCode = 422
//       throw new Error("Ausência de parâmetros no body");
//     }

//     if (type.toUpperCase() !== USER_ROLE.ADMIN && type.toUpperCase() !== USER_ROLE.NORMAL) {
//       errorCode = 422
//       throw new Error("Inserir um tipo de usuário válido: 'NORMAL' ou 'ADMIN'");
//     }

//     const newUser: User = {
//       id: Math.random(), // Date.now() ou user.lentgh + 1
//       name: name,
//       email: email,
//       type: type,
//       age: age
//     }

//     users.push(newUser)

//     res.status(200).send({ message: 'Usuário criado com sucesso!', users })

//   } catch (error: any) {
//     res.status(errorCode).send(error.message)
//   }
// })

// app.patch('/users/:id', (req: Request, res: Response) => {
//   let errorCode = 400
//   try {
//     const id = Number(req.params.id)
//     const {newName, newEmail} = req.body

//     if(!newName || !newEmail) {
//       errorCode = 422
//       throw new Error("Ausência de parâmetro!");
//     }

//     const userExists = users.find(u => u.id === id)
//     if(!userExists){
//       errorCode = 404
//       throw new Error("Usuário não encontrado!");
//     }

//     for(let user of users) { // users.forEach() for(let i=0; i < users.length; i++)
//       if(id === user.id){
//         user.email = newEmail
//         user.name = newName
//         user.age = user.age + 1
//       }
//     }

//     res.status(200).send(users)
//   } catch (error:any) {
//     res.status(errorCode).send(error.message)
//   }
// })

// const server = app.listen(process.env.PORT || 3003, () => {
//   if (server) {
//     const address = server.address() as AddressInfo;
//     console.log(`Server is running in http://localhost: ${address.port}`);
//   } else {
//     console.error(`Failure upon starting server.`);
//   }
// });

// // Server ao final do arquivo, por questões de boa prática e performance.
