const React = require('react')
const Defut = require('./default')


function edit(data) {
    return (
        <Defut>
            <main>
                <h1>Edit Places</h1>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    
                        
                            <label htmlFor="name">Place Name</label>
                            <input id="name"/>
                        
                        
                            <label htmlFor="pic">Place Picture</label>
                            <input id="pic" />

                            <label htmlFor="city">City</label>
                            <input id="city" />

                            <label htmlFor="state">State</label>
                            <input id="state" />

                            <label htmlFor="cuisine">Cuisine</label>
                            <input id="cuisine" />
                        
                            <input type="submit" value='Submit' />
                    
                </form>
            </main>
        </Defut>
    )

}

module.exports = edit