const express = require('express');
const OwnerController = require('../controllers/Owner.controller');

const ownerRouter = express.Router();


ownerRouter.get('/', OwnerController.getAll);
ownerRouter.get('/:ownerId', OwnerController.getOne);
ownerRouter.post('/', OwnerController.createOne);
ownerRouter.put('/:ownerId', OwnerController.updateOne);
ownerRouter.delete('/:ownerId', OwnerController.deleteOne);

ownerRouter.patch('/:ownerId/:catId', OwnerController.addCat);


module.exports = ownerRouter;