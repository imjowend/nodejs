// Trae la bd
const store = require('../../../store/dummy')
// Trae el controlador
const controller = require('./controller');

// controlador es una funcion que le inyectamos el store
module.exports = controller(store);