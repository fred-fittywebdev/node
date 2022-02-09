const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: false })) // permet de créer un body parser et qui permet de parser et de la traduire en objet JS

app.get('/', (req, res) => {
    res.send('<form action="/store-user" method="POST"><label>Your name</label><input type="text" name="username"><button>Submit</button></form>')
})

app.post('/store-user', (req, res) => {
    const username = req.body.username
    console.log(username);
    res.send('<h1>Username stored!</h1>')
})

app.get('/currenttime', (req, res) => {
    res.send('<h1>' + new Date().toLocaleString() + '</h1>')
}) // localhost:8080/currenttime

app.listen(8080)

