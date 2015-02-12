/*global require, process, console*/
var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    'use strict';
    
    res.render('home.jade');
});

app.get('/tratamentos', function (req, res) {
    'use strict';
    
    res.render('tratamentos.jade');
});

app.get('/beleza', function (req, res) {
    'use strict';
    
    res.render('beleza.jade');
});

app.get('/suelen', function (req, res) {
    'use strict';
    
    res.render('suelen.jade');
});

app.get('/localizacao', function (req, res) {
    'use strict';
    
    res.render('localizacao.jade');
});

app.listen(port);
console.log('Listening on port ' + port);