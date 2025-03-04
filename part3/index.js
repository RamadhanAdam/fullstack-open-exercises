const express = require('express')
const app = express()

app.use(express.json())

let notes = [
    {
        id: "1",
        content: "HTML is easy",
        important: true
    },
    {
        id: "2",
        content: "Browser can execute only JavaScript",
        important: false
    },
    {
        id: "3",
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
    }
]


app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
    const id = req.params.id
    const note = notes.find(note => note.id === id)

    if (note) {
        res.json(note)
    } else {
        res.statusMessage = "No data here";
        res.status(404).end();
    }
})

app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id
    notes.filter(note => note.id !== id)
})

const generateID = () => {
    const maxId = notes.length > 0
        ? Math.max(...notes.map(n => Number(n.id)))
        : 0
}
app.post('/api/notes', (req, res) => {
    const body = req.body
    if(!body.content){
        return res.status(400).json({
            error:'content missing'
        })
    }
    const note = {
        content : body.content,
        important : body.important || false,
        id : generateID(),
    }

    note.id = String(maxId + 1)

    res.json(note)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

const requestLogger = (request, response, next) => { 
    console.log('Method.', request.method)
    console.log('Path.', request.path)
    console.log('Body.', request.body)
    console.log('...')
    next()
}

app.use(requestLogger)

const unknownEndpoint = (request, response) =>{
    response.status(400).send({error : 'unknown endpoint'})
}

app.use(unknownEndpoint)