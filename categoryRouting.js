const {technologyController,hollywoodController,bollywoodController, foodController, fitnessController} = require('../Node Handson 3/controller/categoryController')
const categoryRouter = require('express').Router();

function authenticateF(req, res, next) {
  
    const isAuthenticated = false;
  
    if (isAuthenticated) {
      next(); 
    } else {
        res.send('Authentication required');
    }
  }

  function authenticateT(req, res, next) {
  
    const isAuthenticated = true;
  
    if (isAuthenticated) {
      next(); 
    } else {
        res.send('Authentication required');
    }
  }


categoryRouter.get('/technology',authenticateT,technologyController)
categoryRouter.get('/hollywood',authenticateF,hollywoodController)
categoryRouter.get('/bollywood',authenticateT,bollywoodController)
categoryRouter.get('/food',authenticateF,foodController)
categoryRouter.get('/fitness',authenticateT,fitnessController)

module.exports = {categoryRouter};