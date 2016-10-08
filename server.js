var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'articleOne':{
        title:"Article one",
        heading:"Article One",
        content:`<p>This is some content of article one is being repated.This is some content of article one is being repated.This is some content of article one is being repated.This is some content of article one is being repated.This is some content of article one is being repated.</p>
                  <p>This is some content of article one is being repated.This is some content of article one is being repated.This is some content of article one is being repated.This is some content of article one is being repated.This is some content of article one is being repated.</p>
                  <p>This is some content of article one is being repated.This is some content of article one is being repated.This is some content of article one is being repated.This is some content of article one is being repated.This is some content of article one is being repated.</p>`
    },
    
    'articleTwo':{
        title:"Article two - Ramya",
        heading:"Article two",
        content:` <p>This is some content of article two is being repated.This is some content of article two is being repated.This is some content of article two is being repated.This is some content of article two is being repated.This is some content of article two is being repated.</p>`
    },
    
    'articleThree':{
        title:"Article three -ramya",
        heading:"Article three",
        content:` <p>This is some content of article three is being repated.This is some content of article three is being repated.`
    }

}
function createTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=
       ` <html>
      <head>
        <title> ${title}</title>
        <meta name="viewport" content="width=device-width, initila-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
     
      </head>
      <body>
          <div class="container">
              <div>
                  <a href="/">Home</a>
              </div>
              <hr/>
              <h3>
                  ${heading}
              </h3>
              <div>
                   ${content}
              </div>
          </div>
      </body>
    </html>`;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
