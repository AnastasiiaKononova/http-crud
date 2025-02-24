const express = require('express');
const CatController = require('../controllers/Cat.controller');

const catRouter = express.Router();

catRouter.get('/', CatController.getAll);
catRouter.get('/:catId', CatController.getOne);

catRouter.delete('/:catId', CatController.deleteOne);
catRouter.post('', CatController.createOne);
catRouter.put('/:catId', CatController.updateOne);


module.exports = catRouter;