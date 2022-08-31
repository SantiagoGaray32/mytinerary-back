const City = require('../models/City')

const cityController = {

    create: async (req,res) => {
        // const (city,country,photo,population,fundation) = req.body
        try {
            await  new City(req.body).save()
            res.status(201).json({
                message:'city created',
                succes: true
            })
        } catch(error){
            res.status(400).json({
                message:'couldnt create city',
                succes: false
                
            }
            )
        }
    }
        }
read: async(req,res) => {
    const {id} =req.params
    try {
       let city = await City.findOne({_id:id})
       if (city){
           res.status(200).json({
               message:'you get one city',
               response: city,
               succes: true
            })
        } else {
            res.status(404).json({
                message:"could't find city",
                succes: false
                
            })

        }

    }catch(error){
        console.log(error)
        res.status(400).json({
            message:"error",
            succes: false
            
        })
    }
}        

all: async (req, res) => {
    let cities
    let query = {}

    //se arma un if por cada categoria del modelo que se pueda bsucar

    if (req.query.population) {
        query.population = req.query.population 
    }


    try{
        cities = await City.find({
            population : req.query.population
        })
        res.json(cities)

    }catch (error) {}

}

module.exports = router;
