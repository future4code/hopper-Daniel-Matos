import express, { Request, response, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

// EXE 2
type User = {
    id: string,
    name: string,
    phone: string,
    email: string,
    website: string,
}

// EXE 5
type Post = {
    id: string,
    title: string,
    body: string,
    userId: string,
}

// EXE 3
const users: User[] = [
    {id: "1", name: "Daniel", phone: "9999-9999", email: "daniel@gmail.com", website: "http://www.daniel.com",},
    {id: "2", name: "João", phone: "8888-8888", email: "joao@gmail.com", website: "http://www.joao.com",},
    {id: "3", name: "José", phone: "7777-7777", email: "jose@gmail.com", website: "http://www.jose.com",},
]

// EXE 6 
const posts: Post[] = [
    {id: "1", title: "Post 1", body: "aaaaaaaaaaaaa", userId: "1"},
    {id: "2", title: "Post 2", body: "bbbbbbbbbbbbb", userId: "1"},
    {id: "3", title: "Post 3", body: "ccccccccccccc", userId: "2"},
    {id: "4", title: "Post 4", body: "ddddddddddddd", userId: "3"},
]

// EXE 1
app.get("/", (req: Request, res: Response) => {
    res.status(201).send("Exe 1")
})

// EXE 3
app.get("/users", (req: Request, res: Response) => {
    res.status(201).send(users)
})

// EXE 7
app.get("/posts", (req: Request, res: Response) => {
    res.status(201).send(posts)
})

// EXE 8
app.get("/posts/:userId", (req: Request, res: Response) => {
    if (!req.params.userId) response.status(400).send("Id is required")

    const filteredPosts: Post[] = posts.filter(post => post.userId === req.params.userId)
    res.status(201).send(filteredPosts)
})

// EXE 9
app.delete("/posts/:postId", (req: Request, res: Response) => {
    if (!req.params.postId) response.status(400).send("Id is required")
    
    let indexPost: number = 0
    posts.forEach((post, index) => {
        if(post.id === req.params.postId) indexPost = index
    })

    posts.splice(indexPost, 1)
    
    res.status(200).send(posts)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})