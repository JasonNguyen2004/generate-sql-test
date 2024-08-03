const HEADLINERS = [
  "Usher",
  "Jack Black",
  "Big X Tha Plug",
  "Too $hort",
  "Blink 182",
  "Widespread Panic",
  "Dead and Company",
  "Arctic Monkeys",
  "Florence and the Machine",
  "Tame Impala",
  "Kendrick Lamar",
  "Billie Eilish",
  "The Weeknd",
  "Rage Against the Machine",
  "Mumford & Sons",
  "Post Malone",
  "Tyler, the Creator",
  "Lorde",
  "J. Cole",
  "The Chainsmokers",
  "Kacey Musgraves",
  "The Black Keys",
  "Anderson .Paak",
  "Cardi B",
  "Twenty One Pilots",
  "Travis Scott",
  "SZA",
  "Hozier",
  "Lizzo",
  "Shawn Mendes",
  "Lana Del Rey",
  "Childish Gambino",
  "Panic! At the Disco",
  "Ariana Grande",
  "Foo Fighters",
  "Green Day",
  "Ed Sheeran",
  "Kanye West",
  "Coldplay",
  "Drake",
  "Taylor Swift",
  "Bruno Mars",
  "Justin Bieber",
  "Imagine Dragons",
  "Beyoncé",
  "Jay-Z",
  "Rihanna",
  "Eminem",
  "Red Hot Chili Peppers",
  "Metallica",
  "Pearl Jam",
  "The Rolling Stones",
  "U2",
  "Queen",
  "Adele",
  "Fleetwood Mac",
  "Nirvana",
  "The Beatles",
  "Led Zeppelin",
  "David Bowie",
  "Bob Marley",
  "Elton John",
  "Prince",
  "Michael Jackson",
  "Whitney Houston",
  "Mariah Carey",
  "Celine Dion",
  "Alicia Keys",
  "Stevie Wonder",
  "Phil Collins",
  "Bruce Springsteen",
  "Billy Joel",
  "Paul McCartney",
  "Neil Young",
  "Tom Petty",
  "Janis Joplin",
  "Jimi Hendrix",
  "Aretha Franklin",
  "Ray Charles",
  "James Brown",
  "Elvis Presley",
  "Bob Dylan",
  "Johnny Cash",
  "Frank Sinatra",
  "Louis Armstrong",
  "Ella Fitzgerald",
  "Duke Ellington",
  "B.B. King",
  "Chuck Berry",
  "Little Richard",
  "Fats Domino",
  "Buddy Holly",
  "Patsy Cline",
  "Hank Williams",
  "Woody Guthrie",
  "Bill Monroe",
  "Muddy Waters",
  "Howlin' Wolf",
  "John Lee Hooker",
  "Lightnin' Hopkins",
  "Robert Johnson",
  "Son House",
  "Charley Patton",
  "Bessie Smith",
  "Ma Rainey",
  "Big Mama Thornton",
  "Sister Rosetta Tharpe",
  "Mahalia Jackson",
  "Pinetop Perkins",
  "Otis Redding",
  "Sam Cooke",
  "Wilson Pickett",
  "Marvin Gaye",
  "Smokey Robinson",
  "The Supremes",
  "The Temptations",
  "The Four Tops",
  "Gladys Knight & the Pips",
  "Diana Ross",
  "Tina Turner",
  "Al Green",
  "Curtis Mayfield",
  "Isaac Hayes",
  "James Taylor",
  "Crosby, Stills, Nash & Young",
  "Simon & Garfunkel",
  "The Byrds",
  "Buffalo Springfield",
  "Jefferson Airplane",
  "The Grateful Dead",
  "Santana",
  "The Doors",
  "The Beach Boys",
  "The Mamas & the Papas",
  "The Monkees",
  "The Turtles",
  "The Zombies",
  "The Hollies",
  "The Animals",
  "The Kinks",
  "The Who",
  "Cream",
  "Blind Faith",
  "Derek and the Dominos",
  "Traffic",
  "The Yardbirds",
  "The Small Faces",
  "Faces",
  "The Spencer Davis Group",
  "Procol Harum",
  "Jethro Tull",
  "Yes",
  "Genesis",
  "King Crimson",
  "Emerson, Lake & Palmer",
  "Rush",
  "Deep Purple",
  "Black Sabbath",
  "Judas Priest",
  "Iron Maiden",
  "Motorhead",
  "Def Leppard",
  "Van Halen",
  "Bon Jovi",
  "Guns N' Roses",
  "Aerosmith",
  "KISS",
  "Alice Cooper",
  "Cheap Trick",
  "ZZ Top",
  "Lynyrd Skynyrd",
  "The Allman Brothers Band",
  "The Marshall Tucker Band",
  "38 Special",
  "Molly Hatchet",
  "Outlaws",
  "Blackfoot",
  "Atlanta Rhythm Section",
  "Little Feat",
  "The Doobie Brothers",
  "Steely Dan",
  "Chicago",
  "Blood, Sweat & Tears",
  "Earth, Wind & Fire",
  "Sly & the Family Stone",
  "Parliament-Funkadelic",
  "The Isley Brothers",
  "Kool & the Gang",
  "Cameo",
  "The Gap Band",
  "Zapp",
  "Rick James",
  "Prince & The Revolution",
  "The Time",
  "Morris Day",
  "Sheila E.",
  "Vanity 6",
  "Apollonia 6",
  "Ready for the World",
  "Lisa Lisa & Cult Jam",
  "Expose",
  "The Jets",
  "Nu Shooz",
  "Taylor Dayne",
  "Debbie Gibson",
  "Tiffany",
  "Martika",
  "Madonna",
  "Cyndi Lauper",
  "Pat Benatar",
  "Joan Jett",
  "Heart",
  "Blondie",
  "The Go-Go's",
  "The Bangles",
  "Bananarama",
  "Salt-N-Pepa",
  "MC Lyte",
  "Queen Latifah",
  "Roxanne Shante",
  "Eve",
  "Missy Elliott",
  "Lil' Kim",
  "Foxy Brown",
  "Trina",
  "Nicki Minaj",
  "Cardi B",
  "Megan Thee Stallion",
  "Saweetie",
  "Doja Cat",
  "City Girls",
  "Mulatto",
  "JT",
  "Lizzo",
  "Teyana Taylor",
  "Janelle Monáe",
  "Solange",
  "H.E.R.",
  "SZA",
  "Kehlani",
  "Summer Walker",
  "Jazmine Sullivan",
  "Ari Lennox",
  "Ella Mai",
  "Normani",
  "Tinashe",
  "JoJo",
  "Ashanti",
  "Mýa",
  "Brandy",
  "Monica",
  "Toni Braxton",
  "Mary J. Blige",
  "Aaliyah",
  "Lauryn Hill",
  "Faith Evans",
  "TLC",
  "SWV",
  "En Vogue",
  "Xscape",
  "702",
  "Total",
  "Changing Faces",
  "Brownstone",
  "Zhane",
  "Jade",
  "Mokenstef",
  "Kut Klose",
  "Escape",
  "T-Boz",
  "Chilli",
  "Left Eye",
  "Destiny's Child",
  "Beyoncé",
  "Kelly Rowland",
  "Michelle Williams",
  "Solange Knowles",
  "Chloe x Halle",
  "H.E.R.",
  "Ella Mai",
  "Sabrina Claudio",
  "Kali Uchis",
  "Tinashe",
  "Normani",
  "Kehlani",
  "Jhene Aiko",
  "SZA",
  "Jorja Smith",
  "Kiana Ledé",
  "Alina Baraz",
  "Kiana Ledé",
  "Raveena",
  "Mahalia",
  "Joy Crookes",
  "Nilufer Yanya",
  "FKA twigs",
  "Arlo Parks",
  "Celeste",
  "Nao",
  "Lianne La Havas",
  "Corinne Bailey Rae",
  "Jessie Ware",
  "Laura Mvula",
  "Emeli Sandé",
  "Joss Stone",
  "Amy Winehouse",
  "Duffy",
  "Gabrielle",
  "Adele",
  "Dua Lipa",
  "Ellie Goulding",
  "Jess Glynne",
  "Rita Ora",
  "Anne-Marie",
  "Mabel",
  "Freya Ridings",
  "Birdy",
  "Rina Sawayama",
  "Sigrid",
  "Aurora",
  "Astrid S",
  "Zara Larsson",
  "Tove Lo",
  "Robyn",
  "Icona Pop",
  "Lykke Li",
  "First Aid Kit",
  "Maggie Rogers",
  "Clairo",
  "Phoebe Bridgers",
  "Lucy Dacus",
  "Julien Baker",
  "Mitski",
  "Japanese Breakfast",
  "Soccer Mommy",
  "Snail Mail",
  "Jay Som",
  "Hatchie",
  "Beach Bunny",
  "Charly Bliss",
  "The Beths",
  "Middle Kids",
  "Wolf Alice",
  "Shame",
  "IDLES",
  "Fontaines D.C.",
  "The Murder Capital",
  "Sleaford Mods",
  "Squid",
  "Dry Cleaning",
  "Goat Girl",
  "Black Midi",
  "Black Country, New Road",
  "Porridge Radio",
  "Sorry",
  "Girl Band",
  "Viagra Boys",
  "Protomartyr",
  "Preoccupations",
  "METZ",
  "Tropical Fuck Storm",
  "Amyl and the Sniffers",
  "King Gizzard & The Lizard Wizard",
  "Pond",
  "Tame Impala",
  "Cut Copy",
  "The Avalanches",
  "Empire of the Sun",
  "Flight Facilities",
  "RÜFÜS DU SOL",
  "Courtney Barnett",
  "The Jezabels",
  "DMA's",
  "Rolling Blackouts Coastal Fever",
  "Middle Kids",
  "Julia Jacklin",
  "Angie McMahon",
  "Gordi",
  "Ainslie Wills",
  "Alex the Astronaut",
  "Tia Gostelow",
  "Mallrat",
  "G Flip",
  "Vera Blue",
  "Meg Mac",
  "Ngaiire",
  "Kira Puru",
  "Thelma Plum",
  "Montaigne",
  "Odette",
  "Stella Donnelly",
  "Eves Karydas",
  "Jack River",
  "Baker Boy",
  "Jessica Mauboy",
  "The Veronicas",
  "Missy Higgins",
  "Delta Goodrem",
  "Kylie Minogue",
  "Natalie Imbruglia",
  "Olivia Newton-John",
  "Tina Arena",
  "Vanessa Amorosi",
  "Kate Ceberano",
  "Christine Anu",
  "Sia",
  "Gotye",
  "Vance Joy",
  "Dean Lewis",
  "Matt Corby",
  "Guy Sebastian",
  "Shannon Noll",
  "Jessica Mauboy",
  "Rick Springfield",
  "Air Supply",
  "Men at Work",
  "INXS",
  "AC/DC",
  "The Easybeats",
  "Cold Chisel",
  "Midnight Oil",
  "Powderfinger",
  "Silverchair",
  "Grinspoon",
  "Eskimo Joe",
];

const VENUES = [
  {
    venue: "Fort Idaho Center",
    city: "Nampa",
    stateCode: "ID",
  },
  {
    venue: "Legacy Arena at The BJCC",
    city: "Birmingham",
    stateCode: "AL",
  },
  {
    venue: "Madison Square Garden",
    city: "New York",
    stateCode: "NY",
  },
  {
    venue: "Staples Center",
    city: "Los Angeles",
    stateCode: "CA",
  },
  {
    venue: "United Center",
    city: "Chicago",
    stateCode: "IL",
  },
  {
    venue: "American Airlines Arena",
    city: "Miami",
    stateCode: "FL",
  },
  {
    venue: "The O2 Arena",
    city: "London",
    stateCode: "UK",
  },
  {
    venue: "Tokyo Dome",
    city: "Tokyo",
    stateCode: "JP",
  },
  {
    venue: "Wembley Stadium",
    city: "London",
    stateCode: "UK",
  },
  {
    venue: "Mercedes-Benz Stadium",
    city: "Atlanta",
    stateCode: "GA",
  },
  {
    venue: "AT&T Stadium",
    city: "Arlington",
    stateCode: "TX",
  },
  {
    venue: "Rod Laver Arena",
    city: "Melbourne",
    stateCode: "AU",
  },
  {
    venue: "Allianz Arena",
    city: "Munich",
    stateCode: "DE",
  },
  {
    venue: "Scotiabank Arena",
    city: "Toronto",
    stateCode: "CA",
  },
  {
    venue: "AccorHotels Arena",
    city: "Paris",
    stateCode: "FR",
  },
  {
    venue: "SAP Center",
    city: "San Jose",
    stateCode: "CA",
  },
  {
    venue: "Barclays Center",
    city: "Brooklyn",
    stateCode: "NY",
  },
  {
    venue: "TD Garden",
    city: "Boston",
    stateCode: "MA",
  },
  {
    venue: "Chase Center",
    city: "San Francisco",
    stateCode: "CA",
  },
  {
    venue: "MGM Grand Garden Arena",
    city: "Las Vegas",
    stateCode: "NV",
  },
  {
    venue: "Rogers Arena",
    city: "Vancouver",
    stateCode: "BC",
  },
  {
    venue: "Wells Fargo Center",
    city: "Philadelphia",
    stateCode: "PA",
  },
  {
    venue: "Vivint Smart Home Arena",
    city: "Salt Lake City",
    stateCode: "UT",
  },
  {
    venue: "Fiserv Forum",
    city: "Milwaukee",
    stateCode: "WI",
  },
  {
    venue: "Moda Center",
    city: "Portland",
    stateCode: "OR",
  },
  {
    venue: "KeyBank Center",
    city: "Buffalo",
    stateCode: "NY",
  },
  {
    venue: "PNC Arena",
    city: "Raleigh",
    stateCode: "NC",
  },
  {
    venue: "Capital One Arena",
    city: "Washington",
    stateCode: "DC",
  },
  {
    venue: "Pepsi Center",
    city: "Denver",
    stateCode: "CO",
  },
  {
    venue: "Amalie Arena",
    city: "Tampa",
    stateCode: "FL",
  },
];

const HIGH_RISK_MESSAGES = [
  "Artist or venue hates brokers!",
  "Less than 48hrs to event start!",
  "Out of state orders are likely to be cancelled!",
];

const STOCK_TYPES = [
  "Hard",
  "Paperless",
  "Paperless Card",
  "Mobile Transfer",
  "Mobile QR",
  "Electronic",
];

const BOX_OFFICES = ["TicketMaster", "AXS", "SeatGeek", "TickPick"];

const FIRST_NAMES = [
  "Liam",
  "Noah",
  "William",
  "James",
  "Logan",
  "Benjamin",
  "Mason",
  "Elijah",
  "Oliver",
  "Jacob",
  "Lucas",
  "Michael",
  "Alexander",
  "Ethan",
  "Daniel",
  "Matthew",
  "Aiden",
  "Henry",
  "Joseph",
  "Jackson",
  "Samuel",
  "Sebastian",
  "David",
  "Carter",
  "Wyatt",
  "Jayden",
  "John",
  "Owen",
  "Dylan",
  "Luke",
  "Gabriel",
  "Anthony",
  "Isaac",
  "Grayson",
  "Jack",
  "Julian",
  "Levi",
  "Christopher",
  "Joshua",
  "Andrew",
  "Lincoln",
  "Mateo",
  "Ryan",
  "Jaxon",
  "Nathan",
  "Aaron",
  "Isaiah",
  "Thomas",
  "Charles",
  "Caleb",
  "Josiah",
  "Christian",
  "Hunter",
  "Eli",
  "Jonathan",
  "Connor",
  "Landon",
  "Adrian",
  "Asher",
  "Cameron",
  "Leo",
  "Theodore",
  "Jeremiah",
  "Hudson",
  "Robert",
  "Easton",
  "Nolan",
  "Nicholas",
  "Ezra",
  "Colton",
  "Angel",
  "Brayden",
  "Jordan",
  "Dominic",
  "Austin",
  "Ian",
  "Adam",
  "Elias",
  "Jaxson",
  "Greyson",
  "Jose",
  "Ezekiel",
  "Carson",
  "Evan",
  "Maverick",
  "Bryson",
  "Jace",
  "Cooper",
  "Xavier",
  "Parker",
  "Roman",
  "Jason",
  "Santiago",
  "Chase",
  "Sawyer",
  "Gavin",
  "Leonardo",
  "Kayden",
  "Ayden",
  "Jameson",
  "Bentley",
  "Zachary",
  "Everett",
  "Axel",
  "Wesley",
  "Micah",
  "Vincent",
  "Miles",
  "Wesley",
  "Nathaniel",
  "Harrison",
  "Declan",
  "Weston",
  "Ryder",
  "Cole",
  "Waylon",
  "Brooks",
  "Silas",
  "Bryce",
  "Emmett",
  "Rhett",
  "Sawyer",
  "Graham",
  "Beau",
  "Dawson",
  "Milo",
  "Cash",
  "Ashton",
  "Tyler",
  "Zion",
  "Bennett",
  "Brody",
  "Ace",
  "Tanner",
  "Rowan",
  "Paxton",
  "Rylan",
  "Maxwell",
  "Camden",
  "Carlos",
  "Emma",
  "Olivia",
  "Ava",
  "Isabella",
  "Sophia",
  "Mia",
  "Amelia",
  "Harper",
  "Evelyn",
  "Abigail",
  "Emily",
  "Ella",
  "Elizabeth",
  "Camila",
  "Luna",
  "Sofia",
  "Avery",
  "Mila",
  "Aria",
  "Scarlett",
  "Penelope",
  "Layla",
  "Chloe",
  "Victoria",
  "Madison",
  "Eleanor",
  "Grace",
  "Nora",
  "Riley",
  "Zoey",
  "Hannah",
  "Hazel",
  "Lily",
  "Ellie",
  "Violet",
  "Lillian",
  "Zoe",
  "Stella",
  "Aurora",
  "Natalie",
  "Emilia",
  "Everly",
  "Leah",
  "Aubrey",
  "Willow",
  "Addison",
  "Lucy",
  "Audrey",
  "Bella",
  "Nova",
  "Brooklyn",
  "Paisley",
  "Savannah",
  "Claire",
  "Skylar",
  "Isla",
  "Genesis",
  "Naomi",
  "Elena",
  "Caroline",
  "Eliana",
  "Anna",
  "Maya",
  "Valentina",
  "Ruby",
  "Kennedy",
  "Ivy",
  "Ariana",
  "Aaliyah",
  "Cora",
  "Madelyn",
  "Alice",
  "Kinsley",
  "Hailey",
  "Gabriella",
  "Allison",
  "Gianna",
  "Serenity",
  "Samantha",
  "Sarah",
  "Autumn",
  "Quinn",
  "Eva",
  "Piper",
  "Sophie",
  "Sadie",
  "Delilah",
  "Josephine",
  "Nevaeh",
  "Adeline",
  "Arya",
  "Emery",
  "Lydia",
  "Clara",
  "Vivian",
  "Madeline",
  "Peyton",
  "Julia",
  "Rylee",
  "Brielle",
  "Reagan",
  "Natalia",
  "Jade",
  "Athena",
  "Maria",
  "Leilani",
  "Everleigh",
  "Liliana",
  "Melanie",
  "Mackenzie",
];

const LAST_NAMES = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Perez",
  "Thompson",
  "White",
  "Harris",
  "Sanchez",
  "Clark",
  "Ramirez",
  "Lewis",
  "Robinson",
  "Walker",
  "Young",
  "Allen",
  "King",
  "Wright",
  "Scott",
  "Torres",
  "Nguyen",
  "Hill",
  "Flores",
  "Green",
  "Adams",
  "Nelson",
  "Baker",
  "Hall",
  "Rivera",
  "Campbell",
  "Mitchell",
  "Carter",
  "Roberts",
  "Gomez",
  "Phillips",
  "Evans",
  "Turner",
  "Diaz",
  "Parker",
  "Cruz",
  "Edwards",
  "Collins",
  "Reyes",
  "Stewart",
  "Morris",
  "Morales",
  "Murphy",
  "Cook",
  "Rogers",
  "Gutierrez",
  "Ortiz",
  "Morgan",
  "Cooper",
  "Peterson",
  "Bailey",
  "Reed",
  "Kelly",
  "Howard",
  "Ramos",
  "Kim",
  "Cox",
  "Ward",
  "Richardson",
  "Watson",
  "Brooks",
  "Chavez",
  "Wood",
  "James",
  "Bennett",
  "Gray",
  "Mendoza",
  "Ruiz",
  "Hughes",
  "Price",
  "Alvarez",
  "Castillo",
  "Sanders",
  "Patel",
  "Myers",
  "Long",
  "Ross",
  "Foster",
  "Jimenez",
  "Powell",
  "Jenkins",
  "Perry",
  "Russell",
  "Sullivan",
  "Bell",
  "Coleman",
  "Butler",
  "Henderson",
  "Barnes",
  "Gonzales",
  "Fisher",
  "Vasquez",
  "Simmons",
  "Romero",
  "Jordan",
  "Patterson",
  "Alexander",
  "Hamilton",
  "Graham",
  "Reynolds",
  "Griffin",
  "Wallace",
  "Moreno",
  "West",
  "Cole",
  "Hayes",
  "Bryant",
  "Herrera",
  "Gibson",
  "Ellis",
  "Tran",
  "Medina",
  "Aguilar",
  "Stevens",
  "Murray",
  "Ford",
  "Castro",
  "Marshall",
  "Owens",
  "Harrison",
  "Fernandez",
  "Mcdonald",
  "Woods",
  "Washington",
  "Kennedy",
  "Wells",
  "Vargas",
  "Henry",
  "Chen",
  "Freeman",
  "Webb",
  "Tucker",
  "Guzman",
  "Burns",
  "Crawford",
  "Olson",
  "Simpson",
  "Porter",
  "Hunter",
  "Gordon",
  "Mendez",
  "Silva",
  "Shaw",
  "Snyder",
  "Mason",
  "Dixon",
  "Munoz",
  "Hunt",
  "Hicks",
  "Holmes",
  "Palmer",
  "Wagner",
  "Black",
  "Robertson",
  "Boyd",
  "Rose",
  "Stone",
  "Salazar",
  "Fox",
  "Warren",
  "Mills",
  "Meyer",
  "Rice",
  "Schmidt",
  "Garza",
  "Daniels",
  "Ferguson",
  "Nichols",
  "Stephens",
];

const SEAT_NOTES = ["Full View", "Obstructed View", "Aisle Seats", "TV view"];

const SEAT_SECTIONS = [
  100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
  115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
  130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 200, 201, 202, 203,
  204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218,
  219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233,
  234, 235, 236, 237, 238, 239, 240, 300, 301, 302, 303, 304, 305, 306, 307,
  308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322,
  323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337,
  338, 339, 340, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411,
  412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426,
  427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 500,
  501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515,
  516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530,
  531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 600, 601, 602, 603, 604,
  605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619,
  620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634,
  635, 636, 637, 638, 639, 640, 700, 701, 702, 703, 704, 705, 706, 707, 708,
  709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723,
  724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738,
  739, 740, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812,
  813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827,
  828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840,
];

const STATUSES = [
  "New",
  "Delivery Not Available",
  "Rotating Barcodes",
  "Pending Box Office Email",
  "Flipper Waiting on Tickets",
  "Problem",
  "Postponed",
  "Barcodes Attached",
  "Barcodes Locked",
  "Listed For Resale",
  "Auto Transferred",
  "Refund Requested",
  "Transferred",
  "Transferred By Barcode",
  "Shipped to Seller",
  "Shipped to Customer",
  "Office Pickup",
  "Will Call Name Change",
  "Accepted",
  "Not For Sale",
  "Invoice Cancelled",
  "Event Cancelled",
  "Tickets Cancelled",
  "Flipper Has Tickets",
  "Tickets at Uflip",
  "Waiting for Instruction",
  "Cancelled",
  "Delayed",
  "In Progress",
  "Needs Input",
  "Refunded",
];

const SAMPLE_NOTES = [
  "Stock verified and marked ready for shipping.",
  "Minor issue detected and resolved with inventory.",
  "All items scanned and confirmed, no discrepancies.",
  "Delayed shipment received and processed.",
  "Customer issue with ticket resolved, new ticket issued.",
  "Order processed and all items confirmed.",
  "Quality check completed, items in good condition.",
  "Technical issue with QR codes fixed and reprinted.",
  "Inventory count verified against records, all matched.",
  "Discrepancy found during check, under review.",
  "Tickets for specific section verified and ready.",
  "Purchase order completed, all items accounted for.",
  "Customer requested ticket exchange, completed.",
  "Tickets confirmed for upcoming event, no further issues.",
  "Stock level low, flagged for replenishment.",
  "Reported issue with mobile ticket, resolved.",
  "Order completed and dispatched to customer.",
  "Customer feedback received, no delivery issues.",
  "Inventory audit completed, records updated.",
  "Manual validation required for some items, processed.",
];

const MEMBERS = [
  {
    id: "aradtorres_20240619T124500Z",
    name: "Arad Torres",
    email: "aradtorres@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/aradtorres.jpg",
  },
  {
    id: "adamsprague_20240619T124500Z",
    name: "Adam Sprague",
    email: "adamsprague@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/adamsprague.jpg",
  },
  {
    id: "jorgeabundizperez_20240619T124500Z",
    name: "Jorge Abundiz-Perez",
    email: "jorgeabundizperez@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/jorgeabundizperez.jpg",
  },
  {
    id: "jasonnguyen_20240619T124500Z",
    name: "Jason Nguyen",
    email: "jasonnguyen@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/jasonnguyen.jpg",
  },
  {
    id: "davidlamar_20240619T124500Z",
    name: "David La Mar",
    email: "davidlamar@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/davidlamar.jpg",
  },
  {
    id: "jonahjackson_20240619T124500Z",
    name: "Jonah Jackson",
    email: "jonahjackson@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/jonahjackson.jpg",
  },
  {
    id: "brandongallaway_20240619T124500Z",
    name: "Brandon Gallaway",
    email: "brandongallaway@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/brandongallaway.jpg",
  },
  {
    id: "austenmeier_20240619T124500Z",
    name: "Austen Meier",
    email: "austenmeier@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/austenmeier.jpg",
  },
  {
    id: "joshmartin_20240619T124500Z",
    name: "Josh Martin",
    email: "joshmartin@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/joshmartin.jpg",
  },
  {
    id: "peterparker_20240619T124500Z",
    name: "Peter Parker",
    email: "spidey_87@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/peterparker.jpg",
  },
  {
    id: "sarawilliams_20240619T124500Z",
    name: "Sara Williams",
    email: "swill11@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/sarawilliams.jpg",
  },
  {
    id: "markjohnson_20240619T124500Z",
    name: "Mark Johnson",
    email: "markjohnson007@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/markjohnson.jpg",
  },
  {
    id: "davidbrown_20240619T124500Z",
    name: "David Brown",
    email: "dbrown_2023@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/davidbrown.jpg",
  },
  {
    id: "michaelmartinez_20240619T124500Z",
    name: "Michael Martinez",
    email: "michaelm@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/michaelmartinez.jpg",
  },
  {
    id: "emilygarcia_20240619T124500Z",
    name: "Emily Garcia",
    email: "em.garcia987@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/emilygarcia.jpg",
  },
  {
    id: "jamesrodriguez_20240619T124500Z",
    name: "James Rodriguez",
    email: "james_rodriguez@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/jamesrodriguez.jpg",
  },
  {
    id: "karenmoore_20240619T124500Z",
    name: "Karen Moore",
    email: "karen_m@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/karenmoore.jpg",
  },
  {
    id: "liamwilliams_20240619T124500Z",
    name: "Liam Williams",
    email: "liam123@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/liamwilliams.jpg",
  },
  {
    id: "oliviajones_20240619T124500Z",
    name: "Olivia Jones",
    email: "olivia_j@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/oliviajones.jpg",
  },
  {
    id: "noahdavis_20240619T124500Z",
    name: "Noah Davis",
    email: "noah_davis2024@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/noahdavis.jpg",
  },
  {
    id: "isabellawilson_20240619T124500Z",
    name: "Isabella Wilson",
    email: "bella_wilson@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/isabellawilson.jpg",
  },
  {
    id: "loganthomas_20240619T124500Z",
    name: "Logan Thomas",
    email: "logant@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/loganthomas.jpg",
  },
  {
    id: "chloewhite_20240619T124500Z",
    name: "Chloe White",
    email: "chloe.white@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/chloewhite.jpg",
  },
  {
    id: "ethanmiller_20240619T124500Z",
    name: "Ethan Miller",
    email: "ethanm_99@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/ethanmiller.jpg",
  },
  {
    id: "emmamartin_20240619T124500Z",
    name: "Emma Martin",
    email: "emma.m@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/emmamartin.jpg",
  },
  {
    id: "jacobmartinez_20240619T124500Z",
    name: "Jacob Martinez",
    email: "jacob.martinez2023@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/jacobmartinez.jpg",
  },
  {
    id: "sophiagarcia_20240619T124500Z",
    name: "Sophia Garcia",
    email: "sophia_g@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/sophiagarcia.jpg",
  },
  {
    id: "masonlee_20240619T124500Z",
    name: "Mason Lee",
    email: "masonlee2024@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/masonlee.jpg",
  },
  {
    id: "charlottejones_20240619T124500Z",
    name: "Charlotte Jones",
    email: "charlotte.j@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/charlottejones.jpg",
  },
  {
    id: "lucaswalker_20240619T124500Z",
    name: "Lucas Walker",
    email: "lucas_w@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/lucaswalker.jpg",
  },
  {
    id: "mialee_20240619T124500Z",
    name: "Mia Lee",
    email: "mialee_007@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/mialee.jpg",
  },
  {
    id: "elijones_20240619T124500Z",
    name: "Eli Jones",
    email: "eli.jones@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/elijones.jpg",
  },
  {
    id: "gracebrown_20240619T124500Z",
    name: "Grace Brown",
    email: "grace.b@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/gracebrown.jpg",
  },
  {
    id: "henrymartinez_20240619T124500Z",
    name: "Henry Martinez",
    email: "henry.martinez@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/henrymartinez.jpg",
  },
  {
    id: "isabelgarcia_20240619T124500Z",
    name: "Isabel Garcia",
    email: "isabel.g@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/isabelgarcia.jpg",
  },
  {
    id: "davidsmith_20240619T124500Z",
    name: "David Smith",
    email: "david_s@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/davidsmith.jpg",
  },
  {
    id: "sophiathomas_20240619T124500Z",
    name: "Sophia Thomas",
    email: "sophia_thomas@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/sophiathomas.jpg",
  },
  {
    id: "henrymiller_20240619T124500Z",
    name: "Henry Miller",
    email: "h.miller@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/henrymiller.jpg",
  },
  {
    id: "aribrown_20240619T124500Z",
    name: "Ari Brown",
    email: "ari_brown@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/aribrown.jpg",
  },
  {
    id: "mohammedali_20240619T124500Z",
    name: "Mohammed Ali",
    email: "m.ali123@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/mohammedali.jpg",
  },
  {
    id: "mingli_20240619T124500Z",
    name: "Ming Li",
    email: "mingli_888@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/mingli.jpg",
  },
  {
    id: "yukitanaka_20240619T124500Z",
    name: "Yuki Tanaka",
    email: "tanaka.yuki@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/yukitanaka.jpg",
  },
  {
    id: "nasseralbadi_20240619T124500Z",
    name: "Nasser Al-Badi",
    email: "nasser.b@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/nasseralbadi.jpg",
  },
  {
    id: "chineduajayi_20240619T124500Z",
    name: "Chinedu Ajayi",
    email: "c.ajayi2023@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/chineduajayi.jpg",
  },
  {
    id: "thiagosilva_20240619T124500Z",
    name: "Thiago Silva",
    email: "t.silva@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/thiagosilva.jpg",
  },
  {
    id: "marialopes_20240619T124500Z",
    name: "Maria Lopes",
    email: "maria.l@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/marialopes.jpg",
  },
  {
    id: "katsumiyamamoto_20240619T124500Z",
    name: "Katsumi Yamamoto",
    email: "k.yamamoto@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/katsumiyamamoto.jpg",
  },
  {
    id: "chanhnguyen_20240619T124500Z",
    name: "Chanh Nguyen",
    email: "chanhnguyen@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/chanhnguyen.jpg",
  },
  {
    id: "ibrahimabdullah_20240619T124500Z",
    name: "Ibrahim Abdullah",
    email: "ibrahim_a@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/ibrahimabdullah.jpg",
  },
  {
    id: "fatimasaid_20240619T124500Z",
    name: "Fatima Said",
    email: "fatima.said@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/fatimasaid.jpg",
  },
  {
    id: "feliperodrigues_20240619T124500Z",
    name: "Felipe Rodrigues",
    email: "felipe_rodrigues@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/feliperodrigues.jpg",
  },
  {
    id: "hikarusuzuki_20240619T124500Z",
    name: "Hikaru Suzuki",
    email: "hikaru.s@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/hikarusuzuki.jpg",
  },
  {
    id: "amirahussein_20240619T124500Z",
    name: "Amira Hussein",
    email: "amira_h@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/amirahussein.jpg",
  },
  {
    id: "kwameobeng_20240619T124500Z",
    name: "Kwame Obeng",
    email: "kwame.obeng@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/kwameobeng.jpg",
  },
  {
    id: "nguyentran_20240619T124500Z",
    name: "Nguyen Tran",
    email: "nguyen_tran2023@uflip.com",
    photo: "https://s3.amazonaws.com/sw3/nguyentran.jpg",
  },
];

const EMAIL_BETWEEN = ["", ".", "_", "-"];

const EMAIL_SITES = ["gmail", "uflip", "yahoo", "mail", "outlook"];

const ACCOUNT_IDS = [
  "00000000-0000-0000-0000-000000000010",
  "00000000-0000-0000-0000-000000000020",
  "00000000-0000-0000-0000-000000000030",
  "00000000-0000-0000-0000-000000000040",
  "00000000-0000-0000-0000-000000000050",
  "00000000-0000-0000-0000-000000000060",
  "00000000-0000-0000-0000-000000000070",
  "00000000-0000-0000-0000-000000000080",
  "00000000-0000-0000-0000-000000000090",
  "00000000-0000-0000-0000-000000000100",
];

module.exports = {
  HEADLINERS,
  VENUES,
  HIGH_RISK_MESSAGES,
  BOX_OFFICES,
  FIRST_NAMES,
  LAST_NAMES,
  STOCK_TYPES,
  SEAT_NOTES,
  SEAT_SECTIONS,
  STATUSES,
  SAMPLE_NOTES,
  EMAIL_BETWEEN,
  EMAIL_SITES,
  MEMBERS,
  ACCOUNT_IDS,
};