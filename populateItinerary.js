require("dotenv").config();
const db = require("./config/database");
const Itinerary = require("./models/tinerary");

Itinerary.create(
  {
    //PARIS
    itinerary: "Eiffel Tower Priority Access",
    userName: "63194a653565fffc5c7ea7a7",
    city: "63104f37184e7a57778463dd",
    price: 1500,
    likes: ["4234"],
    tags: ["#paris", "#eiffel"],
    duration: 60,
  },
  {
    //PARIS
    itinerary: "Louvre Museum",
    userName: "63194a653565fffc5c7ea7a6",
    city: "63104f37184e7a57778463dd",
    price: 480,
    likes: ["880"],
    tags: ["#paris", "#louvre"],
    duration: 75,
  },
  {
    //PARIS
    itinerary: "Disneyland París",
    userName: "63194a653565fffc5c7ea7a7",
    city: "63104f37184e7a57778463dd",
    price: 300,
    likes: ["5425"],
    tags: ["#paris", "#disneyland"],
    duration: 60,
  },
  {
    //LONDON
    itinerary: "Sightseeing cruise on the Thames",
    userName: "63194a653565fffc5c7ea7a7",
    city: "63105370184e7a57778463eb",
    price: 1200,
    likes: ["990"],
    tags: ["#london", "#thames"],
    duration: 45,
  },
  {
    //LONDON
    itinerary: "Tower of London changing of the guard ceremony",
    userName: "63194a653565fffc5c7ea7a6",
    city: "63105370184e7a57778463eb",
    price: 650,
    likes: ["4243"],
    tags: ["#london", "#tower"],
    duration: 45,
  },
  {
    //LONDON
    itinerary: "Visit to Buckingham Palace with Changing of the Guard Ceremony",
    userName: "63194a653565fffc5c7ea7a7",
    city: "63105370184e7a57778463eb",
    price: 550,
    likes: ["6413"],
    tags: ["#london", "#buckingham"],
    duration: 70,
  },
  {
    //BERLIN
    itinerary: "Entrance to the Berlin Illususeum",
    userName: "63194a653565fffc5c7ea7a7",
    city: "6310579e184e7a57778463fb",
    price: 1253,
    likes: ["7554"],
    tags: ["#berlin", "#illususeum"],
    duration: 30,
  },
  {
    //BERLIN
    itinerary: "Berlin Illuminated Tour",
    userName: "63194a653565fffc5c7ea7a7",
    city: "6310579e184e7a57778463fb",
    price: 930,
    likes: ["7856"],
    tags: ["#berlin", "#tour"],
    duration: 90,
  },
  {
    //BERLIN
    itinerary: "Berlin Bike Tour: Berlin Wall and Cold War",
    userName: "63194a653565fffc5c7ea7a7",
    city: "6310579e184e7a57778463fb",
    price: 70,
    likes: ["21445"],
    tags: ["#berlin", "#coldwar"],
    duration: 120,
  },
  {
    //ROME
    itinerary: "Tour of the Vatican Museums and Sistine Chapel",
    userName: "63194a653565fffc5c7ea7a6",
    city: "631054d3184e7a57778463f1",
    price: 440,
    likes: ["54363"],
    tags: ["#italy", "#vatican"],
    duration: 40,
  },
  {
    //ROME
    itinerary: "Pompeii, Amalfi Coast and Positano Guided Day Trip from Rome",
    userName: "63194a653565fffc5c7ea7a5",
    city: "631054d3184e7a57778463f1",
    price: 2110,
    likes: ["8124"],
    tags: ["#italy", "#pompeii"],
    duration: 65,
  },
  {
    //AMSTERDAM
    itinerary: "Treasure hunt in Amsterdam",
    userName: "63194a653565fffc5c7ea7a5",
    city: "63104fb8184e7a57778463df",
    price: 310,
    likes: ["950"],
    tags: ["#amsterdam", "#hunt"],
    duration: 50,
  },
  {
    //AMSTERDAM
    itinerary: "Entrance to the Rijksmuseum",
    userName: "63194a653565fffc5c7ea7a6",
    city: "63104fb8184e7a57778463df",
    price: 255,
    likes: ["1245"],
    tags: ["#amsterdam", "#rijksmuseum"],
    duration: 25,
  },
  {
    //HONG KONG
    itinerary: "Geopark Kayaking Adventure",
    userName: "63194a653565fffc5c7ea7a5",
    city: "63105076184e7a57778463e3",
    price: 350,
    likes: ["7546"],
    tags: ["#hongkong", "#geopark"],
    duration: 25,
  },
  {
    //HONG KONG
    itinerary: "Oceanogràfic Entrance Ticket",
    userName: "63194a653565fffc5c7ea7a6",
    city: "63105076184e7a57778463e3",
    price: 1200,
    likes: ["66341"],
    tags: ["#hongkong", "#oceanografic"],
    duration: 60,
  },
  {
    //LAS VEGAS
    itinerary: "Grand Canyon Deluxe Helicopter Tour",
    userName: "63194a653565fffc5c7ea7a5",
    city: "631052dd184e7a57778463e9",
    price: 1200,
    likes: ["8454"],
    tags: ["#lasvegas", "#grandcanyon"],
    duration: 30,
  },
  {
    //MONTE CARLO
    itinerary: "Villefranche Shore Excursion: Small Group Tour",
    userName: "63194a653565fffc5c7ea7a6",
    city: "631053f8184e7a57778463ed",
    price: 950,
    likes: ["4215"],
    tags: ["#montecarlo", "#villefranche"],
    duration: 80,
  },
  {
    //PUNTA CANA
    itinerary: "Eco Adventure Buggy",
    userName: "63194a653565fffc5c7ea7a5",
    city: "63105458184e7a57778463ef",
    price: 150,
    likes: ["1325"],
    tags: ["#puntacana", "#buggy"],
    duration: 25,
  }
);
