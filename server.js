// REQUIRE AND EXECUTE MODULE EXPRESS
const express = require('express');
const app = express();
const port = 1337;

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
app.get('/landingpage', function(req, res) {
    res.render(__dirname+'/www/views/landingpage', {params:params});
});

app.get('/innovation', function(req, res) {
    res.render(__dirname+'/www/views/innovation', {params:params});
});

// OPEN PORT
app.listen(port, function(){
	console.log('listening on port ' + port );
});