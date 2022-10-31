require('dotenv').config()
const express = require('express')
const override = require('method-override')
const mongoose = require('mongoose')

const app = express()


app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(override('_method'))


app.use(`/places`, require(`./places/places`))

app.get('/', (req, res) => {
    res.render('home')
})



app.get(`*`, (req, res) => {
res.status(404) .render('error')
})

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log(process.env.MONGO_URI)})
    
app.listen(process.env.PORT)