const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let users = [
    { id: 1, username: "A" },
    { id: 2, username: "B" },
    { id: 3, username: "C" },
]

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

app.get('/api/', (req, res) => {
    res.json(users)
})

app.get('/api/:id/', (req, res) => {
    let user = users.find(user => user.id === parseInt(req.params.id))
    res.json(user)
})

app.post('/api/', (req, res) => {
    let newUser = {
        id: users.length + 1,
        username: req.body.username
    }
    users.push(newUser)
    res.status(201).json(newUser)
})

app.put('/api/:id', (req, res) => {
    let user = users.find(user => user.id === parseInt(req.params.id))
    user.username = req.body.username
    res.json(user)
})

app.delete('/api/:id', (req, res) => {
    users = users.filter(users => users.id !== parseInt(req.params.id))
    res.status(204).send()
})