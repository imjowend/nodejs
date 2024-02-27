// el nombre de la TABLA de la BASE DE DATOS a usar sera INGREDIENT
const TABLA = 'ingredient'
const RECIPE = 'recipe'

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

    // Retorna la informacion de la Tabla que coincida con el ID pasado por parametro
    function get(id) {
        return store.get(TABLA, id);
    }

    function recipe(){
        return store.recipe(RECIPE);
    }

    return  {
        list,
        get,
        recipe,
    };
}