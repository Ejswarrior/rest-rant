const router = require('express').Router()
const places = require('../models/modPlaces.js')
const db = require('../models/index')

router.get(`/`, (req,res) => {
    db.find()
    .then((places) => {
      res.render('placeshtml', {places})
    })
    .catch(err => {
      res.render('error')
    })
})

router.post('/', (req, res) => {
    db.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      res.render('error')
    })
})

router.put('/:id',(req, res) =>{
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error')
  }
  else if(!places[id]){
    res.render('error')
  }
  else {
    places[id] = req.body
    res.redirect(`/places/${id}`)
  }
})



router.get('/new', (req, res) =>{
  res.render('new')
})

router.get('/:id', (req, res) => {
  db.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      res.render('error')
  })
})

router.get('/:id/edit', (req, res) =>{
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if(!places[id]){
    res.render('error404')
  }
  else {
    res.render('edit', { place: places[id], id})
  }
})

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})




module.exports = router