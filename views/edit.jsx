const React = require('react')
const Defut = require('./default')


function edit(data) {
    return (
        <Defut>
            <main>
                <h1>Edit Places</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                    
                        
                            <label htmlFor="name">Place Name</label>
                            <input id="name" value={data.place.name}/>
                        
                        
                            <label htmlFor="pic">Place Picture</label>
                            <input id="pic"  value={data.place.pic}/>

                            <label htmlFor="city">City</label>
                            <input id="city"  value={data.place.city}/>

                            <label htmlFor="state">State</label>
                            <input id="state" value={data.place.state}/>

                            <label htmlFor="cuisine">Cuisine</label>
                            <input id="cuisine" value={data.place.cuisine}/>
                        
                            <input type="submit" value='Submit' />
                    
                </form>
            </main>
        </Defut>
    )

}

module.exports = edit