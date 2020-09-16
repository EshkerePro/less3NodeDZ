
let arrCar = [
    {
        model: 'Nisan', year: 2020, pass: 1234
    },
    {
        model: 'Tesla', year: 2020, pass: 3456
    },
    {
        model: 'Tesla', year: 2019, pass: 1098
    },
    {
        model: 'Renault', year: 2015, pass: 1234
    }
]

module.exports = {
    DeleteCar : (CarPass) => {
        for (let i = 0; i < arrCar.length; i++) {
            if (arrCar[i].model === CarPass.model || arrCar[i].year === CarPass.year || arrCar[i].pass === CarPass.pass) {
                arrCar.splice(i, 1)
                console.log(arrCar)
            }
            else {
                console.log('car not found')
            }
        }
    },

    CreateCar : (objCar) => {


        arrCar.push(objCar)
        console.log(arrCar)

    },



    CarGetByModel : (CarModel) => {
        return arrCar.find( u => u.model === CarModel )
    },

    GetAllCars : () =>{
        return arrCar
    },

}
