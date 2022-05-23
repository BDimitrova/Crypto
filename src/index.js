const express = require('express');

const app = express();
const port = 3000;

require('./config/hbsConfig')(app);
require('./config/expressConfig')(app);

app.get('/', (req, res) => {
    res.render('home', {layout: false})
})

app.listen(port, () => console.log(`The app is running on http://localhost:${port}`));