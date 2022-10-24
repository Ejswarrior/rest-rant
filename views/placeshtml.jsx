const React = require('react')
const Defut = require('./default')


function places(data){
  
        let placesFormatted = data.places.map((place, index) => {
            return (
              <div className='col-sm-6'>
                <a href={`/places/${index}`}>
                <h2>{place.name}</h2>
                </a>
                <p className='text-Center'>
                  {places.Cuisines}
                </p>
                <img src={place.pic} alt={place.name}/>
                <p className='text-center'>
                  Located in {place.city}, {place.state}
                </p>
              </div>
            )
          })
          return (
            <Defut>
                <main>
                    <h1>Places to Rant or Rave About</h1>
                    <div className =''>
                    {placesFormatted}
                    </div>
                </main>
            </Defut>
        )
}





module.exports = places