const React = require('react')
const Defut = require('./default')


function home(){
    return(
        <Defut>
            <main>
                <h1>Home</h1>
                <div>
                    <img src="/images/idk.jpg" alt="Image of chicken"/>
                    <h3>Shout to In Your Pocket! Link: <a href ="https://www.inyourpocket.com/valletta/maltese-food-5-must-try-dishes_77146f">https://www.inyourpocket.com/</a></h3>
                </div>
                <a href='/places'>
                    <button className ='btnPrimary'> Places Page</button>
                </a>
                
            </main>
        </Defut>
    )
}

module.exports = home