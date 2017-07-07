// REQUIRE AND EXECUTE MODULE EXPRESS
const express = require('express');
const app = express();

// REQUIRE AND EXECUTE MODULE EJS
const ejs = require('ejs');
app.set('view engine', 'ejs');

app.use('/assets/css/', express.static(__dirname+'/www/links/css'));
app.use('/assets/js/', express.static(__dirname+'/www/links/js'));
app.use('/assets/img/', express.static(__dirname+'/www/links/img'));
app.use('/assets/fonts/', express.static(__dirname+'/www/links/fonts'));


const params = {
    sitename    : 'Skillsolutions Software'
}

// VIEWS
app.get('/', function(req, res) {
    res.render(__dirname+'/www/views/landingpage', {params:params});
});

app.get('/ressourceshumaines', function(req, res) {
    res.render(__dirname+'/www/views/humanresources', {params:params});
});

// OPEN PORT
app.listen(1337);