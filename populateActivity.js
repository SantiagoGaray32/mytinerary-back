require("dotenv").config();
const db = require("./config/database");
const Activity = require("./models/activity");

Activity.create(
  //DISNEYLAND PARIS 1
  {
    itinerary: "6319533b0fb14ec2ed17f6b7",
    name: "Going to the Sky",
    photo: "https://i.ytimg.com/vi/dvm3W5GVBcY/maxresdefault.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6b7",
    name: "Travel World",
    photo:
      "https://pasaportemagico.com/wp-content/uploads/2020/04/455912-laurentp-disneyland-paris.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6b7",
    name: "Mistery Island",
    photo:
      "https://media.disneylandparis.com/d4th/en-usd/images/n037009_2029mar16_world_30-anniversary-fireworks-castle_16-9_tcm1861-233244.jpg?w=1960",
  }, //LOUVRE MUSEUM
  {
    itinerary: "6319533b0fb14ec2ed17f6b6",
    name: "Walking Paris",
    photo: "https://i.ytimg.com/vi/dvm3W5GVBcY/maxresdefault.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6b6",
    name: "Louvre at Night",
    photo: "https://www.airtecnics.com/media/6385/Louvre-museum-in-Paris.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6b6",
    name: "Living the Museum",
    photo: "https://media.timeout.com/images/105761517/750/422/image.jpg",
  },
  //TOWER EIFFEL
  {
    itinerary: "6319533b0fb14ec2ed17f6b5",
    name: "Looking from the Tower",
    photo: "https://cdn.culturagenial.com/es/imagenes/torre-eiffel-cke.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6b5",
    name: "Amazing View",
    photo:
      "https://parisando.b-cdn.net/wp-content/uploads/sites/11/2022/03/la-torre-eiffel-de-paris.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6b5",
    name: "In the Sky of Paris",
    photo:
      "https://images.chicmagazine.com.mx/YaunwslDzprh_vg7kiIQ7IkX9ig=/958x596/uploads/media/2021/03/31/torre-eiffel-ingeniero-gustave-eiffel.jpg",
  }, //LONDON THAMESIS
  {
    itinerary: "6319533b0fb14ec2ed17f6b8",
    name: "The River at Night",
    photo:
      "https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/11/20/151120175223_tamesis_1_640x360_getty_nocredit.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6b8",
    name: "Close to the Water",
    photo:
      "https://dam.ngenespanol.com/wp-content/uploads/2019/09/tesoros-tamesis.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6b8",
    name: "Swimming in London",
    photo:
      "https://dam.ngenespanol.com/wp-content/uploads/2021/11/ri%CC%81o-tamesis2.jpg",
  }, //TOWER OF LONDON
  {
    itinerary: "6319533b0fb14ec2ed17f6b9",
    name: "At the Tower",
    photo:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/c0/dc/f8/tower-of-london-white.jpg?w=1200&h=-1&s=1&cx=2515&cy=1577&chk=v1_1e1764bee68456e4ca27",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6b9",
    name: "Just a Tower Watch",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Tower_of_London_viewed_from_the_River_Thames.jpg/250px-Tower_of_London_viewed_from_the_River_Thames.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6b9",
    name: "Protecting the City",
    photo:
      "https://media.cntraveler.com/photos/6123bdb14fbeb917c1ae8c6f/16:9/w_2560,c_limit/Tower%20of%20London_GettyImages-155432006.jpg",
  }, //BUCKINGHAM
  {
    itinerary: "6319533b0fb14ec2ed17f6ba",
    name: "Who made who",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Buckingham_Palace_from_gardens%2C_London%2C_UK_-_Diliff_%28cropped%29.jpg/800px-Buckingham_Palace_from_gardens%2C_London%2C_UK_-_Diliff_%28cropped%29.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6ba",
    name: "A night in London",
    photo:
      "https://www.eliberico.com/wp-content/uploads/2021/09/buckimham-palace-640x375.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6ba",
    name: "The Great Palace",
    photo:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/72/f4/d0.jpg",
  }, //BERLIN ILLUSUSEUM
  {
    itinerary: "6319533b0fb14ec2ed17f6bb",
    name: "Who made who",
    photo:
      "https://cdn.getyourguide.com/img/tour/1d2fa84ade82a749.jpeg/146.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6bb",
    name: "A night in London",
    photo:
      "https://www.berlin-welcomecard.de/sites/default/files/styles/node_2_col/public/images/illuseum-berlin_clone_table_berlin-welcomecard_web.jpg?itok=syOgycRF",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6bb",
    name: "The Great Palace",
    photo:
      "https://www.illuseum-berlin.de/wp-content/uploads/2019/11/FULL-SIZE-2252a-1024x683.jpg",
  },
  //Berlin Illumimnated
  {
    itinerary: "6319533b0fb14ec2ed17f6bc",
    name: "Walking Berlin",
    photo:
      "https://a.cdn-hotels.com/gdcs/production166/d279/c49112b0-58ef-11e8-a5ee-0242ac110030.jpg?impolicy=fcrop&w=800&h=533&q=medium",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6bc",
    name: "A german in Berlin",
    photo:
      "https://cdn.bmpcloud.com/elements/cms/business/ricaleviajes/images/Destinos/alemania/berlin.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6bc",
    name: "The Lights of Berlin",
    photo:
      "https://a.storyblok.com/f/58806/800x608/2e52b6896b/berlin_city_01_skyline_unsplash_explore-thumbnail.jpg",
  }, //BERLIN BIKE
  {
    itinerary: "6319533b0fb14ec2ed17f6bd",
    name: "Berlin Bikers",
    photo:
      "https://vivirafuera.intriper.com/wp-content/uploads/2021/04/emigrar-a-berlin-alemania.png",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6bd",
    name: "On the Road",
    photo: "https://static.dw.com/image/43901161_303.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6bd",
    name: "Another day in Berlin",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/Aerial_view_of_Berlin_%2832881394137%29.jpg",
  }, //VATICAN
  {
    itinerary: "6319533b0fb14ec2ed17f6be",
    name: "Looking to the Pope",
    photo:
      "https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/CUG7RYXC5ZLMPMLNKZ4BRGU75U.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6be",
    name: "At the Vatican Gates",
    photo:
      "https://www.publico.es/viajes/wp-content/uploads/2021/09/vaticano-1024x682.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6be",
    name: "Rome is beautiful",
    photo:
      "https://www.prensalibre.com/wp-content/uploads/2020/07/Vaticano-1.jpg?quality=52",
  }, //AMALFI COAST
  {
    itinerary: "6319533b0fb14ec2ed17f6bf",
    name: "Incredible Italy",
    photo:
      "https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/CUG7RYXC5ZLMPMLNKZ4BRGU75U.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6bf",
    name: "Loving this View",
    photo:
      "https://www.publico.es/viajes/wp-content/uploads/2021/09/vaticano-1024x682.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6bf",
    name: "At the Coast",
    photo:
      "https://fullsuitcase.com/wp-content/uploads/2022/07/Amalfi-Coast-travel-tips-for-first-time-visitors.jpg.webp",
  }, //TRESURE
  {
    itinerary: "6319533b0fb14ec2ed17f6c0",
    name: "A dream city",
    photo:
      "https://a.cdn-hotels.com/gdcs/production112/d1899/d77bcff2-a859-4785-bdb1-3b15a0887607.jpg?impolicy=fcrop&w=800&h=533&q=medium",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6c0",
    name: "Walking Amsterdam",
    photo:
      "https://a.cdn-hotels.com/gdcs/production166/d427/b65225f3-0135-4c38-bee6-ddcb1e92f7eb.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6c0",
    name: "The Great Holland",
    photo:
      "https://cdn-images.welcometothejungle.com/rgbYy36R6-LFATLJr7ObCKY24Nk0SR_rGIQBYV4fkyc/rs:auto:980::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9hcnRpY2xlL2ltYWdlLzY0MDYvMTU1MzI3L0Ftc3RlcmRhbS0yLmpwZw",
  }, //Rijksmuseum
  {
    itinerary: "6319533b0fb14ec2ed17f6c1",
    name: "Best Museum Ever",
    photo:
      "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/rijksmuseum-3.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6c1",
    name: "A night at the Museum",
    photo:
      "https://thebettervacation.com/wp-content/uploads/2021/06/Rijksmuseum.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6c1",
    name: "Just me and the Museum",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/f/f8/Amsterdam_rijkmuseum.JPG",
  }, //HONG KONG
  {
    itinerary: "6319533b0fb14ec2ed17f6c2",
    name: "A night at Hong Kong",
    photo:
      "http://c.files.bbci.co.uk/1C29/production/_117390270_gettyimages-453722444.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6c2",
    name: "Honk Kong by car",
    photo:
      "https://cdn2.civitatis.com/hong-kong/hong-kong/guia/isla-hong-kong-grid-m.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6c2",
    name: "Walking Hong Kong",
    photo:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/c9/50/88/photo3jpg.jpg?w=600&h=400&s=1",
  }, //OCEANOGRAFIC
  {
    itinerary: "6319533b0fb14ec2ed17f6c3",
    name: "A night at Hong Kong",
    photo:
      "https://images.squarespace-cdn.com/content/v1/56655cfbe4b00229eb48b73f/1504863593183-LUJDX2RVVRTJUGIVS8SQ/IMG_3617.JPG",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6c3",
    name: "Honk Kong by car",
    photo:
      "https://i.pinimg.com/736x/a8/a1/78/a8a178b4d0501d4e1468ed88a144a92e.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6c3",
    name: "Walking Hong Kong",
    photo:
      "https://st.depositphotos.com/2946855/4502/i/450/depositphotos_45024141-stock-photo-oceanographic-museum-valencia-spain.jpg",
  }, //GREAT CANYON
  {
    itinerary: "6319533b0fb14ec2ed17f6c4",
    name: "Great Canyon view",
    photo: "https://grandcanyonwest.com/wp-content/uploads/SkwalkHero_B.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6c4",
    name: "Walking the Great Canyon",
    photo:
      "https://www.nps.gov/grca/planyourvisit/images/mather-point-2021.jpg?maxwidth=1200&autorotate=false",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6c4",
    name: "Another day at Vegas",
    photo:
      "https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_650x650/public/imprescindibles_images/3_pn_grand_canyon_shutterstockrf_390845566_peerasith_patrick_triratpadoongphol_shutterstockless_editada.jpg?itok=Sx0sq1ss",
  },
  //monte carlo
  {
    itinerary: "6319533b0fb14ec2ed17f6c5",
    name: "Best Villefranche",
    photo:
      "https://mediaim.expedia.com/destination/1/1b3ed2e8a47bf5573914888b62083bd8.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6c5",
    name: "Villefranche in the Sky",
    photo:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/fc/0b/ca/cor-do-mar.jpg?w=600&h=400&s=1",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6c5",
    name: "Walking around Villefranche",
    photo:
      "https://www.la-provenza.es/wp-content/uploads/2014/02/villefranche-provenza-costaazul.jpg",
  },
  //PUNTA CANA
  {
    itinerary: "6319533b0fb14ec2ed17f6c6",
    name: "Dreaming in Punta Cana",
    photo:
      "https://media.staticontent.com/media/pictures/83239c0a-50e5-44c5-bbb2-bea8292543e4",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6c6",
    name: "Just one night",
    photo:
      "https://www.voydeviaje.com.ar/resizer/n8Su-rfBVeArES5CgkR66FNr8Xg=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/XMDWYQBXJJF6ZIEEOFTKMSVYFQ.jpg",
  },
  {
    itinerary: "6319533b0fb14ec2ed17f6c6",
    name: "Caribbean Party",
    photo:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/f4/14/08/beach-overview.jpg?w=600&h=400&s=1",
  }
);
