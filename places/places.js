const router = require('express').Router()


router.get(`/`, (req,res) => {
let place = [{
  name: 'H-Thai-ML',
  city: 'Seattle',
  state: 'WA',
  cuisines: 'Thai, Pan-Asian',
  pic: '/images/idk.jpg'
}, {
  name: 'Coding Cat Cafe',
  city: 'Phoenix',
  state: 'AZ',
  cuisines: 'Coffee, Bakery',
  pic: '/images/codingCatCafe.jpg'
}]

    res.render(`placeshtml`, {place})
})
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


router.get('/new', (req, res) =>{
  res.render('new')
})



module.exports = router