import { Client } from "./types"

export let clients : Client[] = [
    { 
        nome: "Daniel", 
        cpf: "123.123.123-12",
        dataNascimento:"16/01/2001", 
        saldo: 75000, 
        extratos: [
            {
                valor: 3000,
                data: "09/09/2021",
                descricao: "Investimento"
            },
            {
                valor: 5000,
                data: "10/07/2022",
                descricao: "Investimento"
            }
        ]
    },
]
