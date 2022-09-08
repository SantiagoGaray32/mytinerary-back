require("dotenv").config();
const db = require("./config/database");
const User = require("./models/user"); //está bien escrito???

User.create(
  {
    name: "Santi",
    lastName: "Perez",
    email: "santi@perez.com",
    password: "santiperez232",
    userPhoto:
      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    country: "Argentina",
    uniqueString: "Unique",
    verification: true,
  },
  {
    name: "Fran",
    lastName: "Mundi",
    email: "fran@mundi.com",
    password: "ranmundi2323",
    userPhoto:
      "https://carlosaaron.com/assets/pages/media/profile/profile_user.jpg",
    country: "Argentina",
    uniqueString: "Unique",
    verification: true,
  },
  {
    name: "Michael",
    lastName: "Landon",
    email: "michael@landon.com",
    password: "michael231",
    userPhoto:
      "https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg",
    country: "Mexico",
    uniqueString: "Unique",
    verification: true,
  }
);
