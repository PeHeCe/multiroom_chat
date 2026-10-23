//importar express
var express = require('express');
//importar consign
var consign = require('consign');
//importar body-parser
var bodyParser = require('body-parser');
//importar express-validator
var expressValidator = require('express-validator');

//iniciar o objeto express que vai para o app.js
var app = express();

//setar as variaveis  "view-engine" e "views" do express
app.set('view-engine', 'ejs');
app.set('views', './app/views');

//configurar o middleware express.static
app.use(express.static('./app/public'));

//configurar o middleware body-parser
app.use(bodyParser.urlencoded({extended : true}));

//configurar o middleware express-validator
app.use(expressValidator());

//consign para auto load
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

//exportar o objeto app
module.exports = app;