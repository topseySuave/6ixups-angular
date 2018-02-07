let mongoose = require('mongoose');
let express = require('express');

const app = express();
let Schema = mongoose.Schema;

let blogSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use((req, res, next) => {
    const err = res.status(404).send({
        error: '404: Sorry Page Not Found!'
    });
    next(err);
});

const port = parseInt(process.env.PORT, 10) || 1000;
app.set('port', port);

app.listen(port, () => {
    console.log('app listening on port ' + port);
});