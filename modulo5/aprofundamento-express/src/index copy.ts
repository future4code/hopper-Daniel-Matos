// import express, { Request, response, Response } from 'express'
// import cors from 'cors'
// import { v4 as generateId } from 'uuid';
// import { users } from './data'


// const app = express()

// app.use(express.json())
// app.use(cors())


// // endpoints aula anterior
// app.get("/playlists", (request: Request, response: Response) => {
//     const username = request.headers.authorization

//     const user = users.find((user) => user.id === username)

//     if (!user) {
//         response.status(404).send("Usuário não encontrado")
//     }

//     const playlists = user.playlists

//     if (playlists.length === 0) {
//         response.status(404).send("Nenhuma playlist encontrada")
//     }

//     response.status(200).send(playlists)
// })

// app.get("/playlists/tracks", (request: Request, response: Response) => {
//     const username = request.headers.authorization

//     const playlistId = request.query.id


//     const user = users.find((user) => user.id === username)

//     if (!user) {
//         response.status(404).send("Usuário não encontrado")
//     }

//     if (!playlistId) {
//         response.status(400).send("Id obrigatório")
//     }

//     const playlists = user.playlists

//     if (!playlists) {
//         response.status(404).send("Nenhuma playlist encontrada")
//     }

//     let tracks
//     playlists.forEach(playlist => {
//         if (playlist.id === playlistId) {
//             tracks = playlist.tracks
//         }
//     })

//     response.send(tracks)
// })

// app.delete("/playlist", (request: Request, response: Response) => {
//     const username = request.headers.authorization

//     const playlistId = request.query.id


//     const user = users.find((user) => user.id === username)

//     if (!user) {
//         response.status(404).send("Usuário não encontrado")
//     }


//     if (!playlistId) {
//         response.status(400).send("Id obrigatório")
//     }

//     const playlists = user.playlists

//     if (!playlists) {
//         response.status(404).send("Nenhuma playlist encontrada")
//     }

//     const filteredPlaylists = playlists.filter((playlist) => {
//         if (playlist.id !== playlistId) {
//             return true
//         }
//     })

//     response.send(filteredPlaylists)
// })

// app.delete("/playlist/track", (request: Request, response: Response) => {
//     const username = request.headers.authorization
//     const playlistId = request.query.playlistId
//     const trackId = request.query.trackId

//     const user = users.find((user) => user.id === username)

//     if (!user) {
//         response.status(404).send("Usuário não encontrado")
//     }

//     if (!playlistId || !trackId) {
//         response.status(400).send("Id obrigatório")
//     }

//     const playlists = user.playlists

//     if (!playlists) {
//         response.status(404).send("Nenhuma playlist encontrada")
//     }

//     playlists.forEach(playlist => {
//         if (playlist.id === playlistId) {
//             playlist.tracks = playlist.tracks.filter((track) => {
//                 if (track.id !== trackId) {
//                     return true
//                 }
//             })
//         }
//     })

//     response.send(playlists)

// })

// // endpoints da aula de hoje
// app.get("/playlist/search", (req: Request, res: Response) => {
//     try {
//         const userName = req.headers.authorization
//         const user = users.find((user) => user.id === userName)

//         if (!user) throw new Error("Usuário não encontrado")

//         const playlistName = req.query.name
//         if (!playlistName) throw new Error("É necessário passar o nome da playlist")

//         const playlist = user.playlists.find(playlist => playlist.name.toLocaleLowerCase() === (playlistName as string).toLowerCase())

//         if (!playlist) throw new Error("Playlist não existe")

//         res.send(playlist)
//     } catch (error) {
//         res.send(error.message)
//     }

// })

// app.post("/playlist/create", (req: Request, res: Response) => {
//     try {
//         const userName = req.headers.authorization
//         const user = users.find((user) => user.id === userName)

//         if (!user) throw new Error("Usuário não encontrado")

//         const playlistName = req.body.name

//         if (!playlistName) throw new Error("É necessário informar o nome da nova playlist")

//         const playlist = user.playlists.find(playlist => playlist.name.toLocaleLowerCase() === (playlistName as string).toLowerCase())

//         if (playlist) throw new Error("Playlist já existe")

//         const newPlaylist = {
//             id: generateId(),
//             name: playlistName,
//             tracks: []
//         }

//         user.playlists.push(newPlaylist)

//         res.status(201).send("Playlist criada com sucesso")

//     } catch (error) {
//         res.send(error.message)
//     }

// })

// app.post("/playlist/:id/track", (req: Request, res: Response) => {
//     try {
//         const userName = req.headers.authorization
//         const user = users.find((user) => user.id === userName)

//         if (!user) throw new Error("Usuário não encontrado")

//         const playlistId = req.params.id
//         const playlist = user.playlists.find(playlist => playlist.id === playlistId)

//         if (!playlist) throw new Error("Playlist não existe")

//         const { name, artist, url } = req.body

//         if (!name || !artist || !url) throw new Error("É necessário informar nome, artista e url da faixa")

//         const newTrack = {
//             id: generateId(),
//             name,
//             artist,
//             url
//         }

//         playlist.tracks.push(newTrack)

//         res.status(201).send("Faixa adicionada com sucesso")

//     } catch (error) {
//         res.send(error.message)
//     }
// })





// app.listen(3003, () => {
//     console.log("Server is running in http://localhost:3003")
// })