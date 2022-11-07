const router = require('express').Router()
const places = require('../models/modPlaces.js')
const db = require('../models/index')
const comments = require('../models/comments')
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

router.put('/:id',async (req, res) =>{
  let reviewUpdate = await db.findByIdAndUpdate(req.params.id, req.body)
  res.redirect(`/places/${req.params.id}`)
  .catch(err => {
    res.render('error')
  })

})



router.get('/new', (req, res) =>{
  res.render('new')
})

router.get('/:id', (req, res) => {
  db.findById(req.params.id)
  .populate('comments')
  .then(place => {
      res.render('show', { place })
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
    res.render('edit', {places})
  }
})

router.post('/:id', (req,res) => {
    db.findById(req.params.id)
    .populate('comments')
    .then(place => {
      comments.create(req.body)
      req.body.rant = req.body.rant ? true : false
      .then(comment => {
        place.comments.push(comment.id)
        place.save()
        .then(() => {
          res.redirect(`/places/${req.params.id}`)
        })
      })
    })
})


router.delete('/:id', async(req, res) => {
  let deleteRant = await db.findByIdAndDelete(req.params.id)
  res.redirect('/places')
  .catch(err => {
    res.render('error')
  })
})




module.exports = router