require('dotenv').config()
const express = require('express')

const app = express()

app.use(`/places`, require(`./places/places`))

app.get('/', (req, res) => {
res.send('Hello World')
})

app.get(`*`, (req, res) => {
res.status(404) .send('<h1>Error page not found</h1>')
})

app.listen(process.env.PORT)