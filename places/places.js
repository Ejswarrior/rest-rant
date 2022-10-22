const router = require('express').Router()

router.get(`/`, (req,res) => {
let places = [{
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

    res.render(`placeshtml`, {places})
})
module.exports = router