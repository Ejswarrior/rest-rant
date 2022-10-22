const React = require('react')
const Defut = require('./default')


function placez(data){
  
        let placesFormatted = data.places.map((place) => {
            return (
              <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}/>
              </div>
            )
          })
          return (
            <Defut>
                <main>
                    <h1>PLACES INDEX PAGE</h1>
                    {placesFormatted}
                </main>
            </Defut>
        )
}





module.exports = placez