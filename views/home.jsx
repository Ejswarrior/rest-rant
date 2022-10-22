const React = require('react')
const Defut = require('./default')


function home(){
    return(
        <Defut>
            <main>
                <h1>Home</h1>

                <a href='/places'>
                    <button className ='btnPrimary'> Places Page</button>
                </a>
                
            </main>
        </Defut>
    )
}

module.exports = home