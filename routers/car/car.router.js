const {Router} = require('express');
const controller = require('../../controllers/car.controllers');
const midllewareCar = require('../../midlleware/newCar.midlleware');

let carRouter = Router();

carRouter.get('/all', controller.getAllCar)
carRouter.get('/:model', controller.getOneCar)
carRouter.post('/NewCar',  midllewareCar ,  controller.createNewCar)
carRouter.delete('/delete',  controller.deleteCar)

module.exports.u = carRouter;
