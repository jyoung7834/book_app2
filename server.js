'use strict'

// Packages
const express = require('express');
const {response} = require('express');
require('dotenv').config();

// Global variables
const app = express();
const Port = process.env.Port || 3000;

// express configuration
app.use(express.static('./public'));
// express.static('./public') tells express to open one folder as publicly available static files (on the / get route) 
// above copied to understand what (./public) does.
app.use(express.urlencoded({extended: true}));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index', {

  });
});

app.listen(8000, function() {
  console.log("heard on 8000");
})

function homeHandler(request, response) {
  response.status(200).sendfile('./index.ejs');
}

//Book Object Constructor Function
function Book(book) {
  this.title =data.volumeInfo.title ;
  this.author=data.volumeInfo.author;
  this.description=data.volumeInfo.description || *** Description current unavailable ***;
  this.thumbnail = data.volumeInfo.imageLinks.thumbnail || null;
  this.url =     ;
}

//Search handler
function getBook(request, response) {
  const book = req.query.book;
  //Use this key in your application by passing it with the key=API_KEY parameter. 
  const key = process.env.API_KEY;
  const url = `https://i.imgur.com/J5LVHEL.jpg`
};

console.log('', url);
superagent.get(url)
  .then(value=> {
    console.log('value.body >>>>>>>>>>' value.body.items);
    const bookData = bookData.map(value => {
      return new Book(value);
    });
    .catch(() => {
      handleError(res);
    });
  })


app.listen(Port, () => console.log(`App is running on Port : ${Port} yay`));