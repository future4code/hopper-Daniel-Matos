// import express, { Request, Response } from 'express'
// import cors from 'cors'
// import { users } from './data'

// const app = express()

// app.use(express.json())
// app.use(cors())


// app.get("/playlists", (request: Request, response: Response) => {
//     const playlists = users.map((user) => {
//         return user.playlists
//     }).flat(1)

//     response.status(200).send(playlists)
// })

// app.get("/playlists/tracks", (request: Request, response: Response) => {
//     const playlistId = request.query.id

//     if (!playlistId) {
//         response.status(400).send("Id obrigatório")
//     }

//     const playlists = users.map((user) => user.playlists).flat(1)

//     let tracks
//     playlists.forEach(playlist => {
//         if (playlist.id === playlistId) {
//             tracks = playlist.tracks
//         }
//     })

//     response.send(tracks)
// })

// app.delete("/playlist", (request: Request, response: Response) => {
//     const playlistId = request.query.id

//     if (!playlistId) {
//         response.status(400).send("Id obrigatório")
//     }

//     const playlists = users.map((user) => user.playlists).flat(1)

//     const filteredPlaylists = playlists.filter((playlist) => {
//         if (playlist.id !== playlistId) {
//             return true
//         }
//     })

//     response.send(filteredPlaylists)
// })

// app.delete("/playlist/track", (request: Request, response: Response) => {
//     const playlistId = request.query.playlistId
//     const trackId = request.query.trackId

//     if (!playlistId || !trackId) {
//         response.status(400).send("Id obrigatório")
//     }

//     const playlists = users.map((user) => user.playlists).flat(1)

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





// app.listen(3003, () => {
//     console.log("Server is running in http://localhost:3003")
// })