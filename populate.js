require('dotenv').config()
const City = require('./models/City')
const db = require('./config/database')

for(let i = 0; i < 20; i++){

    
    City.create({
        
        city: "Buenos Aires",
        country: "Argentine",
        photo: "https://mochilaexpres.com/que-ver-en-cordoba-argentina/",
        population: 5000000,
        foundation: 1500,
    })
}