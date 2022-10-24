const React = require('react')

function Defut(html)  {
return(
    <html>
        <head>
            <title>Title</title>
            <link rel='stylesheet' link='https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css'/>
            <link rel="stylesheet" href="/css/style.css"/>
        </head>
        <body>
            <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/places">Places</a></li>
                        <li><a href="/places/new">Add New Resturant rant</a></li>
                    </ul>
            </nav>
            {html.children}
        </body>
    </html>
)
}

module.exports = Defut