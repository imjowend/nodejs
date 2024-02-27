const express = require('express');
const httpStatus = require("http-status-codes");

const response = require('../../../network/response');
const Controller = require('./index')

const router = express.Router();

router.get('/recipe', function(req, res){
    Controller.list()
        .then((list) => {
            response.success(req, res, list, httpStatus.StatusCodes.OK);
        }).catch((err) => {
            response.error(req, res, err.message, httpStatus.StatusCodes.INTERNAL_SERVER_ERROR);
        });
});

router.get('/:id', function(req, res){
    Controller.get(req.params.id)
        .then((ingredient) =>{
            response.success(req, res, ingredient, httpStatus.StatusCodes.OK);
        }).catch((err) => {
            response.error(req, res, err.message, httpStatus.StatusCodes.INTERNAL_SERVER_ERROR);
        });
})

// Primera pagina donde imprime las recetas junto con los ingredientes y sus cantidades
router.get('/', function (req, res) {
    Controller.recipe()
        .then((recipe) => {
            response.success(req, res, recipe, httpStatus.StatusCodes.OK);
        }).catch((err) => {
            response.error(req, res, err.message, httpStatus.StatusCodes.INTERNAL_SERVER_ERROR)
        })
        
})

module.exports = router;