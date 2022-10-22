const React = require('react')

function Defut(html)  {
return(
    <html>
        <head>
            <title>Title</title>
            <link rel='stylesheet' link='https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css'/>
            <link rel="stylesheet" href="style.css"/>
        </head>
        <body>
            {html.children}
        </body>
    </html>
)
}

module.exports = Defut