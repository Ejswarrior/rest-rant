const React = require('react')

function Defut(html)  {
return(
    <html>
        <head>
            <title>Title</title>
        </head>
        <body>
            {html.children}
        </body>
    </html>
)
}

module.exports = Defut