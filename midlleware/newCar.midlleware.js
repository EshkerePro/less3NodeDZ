module.exports = (req, res, next) => {
    try {
        const newCar = req.body;
        console.log(newCar)
        console.log('----')
        if (!newCar.model) {
            throw new Error('Your not point list!')
        }
        if (!newCar.year) {
            throw new Error('Your not point list!')
        }
        if (!newCar.pass) {
            throw new Error('Your not point list!')
        }
        if (newCar.pass === '') {
            throw new Error('Your not enter PIN')
        }

        next()
    }
    catch (e) {
       return res.status(400).end(e.message)
    }
}
