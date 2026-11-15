const events = [
  {
    title: "Melbourne Out Loud: Life through the lens of Rennie Ellis",
    startRecur: "2024-03-01",
    endRecur: "2025-05-26",
    startTime: "10:00:00+11:00",
    endTime: "18:00:00+11:00",
    description: "",
    tags: ["Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://www.slv.vic.gov.au/whats-on/melbourne-out-loud",
      },
    ],
    location: "State Library Victoria",
  },
  {
    title: "Joy",
    startRecur: "2024-03-01",
    endRecur: "2025-12-08",
    startTime: "10:00:00+11:00",
    endTime: "17:00:00+11:00",
    description: "",
    tags: ["Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://museumsvictoria.com.au/immigrationmuseum/whats-on/joy/",
      },
    ],
    location: "Immigration Museum",
  },
  {
    title: "WICKED the Musical",
    start: "2024-03-02",
    end: "2024-08-26",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://wickedthemusical.com.au/tickets/melbourne/",
      },
    ],
    location: "Regent Theatre",
  },
  {
    title: "Sunset Boulevard",
    start: "2024-05-21",
    end: "2024-08-11",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://sunsetmusical.com.au/",
      },
    ],
    location: "The Princess Theatre",
  },
  {
    title: "Beings by Universal Everything",
    startRecur: "2024-05-22",
    endRecur: "2024-09-30",
    startTime: "10:00:00+11:00",
    endTime: "17:00:00+11:00",
    description: "",
    tags: ["Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://www.acmi.net.au/whats-on/beings/",
      },
    ],
    location: "ACMI",
  },
  {
    title: "RISING: Melbourne",
    start: "2024-06-01",
    end: "2024-06-17",
    description: "",
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://2024.rising.melbourne/",
      },
    ],
    location: "Various locations around Melbourne",
  },
  {
    title: "Lightscape",
    startRecur: "2024-06-14",
    endRecur: "2024-08-05",
    startTime: "17:00:00+11:00",
    endTime: "22:00:00+11:00",
    daysOfWeek: [0, 3, 4, 5, 6],
    description: "",
    tags: ["Outdoor", "Illumination"],
    links: [
      {
        label: "Website",
        url: "https://www.lightscapeaustralia.com/city/melbourne.html",
      },
    ],
    location: "Royal Botanic Gardens Victoria",
  },
  {
    title: "Pharoah",
    start: "2024-06-14",
    end: "2024-10-07",
    description: "Exhibition celebrating ancient Egyptian art and culture",
    tags: ["Exhibition", "Art"],
    links: [
      {
        label: "Website",
        url: "https://www.ngv.vic.gov.au/exhibition/pharaoh/",
      },
    ],
    location: "National Gallery of Victoria",
  },
  {
    title: "Disney's Beauty and the Beast the Musical",
    start: "2024-06-29",
    end: "2025-04-21",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://beautyandthebeastmusical.com.au/",
      },
    ],
    location: "Her Majesty's Theatre",
  },
  {
    title: "Firelight Festival",
    startRecur: "2024-06-28",
    endRecur: "2024-07-01",
    startTime: "17:00:00+11:00",
    endTime: "22:00:00+11:00",
    description: "",
    tags: ["Festival", "Outdoor", "Free", "Illumination"],
    links: [
      {
        label: "Website",
        url: "https://firelight.melbourne.vic.gov.au/festival/",
      },
    ],
    location: "Harbour Esplanade",
  },
  {
    title: "Firelight Labyrinth",
    start: "2024-06-28",
    end: "2024-07-15",
    description: "",
    tags: ["Art"],
    links: [
      {
        label: "Website",
        url: "https://firelight.melbourne.vic.gov.au/labyrinth/",
      },
    ],
    location: "Marvel Stadium",
  },
  {
    title: "Victoria the T. rex",
    startTime: "09:00:00+11:00",
    endTime: "17:00:00+11:00",
    startRecur: "2024-06-28",
    endRecur: "2024-10-21",
    description: "",
    tags: ["Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://museumsvictoria.com.au/melbournemuseum/whats-on/victoria-the-t-rex/",
      },
    ],
    location: "Melbourne Museum",
  },
  {
    title: "Winter Night Market | Queen Victoria Market",
    startTime: "17:00:00+11:00",
    endTime: "22:00:00+11:00",
    startRecur: "2024-06-05",
    endRecur: "2024-08-29",
    daysOfWeek: [3],
    description: "",
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://thenightmarket.com.au/",
      },
    ],
    location: "Queen Victoria Market",
  },
  {
    title: "Replay Festival",
    start: "2024-07-02",
    end: "2024-08-04",
    description: "",
    tags: ["Festival", "Comedy"],
    links: [
      {
        label: "Shows playing at Comedy Republic",
        url: "https://www.comedyrepublic.com.au/events/?season=REPLAY24",
      },
    ],
    location: "Melbourne",
  },
  {
    title: "The Finders Keepers Design Market",
    start: "2024-07-12",
    end: "2024-07-15",
    description: "",
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://www.thefinderskeepers.com/melbourne-markets/",
      },
    ],
    location: "Royal Exhibition Building, Carlton",
  },
  {
    title: "The Little Food Market",
    start: "2024-07-19",
    end: "2024-07-22",
    description: "",
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://thelittlefoodmarket.com/",
      },
    ],
    location: "Royal Exhibition Building, Carlton",
  },
  {
    title: "Open House Melbourne",
    start: "2024-07-27",
    end: "2024-07-29",
    description: "",
    tags: ["Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://openhousemelbourne.org/",
      },
    ],
    location: "Various locations around Melbourne",
  },
  {
    title: "SIX the Musical",
    start: "2024-08-02",
    end: "2024-10-21",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://sixthemusical.com.au/",
      },
    ],
    location: "Comedy Theatre",
  },
  {
    title: "Melbourne International Film Festival",
    start: "2024-08-08",
    end: "2024-08-26",
    description: "",
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://miff.com.au/",
      },
    ],
    location: "Various locations around Melbourne",
  },
  {
    title: "Now or Never",
    start: "2024-08-22",
    end: "2024-09-01",
    description: "",
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://nowornever.melbourne.vic.gov.au/",
      },
    ],
    location: "Various locations around Melbourne",
  },
  {
    title: "Affordable Art Fair Melbourne",
    start: "2024-08-29",
    end: "2024-09-02",
    description: "",
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://affordableartfair.com/fairs/melbourne/",
      },
    ],
    location: "Royal Exhibition Building",
  },
  {
    title: "South East Asia Festival | Queen Victoria Market",
    startRecur: "2024-09-07",
    endRecur: "2024-09-09",
    startTime: "09:00:00+10:00",
    endTime: "16:00:00+10:00",
    description: "",
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://qvm.com.au/whats-on/south-east-asia-festival/",
      },
    ],
    location: "Queen Victoria Market",
  },
  {
    title: "CherryHill Orchards Blossom Festival",
    start: "2024-09-09",
    end: "2024-09-30",
    description: "",
    tags: ["Festival", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://cherryhill.com.au/events/blossom-festival/",
      },
    ],
    location: "CherryHill Orchards - Coldstream",
  },
  {
    title: "Honk! Untitled Goose Exhibition",
    startRecur: "2024-09-17",
    endRecur: "2025-02-17",
    startTime: "10:00:00+11:00",
    endTime: "17:00:00+11:00",
    description: "",
    tags: ["Exhibition", "Free"],
    links: [
      {
        label: "Website",
        url: "https://www.acmi.net.au/whats-on/honk-untitled-goose-exhibition/",
      },
    ],
    location: "ACMI",
  },
  {
    title: "Accidentally Wes Anderson: The Exhibition",
    startRecur: "2024-09-18",
    endRecur: "2024-11-04",
    startTime: "10:00:00+11:00",
    endTime: "17:30:00+11:00",
    daysOfWeek: [0, 3, 4, 5, 6],
    description: "",
    tags: ["Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://awaexhibition.com/melbourne/",
      },
    ],
    location: "360 Bourke St",
  },
  {
    title: "Fringe Flavours Night Market | Queen Victoria Market",
    startTime: "17:00:00+11:00",
    endTime: "22:00:00+11:00",
    startRecur: "2024-09-18",
    endRecur: "2024-10-17",
    daysOfWeek: [3],
    description: "",
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://thenightmarket.com.au/",
      },
    ],
    location: "Queen Victoria Market",
  },
  {
    title: "CherryHill Orchards Blossom By Light",
    start: "2024-09-20",
    end: "2024-09-23",
    description: "",
    tags: ["Outdoor", "Illumination"],
    links: [
      {
        label: "Website",
        url: "https://cherryhill.com.au/events/blossom-festival/",
      },
    ],
    location: "CherryHill Orchards - Wandin East",
  },
  {
    title: "Mid-Autumn Moon Festival | Queen Victoria Market",
    startRecur: "2024-09-21",
    endRecur: "2024-09-23",
    startTime: "09:00:00+10:00",
    endTime: "16:00:00+10:00",
    description: "",
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://qvm.com.au/whats-on/mid-autumn-moon-festival/",
      },
    ],
    location: "Queen Victoria Market",
  },
  {
    title: "Tina: The Tina Turner Musical",
    start: "2024-09-21",
    end: "2025-03-03",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://tinathemusical.com.au/",
      },
    ],
    location: "The Princess Theatre",
  },
  {
    title: "Melbourne Royal Show",
    start: "2024-09-26",
    end: "2024-10-07",
    description: "",
    tags: ["Festival", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://royalshow.com.au/",
      },
    ],
    location: "Melbourne Showgrounds",
  },
  {
    title: "Melbourne Fringe Festival",
    start: "2024-10-01",
    end: "2024-10-21",
    description: "",
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://melbournefringe.com.au/",
      },
    ],
    location: "Various locations around Melbourne",
  },
  {
    title: "Melbourne International Games Week (MIGW)",
    start: "2024-10-05",
    end: "2024-10-14",
    description: "",
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://gamesweek.melbourne/",
      },
    ],
    location: "Various locations around Melbourne",
  },
  {
    title: "Big Games Night Out",
    start: "2024-10-10 15:00",
    end: "2024-10-10 23:55",
    description: "",
    tags: ["Gaming", "Free"],
    links: [
      {
        label: "Website",
        url: "https://gamesweek.melbourne/BGNO",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "The Finders Keepers Design Market",
    start: "2024-10-11",
    end: "2024-10-14",
    description: "",
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://www.thefinderskeepers.com/melbourne-markets/",
      },
    ],
    location: "Royal Exhibition Building",
  },
  {
    title: "PAX Aus",
    start: "2024-10-11",
    end: "2024-10-14",
    description: "",
    tags: ["Convention", "Gaming"],
    links: [
      {
        label: "Website",
        url: "https://aus.paxsite.com/en-us.html",
      },
    ],
    location: "Melbourne Convention and Exhibition Centre (MCEC)",
  },
  {
    title: "REKOSPECTIVE: The Art of Reko Rennie",
    start: "2024-10-11",
    end: "2025-01-28",
    description: "",
    tags: ["Exhibition", "Art"],
    links: [
      {
        label: "Website",
        url: "https://www.ngv.vic.gov.au/exhibition/rekospective-the-art-of-reko-rennie/",
      },
    ],
    location: "The Ian Potter Centre: NGV Australia",
  },
  {
    title: "100 Years Film Festival",
    start: "2024-10-13",
    end: "2024-11-06",
    description: "",
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://www.rmit.edu.au/thecapitol/100years",
      },
    ],
    location: "The Capitol",
  },
  {
    title: "Melbourne International Jazz Festival",
    start: "2024-10-18",
    end: "2024-10-28",
    description: "",
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://www.melbournejazz.com/",
      },
    ],
    location: "Various locations around Melbourne",
  },
  {
    title: "The Big Vegan Market",
    start: "2024-10-19",
    end: "2024-10-21",
    description: "",
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://bigveganmarket.com.au/",
      },
    ],
    location: "Royal Exhibition Building",
  },
  {
    title: "Melbourne Fashion Week",
    start: "2024-10-21",
    end: "2024-10-28",
    description: "",
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://mfw.melbourne.vic.gov.au/",
      },
    ],
    location: "Various locations around Melbourne",
  },
  {
    title: "Asia Oasis Street Food Festival",
    start: "2024-10-24",
    end: "2024-10-28",
    description: "",
    tags: ["Festival", "Food", "Free"],
    links: [
      {
        label: "Website",
        url: "https://asiaoasis.com.au/",
      },
    ],
    location: "Alexandra Gardens",
  },
  {
    title: "Victorian Festival of Diwali",
    start: "2024-10-26T12:30:00+11:00",
    end: "2024-10-26T22:00:00+11:00",
    description: "",
    tags: ["Festival", "Outdoor"],
    links: [
      {
        label: "What's On Melbourne listing",
        url: "https://whatson.melbourne.vic.gov.au/things-to-do/victorian-festival-of-diwali",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "Cats & Dogs",
    startRecur: "2024-11-01",
    endRecur: "2025-07-21",
    startTime: "10:00:00+11:00",
    endTime: "17:00:00+11:00",
    description: "",
    tags: ["Exhibition", "Art"],
    links: [
      {
        label: "Website",
        url: "https://www.ngv.vic.gov.au/exhibition/cats-and-dogs/",
      },
    ],
    location: "The Ian Potter Centre: NGV Australia",
  },
  {
    title: "Sister Act the Musical",
    start: "2024-11-03",
    end: "2025-01-27",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://sisteractthemusical.com.au/",
      },
    ],
    location: "Regent Theatre",
  },
  {
    title: "Peter and the Starcatcher",
    start: "2024-11-08",
    end: "2024-12-01",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://peterandthestarcatcher.com.au/",
      },
    ],
    location: "Playhouse Theatre",
  },
  {
    title: "State Rose & Garden Show",
    start: "2024-11-09",
    end: "2024-11-11",
    description: "",
    tags: ["Exhibition", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://www.wyndham.vic.gov.au/events-experiences/wyndham-citys-major-events/state-rose-garden-show",
      },
    ],
    location: "Victoria State Rose Garden",
  },
  {
    title: "Polish Festival",
    start: "2024-11-10T10:00:00+11:00",
    end: "2024-11-10T18:00:00+11:00",
    description: "",
    tags: ["Festival", "Free", "Outdoor"],
    links: [
      {
        label: "What's On Melbourne listing",
        url: "https://whatson.melbourne.vic.gov.au/things-to-do/polish-festival-2024",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "African Music and Cultural Festival",
    start: "2024-11-15",
    end: "2024-11-18",
    description: "",
    tags: ["Festival", "Free", "Outdoor"],
    links: [
      {
        label: "What's On Melbourne listing",
        url: "https://whatson.melbourne.vic.gov.au/things-to-do/african-music-and-cultural-festival",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "Summer Night Market | Queen Victoria Market",
    startTime: "17:00:00+11:00",
    endTime: "22:00:00+11:00",
    startRecur: "2024-11-20",
    endRecur: "2025-03-13",
    daysOfWeek: [3],
    description: "",
    tags: ["Market", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://thenightmarket.com.au/",
      },
    ],
    location: "Queen Victoria Market",
  },
  {
    title: "Always Live",
    start: "2024-11-22",
    end: "2024-12-09",
    description: "",
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://www.alwayslive.com.au/",
      },
    ],
    location: "Various locations around Melbourne",
  },
  {
    title: "A Christmas Carol",
    start: "2024-11-22",
    end: "2024-12-30",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://christmascarolaustralia.com.au/",
      },
    ],
    location: "Comedy Theatre",
  },
  {
    title: "The Future & Other Fictions",
    startRecur: "2024-11-24",
    endRecur: "2025-04-28",
    startTime: "10:00:00+11:00",
    endTime: "17:00:00+11:00",
    description: "",
    tags: ["Exhibition", "Art"],
    links: [
      {
        label: "Website",
        url: "https://www.acmi.net.au/whats-on/future-fictions/",
      },
    ],
    location: "ACMI",
  },
  {
    title: "The Big Design Market",
    start: "2024-11-29",
    end: "2024-12-02",
    description: "",
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://melbourne.thebigdesignmarket.com/",
      },
    ],
    location: "Royal Exhibition Building",
  },
  {
    title: "Moonlight Cinema",
    startTime: "19:30:00+11:00",
    endTime: "23:00:00+11:00",
    startRecur: "2024-11-29",
    endRecur: "2025-03-31",
    daysOfWeek: [0, 2, 3, 4, 5, 6],
    description: "",
    tags: ["Film", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://melbourne.moonlight.com.au/",
      },
    ],
    location: "Royal Botanic Gardens Victoria",
  },
  {
    title: "Taste of Combat",
    start: "2024-12-02",
    end: "2025-11-24",
    description: "",
    tags: ["Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://www.shrine.org.au/taste-combat",
      },
    ],
    location: "Shrine of Remembrance",
  },
  {
    title: "DARKFIELD",
    start: "2024-12-13",
    end: "2025-02-24",
    description: "Featuring SÉANCE and FLIGHT",
    tags: ["Theatre"],
    links: [
      {
        label: "Website",
        url: "https://www.darkfield.com.au/melbourne",
      },
    ],
    location: "Arts Centre Melbourne",
  },
  {
    title: "Dear Evan Hansen Musical",
    start: "2024-12-14",
    end: "2025-02-17",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://www.dearevanhansenmusical.com.au/",
      },
    ],
    location: "Playhouse Theatre",
  },
  {
    title: "Antopia",
    startTime: "09:00:00+11:00",
    endTime: "17:00:00+11:00",
    startRecur: "2024-12-14",
    endRecur: "2025-03-11",
    description: "",
    tags: ["Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://museumsvictoria.com.au/melbournemuseum/whats-on/antopia/",
      },
    ],
    location: "Melbourne Museum",
  },
  {
    title: "Yayoi Kusama",
    startRecur: "2024-12-15",
    endRecur: "2025-04-22",
    startTime: "10:00:00+10:00",
    endTime: "17:00:00+10:00",
    description: "",
    tags: ["Exhibition", "Art"],
    links: [
      {
        label: "Website",
        url: "https://www.ngv.vic.gov.au/exhibition/yayoi-kusama/",
      },
    ],
    location: "National Gallery of Victoria",
  },
  {
    title: "Christmas Outdoor Cinema",
    start: "2024-12-16",
    end: "2024-12-24",
    description: "",
    tags: ["Free", "Film", "Outdoor"],
    links: [
      {
        label: "Program",
        url: "https://fedsquare.com/events/christmas-outdoor-cinema",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "As Camp as Christmas",
    start: "2024-12-20T18:00:00+11:00",
    end: "2024-12-20T22:00:00+11:00",
    description: "",
    tags: ["Free", "Performance", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://fedsquare.com/events/as-camp-as-christmas/",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "Vision Australia's Carols by Candlelight",
    start: "2024-12-24T20:00+11:00",
    end: "2024-12-24T23:30+11:00",
    description: "",
    tags: ["Performance", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://www.artscentremelbourne.com.au/whats-on/2024/contemporary-music/carols-by-candlelight",
      },
    ],
    location: "Sidney Myer Music Bowl",
  },
  {
    title: "Van Gogh at THE LUME",
    start: "2024-12-26",
    end: "2025-06-02",
    description: "",
    tags: ["Art", "Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://www.thelumemelbourne.com/",
      },
    ],
    location: "THE LUME",
  },
];

export default events;
