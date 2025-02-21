const {Owner} = require('../models');

module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const createdOwner = await Owner.create(body);
        res.status(201).send(createdOwner);
    } catch (error) {
        //
        res.status(400);
    }
}

module.exports.getAll = async (req, res, next) => {
    try {
        const owners = await Owner.findAll();
        res.status(200).send(owners);
    } catch (error) {
        res.status(404);
        // error handling
    }

}

module.exports.getOne = async (req, res, next) => {
    try {
        const {ownerId} = req.params;
        const owner = await Owner.findByPk(ownerId);
        res.status(200).send(owner);
    } catch (error) {
        res.status(404);
        //error handling
    }
}

module.exports.deleteOne = async (req, res, next) => {
    try {
        const {ownerId} = req.params;
        const deleted = await Owner.deleteByPk(ownerId);
        res.status(200).send(deleted);
    } catch(error) {
        res.status(404);
    }
}
// метод контроллера + ручка на запит

module.exports.updateOne = async (req, res, next) => {
    try {
        const {body, params: {ownerId}} = req;
        const updated = await Owner.updateByPk({id: ownerId, updateValues: body});
        res.status(200).send(updated)
    } catch(error) {
        res.status(404);
    }
}

module.exports.addCat = async (req, res, next) => {
    try {
        const {params: {ownerId, catId}} = req;
        const updated = await Owner.addCat({ownerId, catId});
        res.status(200).send(updated);
    } catch(error) {
        res.status(404);
    }
}