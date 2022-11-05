const React = require('react')
const Def = require('./default')

function show (data) {
    let comment = data.place.comments.map(c =>{
        
            if (data.place.comments.length) {
                return (
                  <div className="border">
                    <h2 className="rant">{c.rant ? 'Good' : 'Bad'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                      <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                  </div>
                )
            }
        
        

    })
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>

            <h2>Rating</h2>
            <p> Not rated</p>

            <h2>Description</h2>
            <p>{data.place.showEstablished}</p>
            <h3>Serving {data.place.cuisnes}</h3>
            

            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> Edit</a>  
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
                </form> 


            <form action={`/places/${data.place.id}`} method='POST'>
            <label htmlFor='comment'>Add a comment</label>
                <input type='text' id='Author' name='Author'/>
                <input type='checkbox' id='rant' name='rant'/>
                <input type ='numbers' id='Stars' name='Stars'/>
                <input type='text' id='Content' name='Content'/>
                <input type='submit' value='Submit'/>
            </form>
            {comment} 
          </main>
        </Def>
    )
}

module.exports = show
