const City = require('./models/City')
const db = require('./config/database')

City.create({

    city: "Córdoba",
    country: "Argentine",
    photo: "https://mochilaexpres.com/que-ver-en-cordoba-argentina/",
    population: "5000000",
    fundation: "1500",
})