const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGO_DB,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true

    }
    
    //primer parametro: link de conecxion
    //segundo parametro: objeto con dos propiedades en true
)
    .then(()=>console.log('connected to database successfully'))
    .catch(error=>console.log(error))