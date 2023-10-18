const {bollywood,technology,hollywood,food,fitness} = require('../dummyData')

const technologyController= (req,res)=>{
    return res.send(technology)
}

const hollywoodController= (req,res)=>{
    return res.send(hollywood)
}

const bollywoodController= (req,res)=>{
    return res.send(bollywood)
}

const foodController= (req,res)=>{
    return res.send(food)
}

const fitnessController= (req,res)=>{
    return res.send(fitness)
}

module.exports={technologyController,hollywoodController,bollywoodController,foodController,fitnessController}