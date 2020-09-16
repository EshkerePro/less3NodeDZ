const express = require('express');
const carRouter = require('./routers/car/car.router');
let  server = express();

server.use(express.urlencoded({extends: true}));
server.use(express.json());

server.use('/',  carRouter.u)


server.listen(5001, (err) => {
    if (err) {
        console.log(err)
    }
})
