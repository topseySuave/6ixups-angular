let mongoose            = require('mongoose');
let express             = require('express');
let bodyParser          = require('body-parser');
let path                = require('path');
let http                = require('http');
let morgan              = require('morgan');
let config              = require('./config');
let { apiVersioning }   = require('./utils');
const app = express();

//Api file for interacting with MongoDb
const router = require('./routes/api');

//Body Parser
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: false, parameterLimit: 10000}));

// Angular Dist output folder
app.use(express.static(path.join(__dirname, '../sixupsAngular/dist')));

// Api location
app.use(apiVersioning, router);
app.use(morgan('dev'));

// const connString = 'mongodb://gabmicah:gabmicah@ds225608.mlab.com:25608/6ixups_db';
const connString = process.env.DATABASE_URL || 'mongodb://localhost/6ixups_db';
mongoose.connect(connString);
let db = mongoose.connection;

//Check Connection
db.once('open', () => {
    console.log('Connected to MongoDb');
});

//Check for Db Errors
db.on('error', (err) => {
    console.log(err);
});

app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../sixupsAngular/dist/index.html'));
});

app.use((req, res, next) => {
    const err = res.status(404).send({
        error: '404: Sorry Page Not Found!'
    });
    next(err);
});

const port = parseInt(process.env.PORT, 10) || 2000;
app.set('port', port);

app.listen(port, () => {
    console.log('app listening on port ' + port);
});