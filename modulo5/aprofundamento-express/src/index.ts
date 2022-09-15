import express, { Request, response, Response } from 'express'
import cors from 'cors'
import { v4 as generateId } from 'uuid';


const app = express()

app.use(express.json())
app.use(cors())

// EXE 2
type Todo = {
    userId: string,
    id: string,
    title: string,
    completed: boolean,
}
// EXE 3
const todos: Todo[] = [
    { userId: "1", id: "1", title: "todo 1", completed: true },
    { userId: "1", id: "2", title: "todo 2", completed: false },
    { userId: "2", id: "3", title: "todo 3", completed: true },
    { userId: "3", id: "4", title: "todo 4", completed: false }
]

// EXE 1
app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("Pong")
})

// EXE 5
app.post("/todos", (req: Request, res: Response) => {
    const newTodo = req.body as Todo
    todos.push(newTodo)

    res.status(200).send(todos)
})

// EXE 4
app.get("/todos", (req: Request, res: Response) => {
    const completed = (req.query.completed === "true")
    
    const filteredTodos: Todo[] = todos.filter((todo) => {
        return (completed && todo.completed) || (!completed && !todo.completed)
    })

    res.status(200).send(filteredTodos)
})

// EXE 6 
app.put("/todos/:id", (req: Request, res: Response) => {
    const todoId = req.params.id
    const newTodos = todos.map(todo => {
        if(todo.id === todoId) return {...todo, completed: !todo.completed}
        return todo
    })
    
    res.status(200).send(newTodos)
})

// EXE 7 
app.delete("/todos/:id", (req: Request, res: Response) => {
    const todoId = req.params.id
    const newTodos = todos.filter(todo => {
        if(todo.id !== todoId) return true
    })
    
    res.status(200).send(newTodos)
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})