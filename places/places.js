const router = require('express').Router()
const places = require('../models/modPlaces.js')

router.get(`/`, (req,res) => {
    res.render(`placeshtml`, {places})
})
router.post('/', (req, res) => {
  
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})



router.get('/new', (req, res) =>{
  res.render('new')
})



module.exports = router