require("dotenv").config();
const db = require("./config/database");
const Activity = require("./models/activity"); //chequear si es correcta la ruta

Activity.create(
  //PARIS
  {
    itinerary: "6319533b0fb14ec2ed17f6b7",
    name: "Disneyland París",
    photo:
      "https://imagenes.elpais.com/resizer/-N66K7fYeKYNAoJ07jMEGkwPZls=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/NNHZB5LUY24KP4EYZL3E63NWK4.jpg",
  }
);
