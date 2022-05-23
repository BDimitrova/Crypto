const { engine } = require('express-handlebars');

function hbsConfig(app) {
    app.set('views', './src/views');

    app.engine('hbs', engine({
        extname: 'hbs'
    }));
    
    app.set('view engine', 'hbs');
}

module.exports = hbsConfig;