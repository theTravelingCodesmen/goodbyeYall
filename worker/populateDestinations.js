'use strict'

let knex = require ('../db/db');

// 7 wonders package
let christTheRedeemer = {
  title: "Christ the Redeemer",
  airport_code: "RIOA-sky",
  country: "Brazil",
  city_name: "Rio de Janiero, Brazil",
  package_group: "Seven Wonders",
  intro: "This statue of Jesus stands some 38 meters tall, atop the Corcovado mountain overlooking Rio de Janeiro. Designed by Brazilian Heitor da Silva Costa and created by French sculptor Paul Landowski, it is one’s best-known monuments. The statue took five years to construct and was inaugurated on October 12, 1931. It has become a symbol of the city and of the warmth of the Brazilian people, who receive visitors with open arms.",
  main_image_url: "/assets/images/Christ_the_redeemer.png",
  next_image_url: "/assets/images/Christ_the_redeemer.jpeg",
  weather:"SBRJ",
};

let machuPicchu = {
  title: "Machu Picchu",
  airport_code: "CUZ-sky",
  country: "Peru",
  city_name: "50 miles Northwest of Cuzco, Peru",
  package_group: "Seven Wonders",
  intro: "In the 15th century, the Incan Emperor Pachacútec built a city in the clouds on the mountain known as Machu Picchu (“old mountain”). This extraordinary settlement lies halfway up the Andes Plateau, deep in the Amazon jungle and above the Urubamba River. It was probably abandoned by the Incas because of a smallpox outbreak and, after the Spanish defeated the Incan Empire, the city remained ‘lost’ for over three centuries. It was rediscovered by Hiram Bingham in 1911.",
  main_image_url: "/assets/images/machu_picchu.png",
  next_image_url: "/assets/images/machu_picchu.jpeg",
  weather:"SPZO",
};

let theGreatWall = {
  title:"The Great Wall Of China",
  airport_code:"BJSA-sky",
  country:"China",
  city_name:"Beijing, China",
  package_group: "Seven Wonders",
  intro:"The Great Wall of China was built to link existing fortifications into a united defense system and better keep invading Mongol tribes out of China. It is the largest man-made monument ever to have been built and it is disputed that it is the only one visible from space.",
  main_image_url:"/assets/images/wall_of_china.png",
  next_image_url:"/assets/images/wall_of_china.jpeg",
  weather:"ZBAA",
};

let chichenItza = {
  title: "Pyramid at Chichén Itzá",
  airport_code: "CUN-sky",
  country: "Mexico",
  city_name: "Yucatán Peninsula, Mexico",
  package_group: "Seven Wonders",
  intro: "Chichén Itzá, the most famous Mayan temple city, served as the political and economic center of the Mayan civilization. Its various structures – the pyramid of Kukulkan, the Temple of Chac Mool, the Hall of the Thousand Pillars, and the Playing Field of the Prisoners – can still be seen today and are demonstrative of an extraordinary commitment to architectural space and composition. The pyramid itself was the last, and arguably the greatest, of all Mayan temples.",
  main_image_url: "/assets/images/chichen_itza.png",
  next_image_url: "/assets/images/chichen_itza.jpeg",
  weather:"MMUN",
};

let tajMahal = {
  title: "Taj Mahal",
  airport_code: "DEL-sky",
  country: "India",
  city_name: "Agra, India",
  package_group: "Seven Wonders",
  intro: "This immense mausoleum was built on the orders of Shah Jahan, the fifth Muslim Mogul emperor, to honor the memory of his beloved late wife. Built out of white marble and standing in formally laid-out walled gardens, the Taj Mahal is regarded as the most perfect jewel of Muslim art in India. The emperor was consequently jailed and, it is said, could then only see the Taj Mahal out of his small cell window.",
  main_image_url: "/assets/images/taj_mahal.png",
  next_image_url: "/assets/images/taj_mahal.jpeg",
  weather:"VIDP",
};

let colosseum = {
  title:"Colosseum",
  airport_code:"ROME-sky",
  country:"Italy",
  city_name:"Rome, Italy",
  package_group: "Seven Wonders",
  intro:"This great amphitheater in the centre of Rome was built to give favors to successful legionnaires and to celebrate the glory of the Roman Empire. Its design concept still stands to this very day, and virtually every modern sports stadium some 2,000 years later still bears the irresistible imprint of the Colosseum’s original design. Today, through films and history books, we are even more aware of the cruel fights and games that took place in this arena, all for the joy of the spectators.",
  main_image_url:"/assets/images/colusseum.png",
  next_image_url:"/assets/images/colusseum.jpeg",
  weather:"LIRA",
};

let petra = {
  title:"Petra",
  airport_code:"AMMA-sky",
  country:"Jordan",
  city_name:"Al Siq Canyon, Jordan",
  package_group: "Seven Wonders",
  intro:"On the edge of the Arabian Desert, Petra was the glittering capital of the Nabataean empire of King Aretas IV (9 B.C. to 40 A.D.). Masters of water technology, the Nabataeans provided their city with great tunnel constructions and water chambers. A theater, modelled on Greek-Roman prototypes, had space for an audience of 4,000. Today, the Palace Tombs of Petra, with the 42-meter-high Hellenistic temple facade on the El-Deir Monastery, are impressive examples of Middle Eastern culture.",
  main_image_url:"/assets/images/petra.png",
  next_image_url:"/assets/images/petra.jpeg",
  weather:"OJAM",
};



// 7 Natural Wonders package
let victoriaFalls = {
  title:"Victoria Falls",
  airport_code:"HRE-sky",
  country:"Zimbabwe",
  city_name:"Victoria Falls, Zimbabwe",
  package_group: "Seven Natural Wonders",
  intro:"In Southern Africa, the Zambezi River flows across a flat plateau that extends hundreds of kilometres in all directions. It is here that one will find the largest waterfall in the world. Victoria Falls stretches 1.7 kilometres wide and is shared by the countries of Zambia and Zimbabwe. The falls are formed as the full width of the Zambezi River plummets into a 108 metre high cleft. During the wet season, the spray from the falls can be seen nearly 50 kilometres away, hence the local name Mosi-oa-Tunya (the ‘Smoke that Thunders’).",
  main_image_url:"/assets/images/victoria_falls.png",
  next_image_url:"/assets/images/victoria_falls.jpeg",
  weather:"FVHA",
};

let rioHarbor = {
  title: "Harbor of Rio de Janeiro",
  airport_code: "RIOA-sky",
  country: "Brazil",
  city_name: "Rio de Janiero, Brazil",
  package_group: "Seven Natural Wonders",
  intro: "The Harbour of Rio de Janeiro in Brazil is one of the 7 wonders because it holds many illusions. The Harbour can be viewed in so many ways that it appears differently and can be deceptive. For example, the mountains create an entrance into the bay and can make it appear to be a lake. However, when the Portugese explorers arrived in 1502, they believed the bay was a large river and named it Rio de Janeiro, the “River of January,” in honor of the month they arrived.",
  main_image_url: "/assets/images/rio_harbor.png",
  next_image_url: "/assets/images/rio_harbor.jpeg",
  weather:"SBRJ",
};

let northernLights = {
  title:"The Aurora Borealis (Northern Lights)",
  airport_code:"REYK-sky",
  country:"Iceland",
  city_name:"Reykjavik, Iceland",
  package_group: "Seven Natural Wonders",
  intro:"Aurora Borealis (another one of the natural wonders) appears in the North sky and is visible only from the Northern Hemisphere. These northern polar lights appear inadvertently from September to October and March to April. The Aurora Borealis is named after the Roman goddess of dawn, Aurora and the Greek name for the north wind, Boreas. Often seen as a greenish glow or occasionally a faint red, the lights consist of solar wind and particles that appear as “curtains” or streamers extending in an east-west direction across the sky. Shaped by the earth’s magnetic field, the lights are constantly changing and evolving.",
  main_image_url:"/assets/images/northern_lights.png",
  next_image_url:"/assets/images/northern_lights.jpeg",
  weather:"BIRK",
};

let grandCanyon = {
  title:"The Grand Canyon",
  airport_code:"PHXA-sky",
  country:"United States",
  city_name:"70 miles north of Flagstaff, Arizona",
  package_group: "Seven Natural Wonders",
  intro:"Located in North America is the Grand Canyon, extending 400 kilometres through the Colorado Plateau in northwest Arizona. The canyon is 6 to 30 kilometres wide and 1.6 kilometres deep. The canyon is an erosion formed by water, ice and wind and is considered one of the 7 wonders. The layers of sedimentary rock were formed over millions of years ago and provide significant insight into the earth’s geologic timescale.",
  main_image_url:"/assets/images/grand_canyon.png",
  next_image_url:"/assets/images/grand_canyon.jpeg",
  weather:"KGCN",
};

let greatBarrierReef = {
  title:"Great Barrier Reef",
  airport_code:"SYD-sky",
  country:"Australia",
  city_name:"Queensland, Australia",
  package_group: "Seven Natural Wonders",
  intro:"Along the northeast coast of Queensland, Australia, the Great Barrier Reef stretches 2,600 kilometres and is the world’s largest coral reef ecosystem composed of 2,900 individual reefs. It supports a variety of vulnerable and endangered species. The Great Barrier Reef covers an area of approximately 344,400 square kilometres and is the only living organism on earth that is visible from space.",
  main_image_url:"/assets/images/great_barrier_reef.png",
  next_image_url:"/assets/images/great_barrier_reef.jpeg",
  weather:"CYQY",
};

let paricutin = {
  title:"Parícutin Volcano",
  airport_code:"MEX-sky",
  country:"Mexico",
  city_name:"28 miles west of Uruapan, Mexico",
  package_group: "Seven Natural Wonders",
  intro:"In 1943 the Parícutin Volcano erupted in the state of Michoacán, Mexico. The first man to witness the eruption was a Tarascan Indian farmer, named Dominic Pulido. The Parîcutin is a Monogenetic cone, which means it stems from a single point of eruption. The volcano now stands at 410 metres above ground. Its hardened lava covers 16 square kilometres and its volcanic sand covers 32 square kilometres. Named after a small Tarascan Indian village, Parîcutin is now counted as one of the seven wonders.",
  main_image_url:"/assets/images/paricutin.png",
  next_image_url:"/assets/images/paricutin.jpeg",
  weather:"MMMX",
};

let mountEverest = {
  title:"Mount Everest",
  airport_code:"DEL-sky",
  country:"India",
  city_name:"Himalayas between Nepal and Tibet",
  package_group: "Seven Natural Wonders",
  intro:"On the edge of the Tibetan Plateau stands one of the most impressive of the 7 world wonders, Mount Everest. Like the rest of the Himalayas, Mount Everest rose from the floor of the ancient Tethys Sea. It is considered to be the highest mountain in the world and continues to grow today at the rate of a few millimetres each year. Mount Everest and the Himalayas were traditionally revered by the local people as the homes of the gods and were considered sacred.",
  main_image_url:"/assets/images/mount_everest.png",
  next_image_url:"/assets/images/mount_everest.jpeg",
  weather:"VIDP",
};



//Global explorer package
let london = {
  title:"London",
  airport_code:"LOND-sky",
  country:"United Kingdom",
  city_name:"United Kingdom",
  package_group: "Global Explorer",
  intro:"London, England’s capital, set on the River Thames, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic 'Big Ben' clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.",
  main_image_url:"/assets/images/london.png",
  next_image_url:"/assets/images/london.jpeg",
  weather:"EGLL",
};

let bangkok = {
  title:"Bangkok",
  airport_code:"BKKT-sky",
  country:"Thailand",
  city_name:"Thailand",
  package_group: "Global Explorer",
  intro:"Bangkok, Thailand’s capital, is a sprawling metropolis known for its ornate shrines and vibrant street life. The boat-filled Chao Phraya River feeds its network of canals, flowing past the Rattanakosin royal district, home to the opulent Grand Palace and its sacred Emerald Buddha temple. Nearby is Wat Pho with its enormous reclining Buddha and, on the opposite shore, Wat Arun with its steep steps and Khmer-style spire.",
  main_image_url:"/assets/images/bangkok.png",
  next_image_url:"/assets/images/bangkok.jpeg",
  weather:"EGLL",
};

let paris = {
  title:"Paris",
  airport_code:"PARI-sky",
  country:"France",
  city_name:"France",
  package_group: "Global Explorer",
  intro:"Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its picturesque 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture, and designer boutiques along the Rue du Faubourg Saint-Honoré.",
  main_image_url:"/assets/images/paris.png",
  next_image_url:"/assets/images/paris.jpeg",
  weather:"LFPG",
};

let dubai = {
  title:"Dubai",
  airport_code:"DXBA-sky",
  country:"United Arab Emirates",
  city_name:"United Arab Emirates",
  package_group: "Global Explorer",
  intro:"Dubai is a city in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On man-made islands just offshore is Atlantis, the Palm, a resort with water and marine-animal parks.",
  main_image_url:"/assets/images/dubai.png",
  next_image_url:"/assets/images/dubai.jpeg",
  weather:"OMDB",
};

let istanbul = {
  title:"Istanbul",
  airport_code:"ISTA-sky",
  country:"Turkey",
  city_name:"Turkey",
  package_group: "Global Explorer",
  intro:"Istanbul is a city in Turkey that straddles Europe and Asia across the Bosphorus Strait. The Old City reflects cultural influences of the many empires that once ruled here. In the Sultanahmet district, the open-air, Roman-era Hippodrome was for centuries the site of chariot races, and Egyptian obelisks remain. The iconic Byzantine Hagia Sophia features a soaring dome and Christian mosaics.",
  main_image_url:"/assets/images/istanbul.png",
  next_image_url:"/assets/images/istanbul.jpeg",
  weather:"LTBA",
};

let singapore = {
  title:"Singapore",
  airport_code:"SIN-sky",
  country:"Singapore",
  city_name:"Singapore",
  package_group: "Global Explorer",
  intro:"Singapore, an island city-state off southern Malaysia, is a global financial centre with a tropical climate and multicultural population. In circa-1820 Chinatown stands the red-and-gold Buddha’s Tooth Relic Temple, Little India offers colorful souvenirs and Arab Street is lined with fabric shops. Singapore is also known for eclectic street fare, served in hawker centres such as Tiong Bahru and Maxwell Road.",
  main_image_url:"/assets/images/singapore.png",
  next_image_url:"/assets/images/singapore.jpeg",
  weather:"WSSS",
};

let seoul = {
  title:"Seoul",
  airport_code:"SELA-sky",
  country:"South Korea",
  city_name:"South Korea",
  package_group: "Global Explorer",
  intro:"Seoul, the capital of South Korea, is a sprawling metropolis where hyper-modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets. Notable attractions include futuristic Dongdaemun Design Plaza, a convention hall with curving architecture and a rooftop park; Gyeongbokgung Palace, which once had more than 7,000 rooms; and Jogyesa Temple, site of centuries-old locust and pine trees.",
  main_image_url:"/assets/images/seoul.png",
  next_image_url:"/assets/images/seoul.jpeg",
  weather:"RKSL",
};



// American Cities Package
let losAngeles = {
  title:"Los Angeles",
  airport_code:"LAX-sky",
  country:"United States",
  city_name:"California",
  package_group: "American Cities",
  intro:"Los Angeles is a sprawling Southern California city famed as the center of the nation’s film and television industry. Not far from its iconic Hollywood sign, studios such as Paramount Pictures, Universal and Warner Brothers offer behind-the-scenes tours. On Hollywood Boulevard, TCL Chinese Theater displays celebrities’ hand- and footprints, the Walk of Fame honors thousands of luminaries and vendors sell maps to stars’ homes.",
  main_image_url:"/assets/images/los_angeles.png",
  next_image_url:"/assets/images/los_angeles.jpeg",
  weather:"KLAX",
};

let chicago = {
  title:"Chicago",
  airport_code:"CHIA-sky",
  country:"United States",
  city_name:"Illinois",
  package_group: "American Cities",
  intro:"Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline bristling with skyscrapers such as the iconic John Hancock Center, sleek, 1,451-ft. Willis Tower and neo-Gothic Tribune Tower. The city is also renowned for its museums, including the Art Institute and its expansive collections, including noted Impressionist works.",
  main_image_url:"/assets/images/chicago.png",
  next_image_url:"/assets/images/chicago.jpeg",
  weather:"KORD",
};

let denver = {
  title:"Denver",
  airport_code:"DEN-sky",
  country:"United States",
  city_name:"Colorado",
  package_group: "American Cities",
  intro:"Denver, the capital of Colorado, is an American metropolis dating to the Old West era. Larimer Square, the city’s oldest block, still features landmark 19th-century buildings. Museums include the Denver Art Museum, an ultramodern complex known for its indigenous works collection, and the mansion of famed Titanic survivor Molly Brown. Denver is also a jumping-off point for skiing in the nearby Rocky Mountains.",
  main_image_url:"/assets/images/denver.png",
  next_image_url:"/assets/images/denver.jpeg",
  weather:"KDEN",
};

let lasVegas = {
  title:"Las Vegas",
  airport_code:"LAS-sky",
  country:"United States",
  city_name:"Nevada",
  package_group: "American Cities",
  intro:"Las Vegas, in Nevada’s Mojave Desert, is a resort town famed for its buzzing energy, 24-hour casinos and endless entertainment options. Its focal point is the Strip, just over 4 miles long and lined with elaborate theme hotels such as the pyramid-shaped Luxor and the Venetian, complete with Grand Canal; luxury resorts including the Bellagio, set behind iconic dancing fountains; and innumerable casinos.",
  main_image_url:"/assets/images/las_vegas.png",
  next_image_url:"/assets/images/las_vegas.jpeg",
  weather:"KLAS",
};

let sanFrancisco = {
  title:"San Francisco",
  airport_code:"SFO-sky",
  country:"United States",
  city_name:"California",
  package_group: "American Cities",
  intro:"San Francisco, in northern California, is a city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay. It's known for its hilly landscape, year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses. The Financial District's Transamerica Pyramid is its most distinctive skyscraper. In the bay sits Alcatraz Island, site of the notorious former prison.",
  main_image_url:"/assets/images/san_francisco.png",
  next_image_url:"/assets/images/san_francisco.jpeg",
  weather:"KSFO",
};

let newYork = {
  title:"New York",
  airport_code:"NYCA-sky",
  country:"United States",
  city_name:"New York",
  package_group: "American Cities",
  intro:"Home to the Empire State Building, Times Square, Statue of Liberty and other iconic sites, New York City is a fast-paced, globally influential center of art, culture, fashion and finance. The city’s 5 boroughs sit where the Hudson River meets the Atlantic Ocean, with the island borough of Manhattan at the Big Apple's core.",
  main_image_url:"/assets/images/new_york.png",
  next_image_url:"/assets/images/new_york.jpeg",
  weather:"KLGA",
};

let miami = {
  title:"Miami",
  airport_code:"MIAA-sky",
  country:"United States",
  city_name:"Florida",
  package_group: "American Cities",
  intro:"Miami, at Florida's southeastern tip, is a vibrant city whose Cuban influence is reflected in the cafes and cigar shops that line Calle Ocho in Little Havana. Miami Beach, on barrier islands across the turquoise waters of Biscayne Bay, is home to glamorous South Beach, famed for its colorful art deco buildings, white sand, surfside hotels and trendsetting nightclubs.",
  main_image_url:"/assets/images/miami.png",
  next_image_url:"/assets/images/miami.jpeg",
  weather:"KMIA",
};


// Foodie Cities package
let tokoyo = {
  title:"Tokoyo",
  airport_code:"TYOA-sky",
  country:"Japan",
  city_name:"Tokoyo",
  package_group: "Foodie Cities",
  intro:"Tokyo, Japan’s bustling capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers and anime shops to cherry trees and temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding forests. The Imperial Palace sits amid sprawling public gardens. The city is famed for its vibrant food scene, and its Shibuya and Harajuku districts are the heart of its trendy teen fashion scene.",
  main_image_url:"/assets/images/tokoyo.png",
  next_image_url:"/assets/images/tokoyo.jpeg",
  weather:"",
};

let paris = {
  title:"Paris",
  airport_code:"PARI-sky",
  country:"France",
  city_name:"France",
  package_group: "Global Explorer",
  intro:"Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its picturesque 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture, and designer boutiques along the Rue du Faubourg Saint-Honoré.",
  main_image_url:"/assets/images/paris.png",
  next_image_url:"/assets/images/paris.jpeg",
  weather:"LFPG",
};

let hongKong = {
  title:"Hong Kong",
  airport_code:"HKG-sky",
  country:"Hong Kong",
  city_name:"Hong Kong",
  package_group: "American Cities",
  intro:"Hong Kong is a city, and former British colony, in southeastern China. Vibrant and densely populated, it’s a major port and global financial center famed for its tower-studded skyline. It’s also known for its lively food scene – from Cantonese dim sum to extravagant high tea – and its shopping, with options spanning chaotic Temple Street Night Market to the city’s innumerable bespoke tailors.",
  main_image_url:"/assets/images/hong_kong.png",
  next_image_url:"/assets/images/hong_kong.jpeg",
  weather:"",
};

let newYork = {
  title:"New York",
  airport_code:"NYCA-sky",
  country:"United States",
  city_name:"New York",
  package_group: "American Cities",
  intro:"Home to the Empire State Building, Times Square, Statue of Liberty and other iconic sites, New York City is a fast-paced, globally influential center of art, culture, fashion and finance. The city’s 5 boroughs sit where the Hudson River meets the Atlantic Ocean, with the island borough of Manhattan at the Big Apple's core.",
  main_image_url:"/assets/images/new_york.png",
  next_image_url:"/assets/images/new_york.jpeg",
  weather:"KLGA",
};

let florence= {
  title:"Florence",
  airport_code:"FLR-sky",
  country:"Italy",
  city_name:"Italy",
  package_group: "Foodie Cities",
  intro:"Florence, capital of Italy’s Tuscany region and birthplace of the Renaissance, is home to masterpieces of art and architecture. One of its most iconic sites is the Florence Cathedral, with its terra-cotta-tiled dome engineered by Brunelleschi and bell tower designed by Giotto. The Galleria dell'Accademia displays Michelangelo’s “David,” while the Uffizi Gallery exhibits preeminent works such as Botticelli’s “The Birth of Venus” and da Vinci’s Annunciation.",
  main_image_url:"/assets/images/florence.png",
  next_image_url:"/assets/images/florence.jpeg",
  weather:"",
};

let berlin = {
  title:"Berlin",
  airport_code:"BERL-sky",
  country:"Germany",
  city_name:"Germany",
  package_group: "Foodie Cities",
  intro:"Berlin, Germany’s capital and cultural center, dates to the 13th century. Divided during the Cold War, today it's known for its art scene, nightlife and modern architecture, such as Mies van der Rohe’s landmark Neue Nationalgalerie. Reminders of the city's turbulent 20th-century history include its Holocaust Memorial and the Berlin Wall's graffitied remains. Its 18th-century Brandenburg Gate has become an iconic symbol of reunification.",
  main_image_url:"/assets/images/berlin.png",
  next_image_url:"/assets/images/berlin.jpeg",
  weather:"",
};

let lima = {
  title:"Lima",
  airport_code:"LIM-sky",
  country:"Peru",
  city_name:"Peru",
  package_group: "Foodie Cities",
  intro:"Lima, the capital of Peru, sits on the country's arid Pacific coast. Though its colonial center is well preserved, today Lima is a bustling metropolis that's one of South America’s largest cities. It’s known for its vibrant food scene, encompassing specialties from ceviche and traditional coastal cooking to refined global fare. It's also home to the preeminent Museo Larco collection of pre-Columbian art and the Museo de la Nación, tracing the history of Peru’s ancient civilizations.",
  main_image_url:"/assets/images/lima.png",
  next_image_url:"/assets/images/lima.jpeg",
  weather:"KMIA",
};


// Party Islands
let maui = {
  title:"Maui",
  airport_code:"OGG-sky",
  country:"United States",
  city_name:"Hawaii",
  package_group: "Party Islands",
  intro:"Maui is an island in the mid-Pacific, part of the Hawaiian island chain and known for its beach resorts, diverse geography and outdoor activities ranging from hiking and biking to windsurfing and snorkeling. Sprawling Haleakala National Park encompasses the island’s highest peak, Mt. Haleakala, as well as the pools and waterfalls of Oheo Gulch, accessed via scenic, winding Hana Highway.",
  main_image_url:"/assets/images/maui.png",
  next_image_url:"/assets/images/maui.jpeg",
  weather:"",
};

let fiji = {
  title:"Fiji",
  airport_code:"NAN-sky",
  country:"Fiji",
  city_name:"South Pacific",
  package_group: "Party Islands",
  intro:"Fiji, a country in the South Pacific, is an archipelago of more than 300 islands. It's famed for its rugged landscape of blue lagoons and palm-lined beaches, and eco-activities from mountain climbing and surfing to soft-coral diving and zip-lining. Its major islands, Viti Levu and Vanua Levu, contain the lion’s share of the population, meaning much of the country is uncrowded.",
  main_image_url:"/assets/images/fiji.png",
  next_image_url:"/assets/images/fiji.jpeg",
  weather:"",
};

let mykonos = {
  title:"Mykonos",
  airport_code:"JMK-sky",
  country:"Greece",
  city_name:"Greece",
  package_group: "Party Islands",
  intro:"Mykonos, part of the Cyclades island group in the Aegean Sea, is one of the most popular and glamorous Greek isles, known for its nonstop party atmosphere. Beaches such as Paradise and Super Paradise welcome a diverse crowd, with sandside bars that blare thumping music. Massive dance clubs attract world-renowned DJs and typically stay open well past dawn.",
  main_image_url:"/assets/images/mykonos.png",
  next_image_url:"/assets/images/mykonos.jpeg",
  weather:"",
};

let kophiphi = {
  title:"Ko Phi Phi",
  airport_code:"BKKT-sky",
  country:"Thailand",
  city_name:"Thailand",
  package_group: "Party Islands",
  intro:"The Phi Phi Islands are in Thailand, between the large island of Phuket and the west Strait of Malacca coast of the mainland. The islands are administratively part of Krabi province.",
  main_image_url:"/assets/images/kophiphi.png",
  next_image_url:"/assets/images/kophiphi.jpeg",
  weather:"",
};

let ibiza = {
  title:"Ibiza",
  airport_code:"IBZ-sky",
  country:"Spain",
  city_name:"Spain",
  package_group: "Party Islands",
  intro:"Ibiza is one of the Balearic islands in the Mediterranean Sea. It's well-known for the lively nightlife scene in Ibiza Town and Sant Antoni, where major European nightclubs have summer outposts. It’s also home to quiet villages, yoga retreats and beaches, from Platja d'en Bossa, lined with hotels, bars and shops, to quieter sandy coves backed by pine-clad hills found all around the coastline.",
  main_image_url:"/assets/images/ibiza.png",
  next_image_url:"/assets/images/ibiza.jpeg",
  weather:"",
};

let aruba = {
  title:"Aruba",
  airport_code:"AUA-sky",
  country:"Aruba",
  city_name:"",
  package_group: "Party Islands",
  intro:"Aruba, a tiny Dutch Caribbean island off the coast of Venezuela, has dry, sunny weather, blond beaches and gentle surf. Constant trade winds keep things cool and cause the divi-divi trees to slope southwesterly. European influence shows in both its architecture, in which Dutch gables mingle with tropical pastels, and language, with English, Dutch and Spanish spoken alongside the local tongue, Papiamento.",
  main_image_url:"/assets/images/aruba.png",
  next_image_url:"/assets/images/aruba.jpeg",
  weather:"KMIA",
};

let cayman = {
  title:"Grand Cayman Island",
  airport_code:"GCM-sky",
  country:"Grand Cayman Island",
  city_name:"Cayman Island",
  package_group: "Party Islands",
  intro:"Grand Cayman is the largest of the Cayman Islands, the British Caribbean territory. George Town, its capital, is home to the Cayman Islands National Museum, dedicated to Caymanian heritage, and the ruins of colonial-era Fort George. At the island’s centre is the Mastic Reserve and Trail, a footpath through old-growth forest, sheltering a wide variety of native plants and animals.",
  main_image_url:"/assets/images/cayman.png",
  next_image_url:"/assets/images/cayman.jpeg",
  weather:"",
};






let destinationsArray = [petra, christTheRedeemer, colosseum, tajMahal, chichenItza, theGreatWall, machuPicchu, victoriaFalls, rioHarbor, northernLights, grandCanyon, greatBarrierReef, paricutin, mountEverest, london, bangkok, paris, dubai, istanbul, singapore, seoul, losAngeles, chicago, denver, lasVegas, sanFrancisco, newYork, miami, tokoyo, hongKong, florence, berlin, lima, maui, fiji, mykonos, kophiphi, ibiza, aruba, cayman];

//returns an array of unique destination airports
// let destinationAirportArray = destinationsArray
//   .map( (dest) => {
//     return dest.airport_code
//   })
//   .reduce( (prev, curr, ind) => {
//     if(prev.includes(curr)){
//       return prev
//     }
//     else{
//       prev.push(curr);
//       return prev;
//     }
//   }, [])


// insert destination into destinations database
knex.insertDestination = function(destinationObject) {
    return knex('destinations').insert(destinationObject);
}

function populateDestinations() {
  Promise.all(destinationsArray
    .map(function (destination) {
      return knex.insertDestination(destination);
    }))
    .then(function () {
      console.log("Inserted all " + destinationsArray.length + " destinations");
    })
    .catch(function(error) {
      console.log("There was an error inserting all " + destinationsArray.length + " destinations:", error);
    })
    .then(knex.closeDb)
}

knex.truncateTable('destinations');
populateDestinations()





