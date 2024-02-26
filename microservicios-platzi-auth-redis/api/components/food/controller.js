// el nombre de la TABLA de la BASE DE DATOS a usar sera INGREDIENT
const TABLA = 'ingredient'

const DUMMYDB = '../../../store/dummy'
// aca va a exportar una funcion que leera la BD injectada que se recibe como parametro
module.exports = function (injectedStore) {
    let store = injectedStore;
    // En caso de que la BD este vacia o no haya, leera la Dummy
    if (!store) {
        store = require(DUMMYDB)
    } 

    // Se crea una funcion donde de la BD se retornara la lista de la Tabla (En este caso INGREDIENT)
    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    return  {
        list,
        get,
    };
}