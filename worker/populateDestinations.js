'use strict'

let knex = require ('../db/db');

knex.truncateTable('destinations');


let christTheRedeemer = {
  title: "Christ the Redeemer",
  airport_code: "RIOA-sky",
  country: "Brazil",
  city_name: "Rio de Janiero",
  package_group: "Seven Wonders",
  intro: "This statue of Jesus stands some 38 meters tall, atop the Corcovado mountain overlooking Rio de Janeiro. Designed by Brazilian Heitor da Silva Costa and created by French sculptor Paul Landowski, it is one’s best-known monuments. The statue took five years to construct and was inaugurated on October 12, 1931. It has become a symbol of the city and of the warmth of the Brazilian people, who receive visitors with open arms.",
  main_image_url: "/assets/images/Christ_the_redeemer.png",
  next_image_url: "/assets/images/Christ_the_redeemer.jpeg",
};

let machuPicchu = {
  title: "Machu Picchu",
  airport_code: "CUZ-sky",
  country: "Peru",
  city_name: "Cuzco",
  package_group: "Seven Wonders",
  intro: "In the 15th century, the Incan Emperor Pachacútec built a city in the clouds on the mountain known as Machu Picchu (“old mountain”). This extraordinary settlement lies halfway up the Andes Plateau, deep in the Amazon jungle and above the Urubamba River. It was probably abandoned by the Incas because of a smallpox outbreak and, after the Spanish defeated the Incan Empire, the city remained ‘lost’ for over three centuries. It was rediscovered by Hiram Bingham in 1911.",
  main_image_url: "/assets/images/machu_picchu.png",
  next_image_url: "/assets/images/machu_picchu.jpeg",
};

let theGreatWall = {
  title:"The Great Wall Of China",
  airport_code:"BJSA-sky",
  country:"China",
  city_name:"Beijing",
  package_group: "Seven Wonders",
  intro:"The Great Wall of China was built to link existing fortifications into a united defense system and better keep invading Mongol tribes out of China. It is the largest man-made monument ever to have been built and it is disputed that it is the only one visible from space.",
  main_image_url:"/assets/images/wall_of_china.png",
  next_image_url:"/assets/images/wall_of_china.jpeg",
};

let chichenItza = {
  title: "Pyramid at Chichén Itzá",
  airport_code: "CUN-sky",
  country: "Mexico",
  city_name: "Cancun",
  package_group: "Seven Wonders",
  intro: "Chichén Itzá, the most famous Mayan temple city, served as the political and economic center of the Mayan civilization. Its various structures – the pyramid of Kukulkan, the Temple of Chac Mool, the Hall of the Thousand Pillars, and the Playing Field of the Prisoners – can still be seen today and are demonstrative of an extraordinary commitment to architectural space and composition. The pyramid itself was the last, and arguably the greatest, of all Mayan temples.",
  main_image_url: "/assets/images/chichen_itza.png",
  next_image_url: "/assets/images/chichen_itza.jpeg",
};

let tajMahal = {
  title: "Taj Mahal",
  airport_code: "DEL-sky",
  country: "India",
  city_name: "New Delhi",
  package_group: "Seven Wonders",
  intro: "This immense mausoleum was built on the orders of Shah Jahan, the fifth Muslim Mogul emperor, to honor the memory of his beloved late wife. Built out of white marble and standing in formally laid-out walled gardens, the Taj Mahal is regarded as the most perfect jewel of Muslim art in India. The emperor was consequently jailed and, it is said, could then only see the Taj Mahal out of his small cell window.",
  main_image_url: "/assets/images/taj_mahal.png",
  next_image_url: "/assets/images/taj_mahal.jpeg",
};

let colosseum = {
  title:"Colosseum",
  airport_code:"ROME-sky",
  country:"Italy",
  city_name:"Rome",
  package_group: "Seven Wonders",
  intro:"This great amphitheater in the centre of Rome was built to give favors to successful legionnaires and to celebrate the glory of the Roman Empire. Its design concept still stands to this very day, and virtually every modern sports stadium some 2,000 years later still bears the irresistible imprint of the Colosseum’s original design. Today, through films and history books, we are even more aware of the cruel fights and games that took place in this arena, all for the joy of the spectators.",
  main_image_url:"/assets/images/colusseum.png",
  next_image_url:"/assets/images/colusseum.jpeg",
};

let petra = {
  title:"Petra",
  airport_code:"AMMA-sky",
  country:"Jordan",
  city_name:"Amman",
  package_group: "Seven Wonders",
  intro:"On the edge of the Arabian Desert, Petra was the glittering capital of the Nabataean empire of King Aretas IV (9 B.C. to 40 A.D.). Masters of water technology, the Nabataeans provided their city with great tunnel constructions and water chambers. A theater, modelled on Greek-Roman prototypes, had space for an audience of 4,000. Today, the Palace Tombs of Petra, with the 42-meter-high Hellenistic temple facade on the El-Deir Monastery, are impressive examples of Middle Eastern culture.",
  main_image_url:"/assets/images/petra.png",
  next_image_url:"/assets/images/petra.jpeg",
};




let victoriaFalls = {
  title:"Victoria Falls",
  airport_code:"HRE-sky",
  country:"Zimbabwe",
  city_name:"Harare",
  package_group: "Seven Natural Wonders",
  intro:"In Southern Africa, the Zambezi River flows across a flat plateau that extends hundreds of kilometres in all directions. It is here that one will find the largest waterfall in the world. Victoria Falls stretches 1.7 kilometres wide and is shared by the countries of Zambia and Zimbabwe. The falls are formed as the full width of the Zambezi River plummets into a 108 metre high cleft. During the wet season, the spray from the falls can be seen nearly 50 kilometres away, hence the local name Mosi-oa-Tunya (the ‘Smoke that Thunders’).",
  main_image_url:"/assets/images/victoria_falls.png",
  next_image_url:"/assets/images/victoria_falls.jpeg",
};

let rioHarbor = {
  title: "Harbor of Rio de Janeiro",
  airport_code: "RIOA-sky",
  country: "Brazil",
  city_name: "Rio de Janiero",
  package_group: "Seven Natural Wonders",
  intro: "The Harbour of Rio de Janeiro in Brazil is one of the 7 wonders because it holds many illusions. The Harbour can be viewed in so many ways that it appears differently and can be deceptive. For example, the mountains create an entrance into the bay and can make it appear to be a lake. However, when the Portugese explorers arrived in 1502, they believed the bay was a large river and named it Rio de Janeiro, the “River of January,” in honor of the month they arrived.",
  main_image_url: "/assets/images/rio_harbor.png",
  next_image_url: "/assets/images/rio_harbor.jpeg",
};

let northernLights = {
  title:"The Aurora Borealis (Northern Lights)",
  airport_code:"REYK-sky",
  country:"Iceland",
  city_name:"Reykjavik",
  package_group: "Seven Natural Wonders",
  intro:"Aurora Borealis (another one of the natural wonders) appears in the North sky and is visible only from the Northern Hemisphere. These northern polar lights appear inadvertently from September to October and March to April. The Aurora Borealis is named after the Roman goddess of dawn, Aurora and the Greek name for the north wind, Boreas. Often seen as a greenish glow or occasionally a faint red, the lights consist of solar wind and particles that appear as “curtains” or streamers extending in an east-west direction across the sky. Shaped by the earth’s magnetic field, the lights are constantly changing and evolving.",
  main_image_url:"/assets/images/northern_lights.png",
  next_image_url:"/assets/images/northern_lights.jpeg",
};

let grandCanyon = {
  title:"The Grand Canyon",
  airport_code:"PHXA-sky",
  country:"United States of America",
  city_name:"Phoenix",
  package_group: "Seven Natural Wonders",
  intro:"Located in North America is the Grand Canyon, extending 400 kilometres through the Colorado Plateau in northwest Arizona. The canyon is 6 to 30 kilometres wide and 1.6 kilometres deep. The canyon is an erosion formed by water, ice and wind and is considered one of the 7 wonders. The layers of sedimentary rock were formed over millions of years ago and provide significant insight into the earth’s geologic timescale.",
  main_image_url:"/assets/images/grand_canyon.png",
  next_image_url:"/assets/images/grand_canyon.jpeg",
};

let greatBarrierReef = {
  title:"Great Barrier Reef",
  airport_code:"SYD-sky",
  country:"Australia",
  city_name:"Sydney",
  package_group: "Seven Natural Wonders",
  intro:"Along the northeast coast of Queensland, Australia, the Great Barrier Reef stretches 2,600 kilometres and is the world’s largest coral reef ecosystem composed of 2,900 individual reefs. It supports a variety of vulnerable and endangered species. The Great Barrier Reef covers an area of approximately 344,400 square kilometres and is the only living organism on earth that is visible from space.",
  main_image_url:"/assets/images/great_barrier_reef.png",
  next_image_url:"/assets/images/great_barrier_reef.jpeg",
};

let paricutin = {
  title:"Parícutin Volcano",
  airport_code:"MEX-sky",
  country:"Mexico",
  city_name:"Mexico City",
  package_group: "Seven Natural Wonders",
  intro:"In 1943 the Parícutin Volcano erupted in the state of Michoacán, Mexico. The first man to witness the eruption was a Tarascan Indian farmer, named Dominic Pulido. The Parîcutin is a Monogenetic cone, which means it stems from a single point of eruption. The volcano now stands at 410 metres above ground. Its hardened lava covers 16 square kilometres and its volcanic sand covers 32 square kilometres. Named after a small Tarascan Indian village, Parîcutin is now counted as one of the seven wonders.",
  main_image_url:"/assets/images/paricutin.png",
  next_image_url:"/assets/images/paricutin.jpeg",
};

let mountEverest = {
  title:"Mount Everest",
  airport_code:"DEL-sky",
  country:"India",
  city_name:"New Delhi",
  package_group: "Seven Natural Wonders",
  intro:"On the edge of the Tibetan Plateau stands one of the most impressive of the 7 world wonders, Mount Everest. Like the rest of the Himalayas, Mount Everest rose from the floor of the ancient Tethys Sea. It is considered to be the highest mountain in the world and continues to grow today at the rate of a few millimetres each year. Mount Everest and the Himalayas were traditionally revered by the local people as the homes of the gods and were considered sacred.",
  main_image_url:"/assets/images/mount_everest.png",
  next_image_url:"/assets/images/mount_everest.jpeg",
};


let destinationsArray = [petra, christTheRedeemer, colosseum, tajMahal, chichenItza, theGreatWall, machuPicchu, victoriaFalls, rioHarbor, northernLights, grandCanyon, greatBarrierReef, paricutin, mountEverest];

// insert destination into destinations database
knex.insertDestination = function(destinationObject) {
    return knex('destinations').insert(destinationObject);
}


Promise.all(destinationsArray
  .map(function (destination) {
    return knex.insertDestination(destination);
  }))
  .then(function () {
      console.log("Inserted all 14 destinations");
  })
  .catch(function(error) {
      console.log("There was an error inserting all 14 destinations:", error);
  })
  .then(knex.closeDb)


// knex.insertDestination(christTheRedeemer)
//   .then(knex.closeDb)
//   .catch(function (error) {
//     console.log("Error while inserting destination:",error);
//   });



