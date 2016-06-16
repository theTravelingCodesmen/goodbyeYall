'use strict'

let knex = require ('../db/db');

knex.truncateTable('destinations');


let christTheRedeemer = {
  title: "Christ the Redeemer",
  airport_code: "GIG-sky",
  country: "Brazil",
  city_name: "Rio de Janiero",
  package_group: "Seven Wonders of the World",
  intro: "This statue of Jesus stands some 38 meters tall, atop the Corcovado mountain overlooking Rio de Janeiro. Designed by Brazilian Heitor da Silva Costa and created by French sculptor Paul Landowski, it is one of the world’s best-known monuments. The statue took five years to construct and was inaugurated on October 12, 1931. It has become a symbol of the city and of the warmth of the Brazilian people, who receive visitors with open arms.",
  main_image_url: "/assets/images/Christ_the_redeemer.png",
  next_image_url: "/assets/images/Christ_the_redeemer.jpeg",
};

let machuPicchu = {
  title: "Machu Picchu",
  airport_code: "CUZ-sky",
  country: "Peru",
  city_name: "Cuzco",
  package_group: "Seven Wonders of the World",
  intro: "In the 15th century, the Incan Emperor Pachacútec built a city in the clouds on the mountain known as Machu Picchu (“old mountain”). This extraordinary settlement lies halfway up the Andes Plateau, deep in the Amazon jungle and above the Urubamba River. It was probably abandoned by the Incas because of a smallpox outbreak and, after the Spanish defeated the Incan Empire, the city remained ‘lost’ for over three centuries. It was rediscovered by Hiram Bingham in 1911.",
  main_image_url: "/assets/images/machu_picchu.png",
  next_image_url: "/assets/images/machu_picchu.jpeg",
};

let theGreatWall = {
  title:"The Great Wall Of China",
  airport_code:"BJSA-sky",
  country:"China",
  city_name:"Beijing",
  package_group: "Seven Wonders of the World",
  intro:"The Great Wall of China was built to link existing fortifications into a united defense system and better keep invading Mongol tribes out of China. It is the largest man-made monument ever to have been built and it is disputed that it is the only one visible from space. Many thousands of people must have given their lives to build this colossal construction.",
  main_image_url:"/assets/images/wall_of_china.png",
  next_image_url:"/assets/images/wall_of_china.jpeg",
};

let chichenItza = {
  title: "Pyramid at Chichén Itzá",
  airport_code: "CUN-sky",
  country: "Mexico",
  city_name: "Cancun",
  package_group: "Seven Wonders of the World",
  intro: "Chichén Itzá, the most famous Mayan temple city, served as the political and economic center of the Mayan civilization. Its various structures – the pyramid of Kukulkan, the Temple of Chac Mool, the Hall of the Thousand Pillars, and the Playing Field of the Prisoners – can still be seen today and are demonstrative of an extraordinary commitment to architectural space and composition. The pyramid itself was the last, and arguably the greatest, of all Mayan temples.",
  main_image_url: "/assets/images/chichen_itza.png",
  next_image_url: "/assets/images/chichen_itza.jpeg",
};

let tajMahal = {
  title: "Taj Mahal",
  airport_code: "DEL-sky",
  country: "India",
  city_name: "New Delhi",
  package_group: "Seven Wonders of the World",
  intro: "This immense mausoleum was built on the orders of Shah Jahan, the fifth Muslim Mogul emperor, to honor the memory of his beloved late wife. Built out of white marble and standing in formally laid-out walled gardens, the Taj Mahal is regarded as the most perfect jewel of Muslim art in India. The emperor was consequently jailed and, it is said, could then only see the Taj Mahal out of his small cell window.",
  main_image_url: "/assets/images/taj_mahal.png",
  next_image_url: "/assets/images/taj_mahal.jpeg",
};

let Colosseum = {
  title:"Colosseum",
  airport_code:"ROME-sky",
  country:"Italy",
  city_name:"Rome",
  package_group: "Seven Wonders of the World",
  intro:"This great amphitheater in the centre of Rome was built to give favors to successful legionnaires and to celebrate the glory of the Roman Empire. Its design concept still stands to this very day, and virtually every modern sports stadium some 2,000 years later still bears the irresistible imprint of the Colosseum’s original design. Today, through films and history books, we are even more aware of the cruel fights and games that took place in this arena, all for the joy of the spectators.",
  main_image_url:"/assets/images/colusseum.png",
  next_image_url:"/assets/images/colusseum.jpeg",
};

let Petra = {
  title:"Petra",
  airport_code:"AMMA-sky",
  country:"Jordan",
  city_name:"Amman",
  package_group: "Seven Wonders of the World",
  intro:"On the edge of the Arabian Desert, Petra was the glittering capital of the Nabataean empire of King Aretas IV (9 B.C. to 40 A.D.). Masters of water technology, the Nabataeans provided their city with great tunnel constructions and water chambers. A theater, modelled on Greek-Roman prototypes, had space for an audience of 4,000. Today, the Palace Tombs of Petra, with the 42-meter-high Hellenistic temple facade on the El-Deir Monastery, are impressive examples of Middle Eastern culture.",
  main_image_url:"/assets/images/petra.png",
  next_image_url:"/assets/images/petra.jpeg",
};


let destinationsArray = [Petra, christTheRedeemer, Colosseum, tajMahal, chichenItza, theGreatWall, machuPicchu];


// insert destination into destinations database
knex.insertDestination = function(destinationObject) {
    return knex('destinations').insert(destinationObject);
}


Promise.all(destinationsArray
  .map(function (destination) {
    return knex.insertDestination(destination);
  }))
  .then(function () {
      console.log("Inserted all 7 destinations");
  })
  .catch(function(error) {
      console.log("There was an error inserting all 7 destinations:", error);
  })
  .then(knex.closeDb)


// knex.insertDestination(christTheRedeemer)
//   .then(knex.closeDb)
//   .catch(function (error) {
//     console.log("Error while inserting destination:",error);
//   });

  

