const router = require('express').Router();
const { route } = require('../app');
const controller = require('../controllers/test-controller');
const bootcampsController = require('../controllers/bootcamps-controller');


module.exports = ()=>{
    // Routes Get
    router.get('/udemy',controller.testcontroller)
    router.get('/bootcamps',bootcampsController.getAll)
    router.get('/bootcamps/:id',bootcampsController.getById)
    
    // Routes Post
    router.post('/bootcamps',bootcampsController.create)

    // Routes Update 
    router.put('/bootcamps/:id',bootcampsController.updateById)

    //Routes Delete 
    router.delete('/bootcamps/:id',bootcampsController.deleteById)



    return router;
};
