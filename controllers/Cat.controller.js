const {Cat} = require('../models/index');

module.exports.createOne = () => {}

module.exports.getAll = async (req, res, next) => {
   try {
        const cats =  await Cat.findAll();
        res.status(200).send(cats);
   } catch (error) {
        res.status(404);
        //error handling
   }
}

module.exports.getOne = () => {}

module.exports.uodateOne = () => {}

module.exports.deleteOne = () => {}