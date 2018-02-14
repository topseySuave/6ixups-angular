const fs = require('fs');
const path = require('path');

const models = fs.readdirSync(__dirname + '/models').forEach((filename) => {
    if(filename.indexOf('.js')) require(__dirname + '/models/' + filename);
});

module.export = models;