//=======[ Settings, Imports & Data ]==========================================

var PORT = 3000;

const cors = require('cors');

var express = require('express');
var app = express();
const routerDevices = require('./routes/devices')
const routerAuth = require('./routes/auth')

const corsOptions = {
    origin: '*',
}

var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}


// to parse application/json
app.use(express.json());
// to serve static files
app.use(express.static('/home/node/app/static/'));
app.use(cors(corsOptions))
app.use(myLogger)

app.use('/auth', routerAuth)
app.use('/devices', routerDevices)

//=======[ Main module code ]==================================================

// var cb0 = function (req, res, next) {
//     // Hago saneamiento de la request
//     // y luego paso al siguiente callback
//     // si se cumple cierta condición
//     console.log('CB0')
//     next()
// }

// var cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
// }


var cb2 = function (req, res, next) {
    res.send({'mensaje': 'Hola DAM!'}).status(200)
}

// app.get('/', [cb0, cb1, cb2]);
app.get('/', cb2);

/* app.get('/prueba', authenticator, function(req, res) {
    res.send({message: 'Está autenticado, accede a los datos'})
}) */

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});
