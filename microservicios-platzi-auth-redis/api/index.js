const express = require('express');

const app = express();
const config = require('../config.js');
const ingredient = require('./components/food/network.js');

// Router

app.use('/api/ingredient', ingredient)

app.listen(config.api.port, () =>{
    console.log('Api escuchando en el puerto: ', config.api.port);
})
