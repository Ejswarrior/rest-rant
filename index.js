require('dotenv').config()
const express = require('express')

const app = express()


app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


app.use(`/places`, require(`./places/places`))

app.get('/', (req, res) => {
    res.render('home')
})



app.get(`*`, (req, res) => {
res.status(404) .render('error')
})

app.listen(process.env.PORT)