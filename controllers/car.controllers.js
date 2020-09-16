const services = require('../services/car.services');

module.exports = {
    getAllCar: (req, res) => {
        let AllCar = services.GetAllCars()
        res.json(AllCar)
    },
    getOneCar: (req, res) => {
        let model = req.params.model
        let GetCurrentCar = services.CarGetByModel(model)
        res.json(GetCurrentCar)
    },
    createNewCar: (req, res) => {
        services.CreateCar(req.body)

         res.end('New car created!!!')
    },
    deleteCar: (req, res) => {
        services.DeleteCar(req.body)

        res.end('Car was deleting');
    }
}
