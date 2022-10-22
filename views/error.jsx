const React = require('react')
const Defut = require('./default')


function error(){
    return(
        <Defut>
            <main>
                <h1>404 not found</h1>
                <img src="/images/apples.jpg" alt="Image of chicken"/>
            </main>
        </Defut>
    )
}

module.exports = error