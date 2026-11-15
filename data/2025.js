const events = [
  {
    title: "Midsumma Carnival",
    start: "2025-01-19T11:00:00+11:00",
    end: "2025-01-19T21:00:00+11:00",
    description: "",
    tags: ["Free", "Festival"],
    links: [
      {
        label: "Website",
        url: "https://www.midsumma.org.au/whats-on/events/midsumma-carnival/",
      },
    ],
    location: "Alexandra Gardens",
  },
  {
    title: "Midsumma Festival",
    start: "2025-01-19",
    end: "2025-02-10",
    description: "",
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://www.midsumma.org.au/",
      },
    ],
    location: "Various locations around Melbourne",
  },
  {
    title: "Shirley Valentine",
    start: "2025-01-30",
    end: "2025-02-17",
    description: "",
    tags: ["Performance", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://shirleyvalentine.com.au/",
      },
    ],
    location: "Athenaeum Theatre",
  },
  {
    title: "BMW Opera for All",
    start: "2025-02-01T17:00:00+11:00",
    end: "2025-02-01T19:00:00+11:00",
    description: "",
    tags: ["Free", "Music", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://opera.org.au/events/bmw-opera-for-all/",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "Melbourne Chinese Lunar New Year Festival",
    start: "2025-02-02T10:00:00+11:00",
    end: "2025-02-02T20:00:00+11:00",
    description: "",
    tags: ["Free", "Festival"],
    links: [
      {
        label: "What's On Melbourne listing",
        url: "https://whatson.melbourne.vic.gov.au/things-to-do/melbourne-chinese-lunar-new-year-festival",
      },
    ],
    location: "Chinatown",
  },
  {
    title: "Soli by Candlelight",
    start: "2025-02-04T20:30:00+11:00",
    end: "2025-02-04T21:30:00+11:00",
    description: "",
    tags: ["Free", "Music", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://fedsquare.com/events/soli-by-candlelight",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "Sidney Myer Free Concert: Journeys and Adventures",
    start: "2025-02-05T19:30:00+11:00",
    end: "2025-02-05T21:30:00+11:00",
    description: "",
    tags: ["Free", "Music", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://www.mso.com.au/performance/2025-smmb-journeys-and-adventures",
      },
    ],
    location: "Sidney Myer Music Bowl",
  },
  {
    title: "Ross Wilson and The Peaceniks by Candlelight",
    start: "2025-02-05T20:30:00+11:00",
    end: "2025-02-05T21:30:00+11:00",
    description: "",
    tags: ["Free", "Music", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://fedsquare.com/events/ross-wilson-and-the-peaceniks-by-candlelight",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "Teeks by Candlelight",
    start: "2025-02-06T20:30:00+11:00",
    end: "2025-02-06T21:30:00+11:00",
    description: "",
    tags: ["Free", "Music", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://fedsquare.com/events/teeks-by-candlelight",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "Bruce Lee Bonanza",
    startRecur: "2025-02-07",
    endRecur: "2025-02-09",
    startTime: "20:30:00+10:00",
    endTime: "22:30:00+10:00",
    description: "",
    tags: ["Free", "Film", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://fedsquare.com/events/bruce-lee-bonanza",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "Afro-Caribbean Carnival",
    start: "2025-02-15T16:00:00+11:00",
    end: "2025-02-15T23:00:00+11:00",
    description: "",
    tags: ["Free", "Festival", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://fedsquare.com/events/afro-caribbean-carnival",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "Sidney Myer Free Concert: Dvořák, Gershwin and Ravel",
    start: "2025-02-15T19:30:00+11:00",
    end: "2025-02-15T21:30:00+11:00",
    description: "",
    tags: ["Free", "Music", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://www.mso.com.au/performance/2025-smmb-dvorak-gershwin-and-ravel",
      },
    ],
    location: "Sidney Myer Music Bowl",
  },
  {
    title: "Asia TOPA",
    start: "2025-02-20",
    end: "2025-03-11",
    description: "",
    tags: ["Festival", "Performance"],
    links: [
      {
        label: "Website",
        url: "https://www.asiatopa.com.au/",
      },
    ],
    location: "Various locations around Melbourne",
  },
  {
    title: "Science Fiction Film Festival",
    start: "2025-02-21",
    end: "2025-02-24",
    description: "",
    tags: ["Film", "Festival"],
    links: [
      {
        label: "Website",
        url: "https://www.cinemanova.com.au/events/science-fiction-film-festival",
      },
    ],
    location: "Cinema Nova",
  },
  {
    title: "Melbourne Fashion Festival",
    start: "2025-02-21",
    end: "2025-03-09",
    description: "",
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://melbournefashionfestival.com.au/",
      },
    ],
    location: "Various locations around Melbourne",
  },
  {
    title: "Nature Obituary",
    startRecur: "2025-02-22",
    endRecur: "2025-02-24",
    startTime: "13:00:00+10:00",
    endTime: "16:00:00+10:00",
    description: "",
    tags: ["Outdoor", "Free"],
    links: [
      {
        label: "Website",
        url: "https://www.rbg.vic.gov.au/melbourne-gardens/whats-on-melbourne/nature-obituary/",
      },
    ],
    location: "Royal Botanic Gardens Victoria",
  },
  {
    title: "Antipodes Festival",
    start: "2025-02-22",
    end: "2025-02-24",
    description: "",
    tags: ["Festival", "Free", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://www.antipodesfestival.com.au/",
      },
    ],
    location: "Lonsdale Street precinct",
  },
  {
    title: "Sidney Myer Free Concert: Symphonic Showcase",
    start: "2025-02-22T19:30:00+11:00",
    end: "2025-02-22T21:30:00+11:00",
    description: "",
    tags: ["Free", "Music", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://www.mso.com.au/performance/2025-smmb-symphonic-showcase",
      },
    ],
    location: "Sidney Myer Music Bowl",
  },
  {
    title: "Avenue Q",
    start: "2025-02-22",
    end: "2025-03-23",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://nationaltheatre.org.au/avenue-q/",
      },
    ],
    location: "The National Theatre Melbourne",
  },
  {
    title: "Moomba Festival",
    start: "2025-03-06",
    end: "2025-03-11",
    description: "",
    tags: ["Festival", "Free", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://moomba.melbourne.vic.gov.au/",
      },
    ],
    location: "Birrarung Marr and Alexandra Gardens",
  },
  {
    title: "Live at THE LUME: Symphony in Motion",
    start: "2025-03-07T19:00:00+11:00",
    end: "2025-03-07T21:00:00+11:00",
    description: "",
    tags: ["Music", "Art", "Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://www.thelumemelbourne.com/live-at-the-lume",
      },
    ],
    location: "THE LUME",
  },
  {
    title: "Live at the Gardens",
    startRecur: "2025-03-07",
    endRecur: "2025-03-16",
    startTime: "17:00:00+10:00",
    endTime: "22:00:00+10:00",
    daysOfWeek: [0, 5, 6],
    description: "",
    tags: ["Outdoor", "Music", "Performance"],
    links: [
      {
        label: "Website",
        url: "https://www.liveatthegardens.com.au",
      },
    ],
    location: "Royal Botanic Gardens Victoria",
  },
  {
    title: "The Dirty Dozen",
    start: "2025-03-13",
    end: "2025-08-30",
    description: "",
    tags: ["Food", "Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://www.melbourne.vic.gov.au/event/dirty-dozen",
      },
    ],
    location: "City Gallery",
  },
  {
    title: "Top Arts 2025",
    start: "2025-03-14",
    end: "2025-07-21",
    description: "",
    tags: ["Exhibition", "Art", "Free"],
    links: [
      {
        label: "Website",
        url: "https://www.ngv.vic.gov.au/exhibition/top-arts-2025/",
      },
    ],
    location: "The Ian Potter Centre: NGV Australia",
  },
  {
    title: "Jesus Christ Superstar",
    start: "2025-03-16",
    end: "2025-06-23",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://jesuschristsuperstarmusical.com.au/",
      },
    ],
    location: "The Princess Theatre",
  },
  {
    title: "Melbourne Food and Wine Festival",
    start: "2025-03-21",
    end: "2025-03-31",
    description: "",
    tags: ["Festival", "Food"],
    links: [
      {
        label: "Website",
        url: "https://www.melbournefoodandwine.com.au/",
      },
    ],
    location: "Various locations around Melbourne",
  },
  {
    title: "The Finders Keepers Food Market",
    start: "2025-03-22",
    end: "2025-03-24",
    description: "",
    tags: ["Market", "Food"],
    links: [
      {
        label: "Website",
        url: "https://www.thefinderskeepers.com/food-market/",
      },
    ],
    location: "Meat Market",
  },
  {
    title: "Melbourne International Comedy Festival",
    start: "2025-03-26",
    end: "2025-04-21",
    description: "",
    tags: ["Festival", "Comedy"],
    links: [
      {
        label: "Website",
        url: "https://www.comedyfestival.com.au/",
      },
    ],
    location: "Various locations around Melbourne",
  },
  {
    title: "Melbourne International Flower & Garden Show",
    start: "2025-03-26",
    end: "2025-03-31",
    description: "",
    tags: ["Exhibition", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://melbflowershow.com.au/",
      },
    ],
    location: "Royal Exhibition Building",
  },
  {
    title: "Baker's Dozen",
    startRecur: "2025-03-29",
    endRecur: "2025-03-31",
    startTime: "10:00:00+10:00",
    endTime: "15:00:00+10:00",
    description: "Part of Melbourne Food and Wine Festival",
    tags: ["Food", "Market", "Free", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://www.melbournefoodandwine.com.au/events/bakers-dozen/",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "Live at THE LUME: French Jazz Soirée",
    start: "2025-04-04T19:00:00+11:00",
    end: "2025-04-04T21:00:00+11:00",
    description: "",
    tags: ["Music", "Art", "Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://www.thelumemelbourne.com/live-at-the-lume",
      },
    ],
    location: "THE LUME",
  },
  {
    title: "The Makers and Shakers Market",
    start: "2025-04-05",
    end: "2025-04-07",
    description: "",
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://themakersandshakers.com.au/melbourne/",
      },
    ],
    location: "Royal Exhibition Building",
  },
  {
    title: "Lightfall Cranbourne",
    startRecur: "2025-04-06",
    endRecur: "2025-04-21",
    startTime: "18:00:00+10:00",
    endTime: "21:00:00+10:00",
    description: "",
    tags: ["Outdoor", "Illumination"],
    links: [
      {
        label: "Website",
        url: "https://www.rbg.vic.gov.au/cranbourne-gardens/whats-on-cranbourne/lightfall/",
      },
    ],
    location: "Royal Botanic Gardens Cranbourne",
  },
  {
    title: "Hawker 88 Night Market | Queen Victoria Market",
    startTime: "17:00:00+10:00",
    endTime: "22:00:00+10:00",
    startRecur: "2025-04-09",
    endRecur: "2025-05-08",
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
    title: "Make Believe: Encounters with Misinformation",
    start: "2025-04-16",
    end: "2026-01-19",
    description: "",
    tags: ["Exhibition", "Free"],
    links: [
      {
        label: "Website",
        url: "https://www.slv.vic.gov.au/whats-on/make-believe",
      },
    ],
    location: "State Library Victoria",
  },
  {
    title: "The Lord of the Rings – A Musical Tale",
    start: "2025-04-26",
    end: "2025-06-23",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://lotronstage.com/",
      },
    ],
    location: "Comedy Theatre",
  },
  {
    title: "YIRRAMBOI Festival",
    start: "2025-05-01",
    end: "2025-05-12",
    description: "",
    tags: ["Festival", "Art"],
    links: [
      {
        label: "Website",
        url: "https://yirramboi.com.au/",
      },
    ],
    location: "Various locations around Melbourne",
  },
  {
    title: "Live at THE LUME: Ethereal Opera",
    start: "2025-05-02T19:00:00+10:00",
    end: "2025-05-02T21:00:00+10:00",
    description: "",
    tags: ["Music", "Art", "Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://www.thelumemelbourne.com/live-at-the-lume",
      },
    ],
    location: "THE LUME",
  },
  {
    title: "Buddha's Day and Multicultural Festival",
    start: "2025-05-02",
    end: "2025-05-05",
    description: "",
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://whatson.melbourne.vic.gov.au/things-to-do/buddhas-day-and-multicultural-festival/",
      },
    ],
    location: "Golden Square Car Park",
  },
  {
    title: "LEGO® Star Wars: The Exhibition",
    start: "2025-05-04",
    end: "2026-01-27",
    description: "",
    tags: ["Exhibition", "Art"],
    links: [
      {
        label: "Website",
        url: "https://museumsvictoria.com.au/melbournemuseum/whats-on/lego-star-wars/",
      },
    ],
    location: "Melbourne Museum",
  },
  {
    title: "Beetlejuice The Musical",
    start: "2025-05-07",
    end: "2025-09-12",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://beetlejuicethemusical.com.au/",
      },
    ],
    location: "Regent Theatre",
  },
  {
    title: "Hadestown",
    start: "2025-05-08",
    end: "2025-07-14",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://hadestown.com.au/",
      },
    ],
    location: "Her Majesty's Theatre",
  },
  {
    title: "Mother’s Day High Tea at Melbourne’s Royal Exhibition Building",
    start: "2025-05-11T10:00:00+10:00",
    end: "2025-05-11T16:30:00+10:00",
    description: "",
    tags: ["Food"],
    links: [
      {
        label: "Website",
        url: "https://museumsvictoria.com.au/melbournemuseum/whats-on/mothers-day-high-tea-royal-exhibition-building/",
      },
    ],
    location: "Royal Exhibition Building",
  },
  {
    title: "Les Misérables The Arena Spectacular",
    start: "2025-05-14",
    end: "2025-05-24",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://lesmisarenatour.com.au/",
      },
    ],
    location: "Rod Laver Arena",
  },
  {
    title: "Melbourne Design Week",
    start: "2025-05-15",
    end: "2025-05-26",
    description: "",
    tags: ["Festival", "Free", "Art"],
    links: [
      {
        label: "Website",
        url: "https://designweek.melbourne/",
      },
    ],
    location: "National Gallery of Victoria",
  },
  {
    title: "Fondue Chalet",
    start: "2025-05-15",
    end: "2025-06-23",
    description: "",
    tags: ["Food"],
    links: [
      {
        label: "Website",
        url: "https://fonduechalet.com.au/",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "Footloose The Musical",
    start: "2025-05-16",
    end: "2025-06-02",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://footloosethemusical.com/",
      },
    ],
    location: "Athenaeum Theatre",
  },
  {
    title: "The Big Design Market: Almost Winter",
    start: "2025-05-23",
    end: "2025-05-26",
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
    title: "Korea Festival",
    start: "2025-05-24",
    end: "2025-05-26",
    description: "",
    tags: ["Festival", "Free", "Outdoor"],
    links: [
      {
        label: "What's On Melbourne listing",
        url: "https://whatson.melbourne.vic.gov.au/things-to-do/korea-festival",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "Melbourne Donut Festival",
    start: "2025-05-31",
    end: "2025-06-02",
    description: "",
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://qvm.com.au/whats-on/melbourne-donut-festival/",
      },
    ],
    location: "Queen Victoria Market",
  },
  {
    title: "RISING: Melbourne",
    start: "2025-06-04",
    end: "2025-06-16",
    description: "",
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://2025.rising.melbourne/",
      },
    ],
    location: "Various locations around Melbourne",
  },
  {
    title: "Winter Night Market | Queen Victoria Market",
    startTime: "17:00:00+11:00",
    endTime: "22:00:00+11:00",
    startRecur: "2025-06-04",
    endRecur: "2025-08-28",
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
    title: "Kimono",
    start: "2025-06-04",
    end: "2025-10-06",
    description: "",
    tags: ["Exhibition", "Art"],
    links: [
      {
        label: "Website",
        url: "https://www.ngv.vic.gov.au/exhibition/kimono/",
      },
    ],
    location: "National Gallery of Victoria",
  },
  {
    title: "French Impressionism",
    start: "2025-06-06",
    end: "2025-10-06",
    description:
      "From the Museum of Fine Arts, Boston. Part of Melbourne Winter Masterpieces",
    tags: ["Exhibition", "Art"],
    links: [
      {
        label: "Website",
        url: "https://www.ngv.vic.gov.au/exhibition/french-impressionism/",
      },
    ],
    location: "National Gallery of Victoria",
  },
  {
    title: "Hedwig and the Angry Inch",
    start: "2025-06-13",
    end: "2025-07-07",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://www.hedwig.com.au/",
      },
    ],
    location: "Athenaeum Theatre",
  },
  {
    title: "Lightscape",
    startRecur: "2025-06-20",
    endRecur: "2025-08-11",
    startTime: "17:00:00+11:00",
    endTime: "22:00:00+11:00",
    daysOfWeek: [0, 3, 4, 5, 6],
    description: "",
    tags: ["Outdoor", "Illumination"],
    links: [
      {
        label: "Website",
        url: "https://www.lightscape.com/melbourne",
      },
    ],
    location: "Royal Botanic Gardens Victoria",
  },
  {
    title: "Speedrun Weekend",
    start: "2025-06-21",
    end: "2025-06-23",
    description: "",
    tags: ["Gaming"],
    links: [
      {
        label: "Website",
        url: "https://www.acmi.net.au/whats-on/speedrun-weekend/",
      },
    ],
    location: "ACMI",
  },
  {
    title: "Julia",
    start: "2025-06-25",
    end: "2025-07-20",
    description: "",
    tags: ["Performance", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://www.artscentremelbourne.com.au/whats-on/2025/theatre/julia",
      },
    ],
    location: "Playhouse Theatre",
  },
  {
    title: "Stray Gods: The Exhibition",
    start: "2025-06-28",
    end: "2025-09-29",
    description: "",
    tags: ["Exhibition", "Gaming"],
    links: [
      {
        label: "Website",
        url: "https://www.hellenic.org.au/exhibitions/stray-gods",
      },
    ],
    location: "Hellenic Museum",
  },
  {
    title: "1984 by George Orwell",
    start: "2025-07-01",
    end: "2025-07-07",
    description: "",
    tags: ["Performance", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://marrinergroup.com.au/shows/1984-by-george-orwell",
      },
    ],
    location: "Comedy Theatre",
  },
  {
    title: "Replay Festival",
    start: "2025-07-01",
    end: "2025-08-03",
    description: "",
    tags: ["Festival", "Comedy"],
    links: [
      {
        label: "Shows playing at Comedy Republic",
        url: "https://www.comedyrepublic.com.au/events?s=replay+festival",
      },
    ],
    location: "Various locations around Melbourne",
  },
  {
    title:
      "State Library Victoria Unlocked: A Guided Tour Before the Doors Open",
    start: "2025-07-01",
    end: "2026-01-01",
    description: "",
    tags: ["Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://www.slv.vic.gov.au/whats-on/hidden-histories-guided-tour",
      },
    ],
    location: "State Library Victoria",
  },
  {
    title: "Indie Symphony II",
    start: "2025-07-03",
    end: "2025-07-05",
    description: "",
    tags: ["Performance", "Music", "Gaming"],
    links: [
      {
        label: "Website",
        url: "https://www.orchestravictoria.com.au/performances/indie-symphony-ii",
      },
    ],
    location: "Hamer Hall",
  },
  {
    title: "Double Vision",
    start: "2025-07-03",
    end: "2025-07-06",
    description: "",
    tags: ["Performance", "Music"],
    links: [
      {
        label: "Website",
        url: "https://www.acmi.net.au/whats-on/double-vision/",
      },
    ],
    location: "ACMI",
  },
  {
    title: "Firelight Festival",
    start: "2025-07-04",
    end: "2025-07-07",
    description: "",
    tags: ["Festival", "Outdoor", "Free", "Illumination"],
    links: [
      {
        label: "Website",
        url: "https://firelight.melbourne.vic.gov.au/",
      },
    ],
    location: "Harbour Esplanade",
  },
  {
    title: "Puffing Billy's Train of Lights",
    start: "2025-07-04",
    end: "2025-07-21",
    description: "",
    tags: ["Art", "Family and kids", "Outdoor", "Illumination"],
    links: [
      {
        label: "Website",
        url: "https://puffingbilly.com.au/events/train-of-lights/",
      },
    ],
    location: "Puffing Billy Railway Lakeside Visitor Centre",
  },
  {
    title: "Coffee Weekend",
    start: "2025-07-05",
    end: "2025-07-07",
    description: "",
    tags: ["Festival", "Food"],
    links: [
      {
        label: "Website",
        url: "https://www.coffeeweekend.com.au/",
      },
    ],
    location: "Meat Market",
  },
  {
    title: "Annie the Musical",
    start: "2025-07-10",
    end: "2025-10-13",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://anniemusical.com.au/",
      },
    ],
    location: "The Princess Theatre",
  },
  {
    title: "The Finders Keepers Design Market",
    start: "2025-07-11",
    end: "2025-07-14",
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
    title: "Bastille Day French Festival",
    start: "2025-07-12",
    end: "2025-07-14",
    description: "",
    tags: ["Market", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://qvm.com.au/whats-on/bastille-day-french-festival/",
      },
    ],
    location: "Queen Victoria Market",
  },
  {
    title: "Here You Come Again",
    start: "2025-07-12",
    end: "2025-07-21",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://marrinergroup.com.au/shows/here-you-come-again",
      },
    ],
    location: "Comedy Theatre",
  },
  {
    title: "The Little Food Market",
    start: "2025-07-18",
    end: "2025-07-21",
    description: "",
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://thelittlefoodmarket.com/",
      },
    ],
    location: "Royal Exhibition Building",
  },
  {
    title: "High Cheese | The Westin",
    start: "2025-07-23",
    end: "2025-10-26",
    description: "",
    tags: ["Food"],
    links: [
      {
        label: "Website",
        url: "https://www.westinmelbournedining.com.au/highcheese",
      },
    ],
    location: "Allegro Restaurant",
  },
  {
    title: "Footloose The Musical (Encore Season)",
    start: "2025-07-25",
    end: "2025-08-18",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://footloosethemusical.com/",
      },
    ],
    location: "Athenaeum Theatre",
  },
  {
    title: "Open House Melbourne Weekend",
    start: "2025-07-26",
    end: "2025-07-28",
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
    title: "Kimberly Akimbo: A Musical",
    start: "2025-07-26",
    end: "2025-08-31",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2025/kimberly-akimbo-a-musical/",
      },
    ],
    location: "Playhouse Theatre",
  },
  {
    title: "Iwagumi Air Scape By ENESS",
    start: "2025-08-01",
    end: "2025-08-18",
    description: "",
    tags: ["Outdoor", "Art", "Illumination"],
    links: [
      {
        label: "Website",
        url: "https://www.prahransquare.com.au/whats-on/upcoming/iwagumi-air-scape/",
      },
    ],
    location: "Prahran Square",
  },
  {
    title: "Hot Chocolate Festival",
    start: "2025-08-01",
    end: "2025-09-01",
    description: "",
    tags: ["Food"],
    links: [
      {
        label: "Mornington Peninsula Chocolaterie & Ice Creamery event details",
        url: "https://www.mpchoc.com.au/events/hot-chocolate-festival-1-31-august/",
      },
      {
        label: "Great Ocean Road Chocolaterie event details",
        url: "https://www.gorci.com.au/events/hot-chocolate-festival/",
      },
      {
        label: "Yarra Valley Chocolaterie event details",
        url: "https://www.yvci.com.au/events/hot-chocolate-festival-2/",
      },
    ],
    location:
      "Mornington Peninsula Chocolaterie & Ice Creamery, Great Ocean Road Chocolaterie and Yarra Valley Chocolaterie",
  },
  {
    title: "In the Heights",
    start: "2025-08-01",
    end: "2025-09-07",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://intheheightsmusical.com/",
      },
    ],
    location: "Comedy Theatre",
  },
  {
    title: "Melbourne International Film Festival",
    start: "2025-08-07",
    end: "2025-08-25",
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
    start: "2025-08-21",
    end: "2025-09-01",
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
    start: "2025-08-28",
    end: "2025-09-01",
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
    title: "Treasures of the Viking Age: The Galloway Hoard",
    start: "2025-08-29",
    end: "2026-01-26",
    description: "",
    tags: ["Exhibition", "Art"],
    links: [
      {
        label: "Website",
        url: "https://museumsvictoria.com.au/melbournemuseum/whats-on/treasures-of-the-viking-age-the-galloway-hoard/",
      },
    ],
    location: "Melbourne Museum",
  },
  {
    title: "The Play that Goes Wrong",
    start: "2025-09-03",
    end: "2025-09-29",
    description: "",
    tags: ["Performance", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://playgoeswrong.com/",
      },
    ],
    location: "Athenaeum Theatre",
  },
  {
    title: "The Lark",
    start: "2025-09-03",
    end: "2025-09-29",
    description: "",
    tags: ["Performance", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://www.artscentremelbourne.com.au/whats-on/2025/theatre/the-lark",
      },
    ],
    location: "Fairfax Studio",
  },
  {
    title: "The Makers and Shakers Market",
    start: "2025-09-06",
    end: "2025-09-08",
    description: "",
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://themakersandshakers.com.au/melbourne/",
      },
    ],
    location: "Royal Exhibition Building",
  },
  {
    title: "MJ the Musical",
    start: "2025-09-09",
    end: "2026-03-14",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://mjthemusical.com.au/",
      },
    ],
    location: "Her Majesty's Theatre",
  },
  {
    title: "The 39 Steps",
    start: "2025-09-10",
    end: "2025-10-05",
    description: "",
    tags: ["Performance", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://the39steps.com.au/",
      },
    ],
    location: "Comedy Theatre",
  },
  {
    title: "Emerging Writers' Festival",
    start: "2025-09-11",
    end: "2025-09-19",
    description: "",
    tags: ["Art", "Festival"],
    links: [
      {
        label: "Website",
        url: "https://emergingwritersfestival.org.au/",
      },
    ],
    location: "Various locations around Melbourne",
  },
  {
    title: "Fringe Flavours Night Market | Queen Victoria Market",
    startTime: "17:00:00+11:00",
    endTime: "22:00:00+11:00",
    startRecur: "2025-09-17",
    endRecur: "2025-10-16",
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
    title: "Game Worlds",
    start: "2025-09-18",
    end: "2026-03-30",
    description: "",
    tags: ["Exhibition", "Gaming"],
    links: [
      {
        label: "Website",
        url: "https://www.acmi.net.au/whats-on/game-worlds/",
      },
    ],
    location: "ACMI",
  },
  {
    title: "CherryHill Orchards Blossom By Light",
    start: "2025-09-19",
    end: "2025-09-23",
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
    title: "CherryHill Orchards Blossom Festival",
    start: "2025-09-24",
    end: "2025-10-06",
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
    title: "DOG MAN: THE MUSICAL",
    start: "2025-09-30",
    end: "2025-10-05",
    description: "",
    tags: ["Musical", "Theatre", "Family and kids"],
    links: [
      {
        label: "Website",
        url: "https://www.artscentremelbourne.com.au/whats-on/2025/kids-and-families/dogman",
      },
    ],
    location: "Playhouse Theatre",
  },
  {
    title: "Melbourne Fringe Festival",
    start: "2025-09-30",
    end: "2025-10-20",
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
    title: "Everyday's A Birthday",
    start: "2025-10-02",
    end: "2025-11-02",
    description: "",
    tags: ["Exhibition", "Art"],
    links: [
      {
        label: "Website",
        url: "https://lennoxst.gallery/exhibitions/101-everyday-s-a-birthday-donovan-christie/",
      },
    ],
    location: "Lennox St. Gallery",
  },
  {
    title: "Melbourne International Games Week (MIGW)",
    start: "2025-10-04",
    end: "2025-10-13",
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
    start: "2025-10-09 16:00",
    end: "2025-10-09 23:55",
    description: "",
    tags: ["Gaming", "Free"],
    links: [
      {
        label: "Website",
        url: "https://gamesweek.melbourne/events/2025-events/big-games-night-out-2025",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "The Finders Keepers Design Market",
    start: "2025-10-10",
    end: "2025-10-13",
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
    title: "Victorian Festival of Diwali",
    start: "2025-10-11T12:00:00+11:00",
    end: "2025-10-11T22:00:00+11:00",
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
    title: "The Lucky Country",
    start: "2025-10-13",
    end: "2025-10-19",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://www.mtc.com.au/plays-and-tickets/whats-on/other-companies/the-lucky-country/",
      },
    ],
    location: "Southbank Theatre",
  },
  {
    title: "Melbourne International Jazz Festival",
    start: "2025-10-17",
    end: "2025-10-27",
    description: "",
    tags: ["Music", "Festival"],
    links: [
      {
        label: "Website",
        url: "https://www.melbournejazz.com/",
      },
    ],
    location: "Various locations around Melbourne",
  },
  {
    title: "Toy Story 30 Years and Beyond",
    start: "2025-10-18",
    end: "2025-11-03",
    description: "",
    tags: ["Exhibition", "Free", "Art"],
    links: [
      {
        label: "Website",
        url: "https://www.disney.com.au/news/disney-celebrates-toy-story-30-anniversary-with-pop-up-exhibition",
      },
    ],
    location: "Collins234",
  },
  {
    title: "Melbourne Fashion Week",
    start: "2025-10-20",
    end: "2025-10-26",
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
    title: "Here You Come Again",
    start: "2025-10-23",
    end: "2025-11-16",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://marrinergroup.com.au/shows/here-you-come-again",
      },
    ],
    location: "Comedy Theatre",
  },
  {
    title: "DARKFIELD",
    start: "2025-10-24",
    end: "2026-01-05",
    description: "Featuring INVISIBLE and FLIGHT",
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
    title: "Hair: The Tribal Love Rock Musical",
    start: "2025-10-25",
    end: "2025-12-01",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://www.hairthemusical.com.au/",
      },
    ],
    location: "Athenaeum Theatre",
  },
  {
    title: "Halloween Cinema: Psycho",
    start: "2025-10-31T21:00:00+11:00",
    end: "2025-10-31T23:00:00+11:00",
    description: "",
    tags: ["Free", "Film", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://fedsquare.com/events/halloween-cinema-psycho",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "Melbourne Donut Festival",
    start: "2025-11-01",
    end: "2025-11-03",
    description: "",
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://qvm.com.au/whats-on/melbourne-donut-festival/",
      },
    ],
    location: "Queen Victoria Market",
  },
  {
    title: "Opera Up Late",
    start: "2025-11-02T21:00:00+11:00",
    end: "2025-11-02T22:30:00+11:00",
    description: "",
    tags: ["Music", "Performance"],
    links: [
      {
        label: "Website",
        url: "https://opera.org.au/productions/opera-up-late-melbourne/",
      },
    ],
    location: "Regent Theatre",
  },
  {
    title: "In Memory | Of Being – Mixed Reality in the Dome",
    start: "2025-11-08",
    end: "2025-11-23",
    description: "",
    tags: ["Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://www.slv.vic.gov.au/whats-on/make-believe",
      },
    ],
    location: "State Library Victoria",
  },
  {
    title: "Ephemeral Collection",
    start: "2025-11-10",
    end: "2025-11-24",
    description: "",
    tags: ["Outdoor", "Art", "Free"],
    links: [
      {
        label: "Website",
        url: "https://www.prahransquare.com.au/whats-on/upcoming/ephemeral-collection/",
      },
    ],
    location: "Prahran Square",
  },
  {
    title: "The Great Melbourne Bagpipe Bash",
    start: "2025-11-12T16:30:00+11:00",
    end: "2025-11-12T17:30:00+11:00",
    description: "",
    tags: ["Free", "Music", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://fedsquare.com/events/the-great-melbourne-bagpipe-bash",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "The Bubble Emporium",
    start: "2025-11-12",
    end: "2025-11-17",
    description: "",
    tags: ["Outdoor", "Art", "Free", "Music", "Performance"],
    links: [
      {
        label: "Website",
        url: "https://www.prahransquare.com.au/whats-on/upcoming/the-bubble-emporium/",
      },
    ],
    location: "Prahran Square",
  },
  {
    title: "Summer Night Market | Queen Victoria Market",
    startTime: "17:00:00+11:00",
    endTime: "22:00:00+11:00",
    startRecur: "2025-11-19",
    endRecur: "2026-03-12",
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
    title: "African Music and Cultural Festival",
    start: "2025-11-21",
    end: "2025-11-24",
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
    title: "Live at the Gardens",
    start: "2025-11-21",
    end: "2025-12-01",
    description: "See website for times and lineup",
    tags: ["Outdoor", "Music", "Performance"],
    links: [
      {
        label: "Website",
        url: "https://www.liveatthegardens.com.au",
      },
    ],
    location: "Royal Botanic Gardens Victoria",
  },
  {
    title: "Moodymann + DJ Jnett",
    start: "2025-11-27T19:00:00+11:00",
    end: "2025-11-27T22:30:00+11:00",
    description: "",
    tags: ["Free", "Music", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://fedsquare.com/events/moodymann-dj-jnett",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "Christmas Festival Launch",
    start: "2025-11-28T18:30:00+11:00",
    end: "2025-11-28T22:00:00+11:00",
    description: "",
    tags: ["Free", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://fedsquare.com/events/christmas-festival-launch",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "Reuben Kaye – enGORGED",
    start: "2025-11-28",
    end: "2025-11-30",
    description: "",
    tags: ["Performance"],
    links: [
      {
        label: "Website",
        url: "https://www.melbournerecital.com.au/whats-on/current-productions/reuben-kaye",
      },
    ],
    location: "Melbourne Recital Centre",
  },
  {
    title: "The Big Design Market",
    start: "2025-11-28",
    end: "2025-12-01",
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
    title: "A Christmas Carol",
    start: "2025-11-27",
    end: "2025-12-25",
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
    title: "Women Photographers 1900–1975: A Legacy of Light ",
    start: "2025-11-28",
    end: "2026-05-04",
    description: "",
    tags: ["Exhibition", "Art"],
    links: [
      {
        label: "Website",
        url: "https://www.ngv.vic.gov.au/exhibition/women-photographers-1900-1975/",
      },
    ],
    location: "National Gallery of Victoria",
  },
  {
    title: "Moonlight Cinema",
    start: "2025-12-03",
    end: "2026-04-06",
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
    title: "Asia Street Food Festival by the Yarra",
    start: "2025-12-04",
    end: "2025-12-08",
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
    title: "As Camp as Christmas",
    start: "2025-12-05T18:00:00+11:00",
    end: "2025-12-05T22:15:00+11:00",
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
    title: "Love Actually? The Musical Parody",
    start: "2025-12-05",
    end: "2025-12-24",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://www.athenaeumtheatre.com.au/shows/love-actually-the-musical-parody",
      },
    ],
    location: "Athenaeum Theatre",
  },
  {
    title: "Westwood | Kawakubo",
    start: "2025-12-07",
    end: "2026-04-20",
    description: "",
    tags: ["Exhibition", "Art", "Fashion"],
    links: [
      {
        label: "Website",
        url: "https://www.ngv.vic.gov.au/exhibition/westwood-kawakubo/",
      },
    ],
    location: "National Gallery of Victoria",
  },
  {
    title: "Christmas Outdoor Cinema: Naughty or Nice edition",
    startRecur: "2025-12-08",
    endRecur: "2025-12-12",
    startTime: "18:00:00+11:00",
    endTime: "22:00:00+11:00",
    description: "",
    tags: ["Free", "Film", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://fedsquare.com/events/christmas-outdoor-cinema",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "DIVA",
    start: "2025-12-11",
    end: "2026-04-27",
    description: "",
    tags: ["Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://www.artscentremelbourne.com.au/ampa/exhibitions/diva",
      },
    ],
    location: "Australian Museum of Performing Arts (AMPA)",
  },
  {
    title: "ANASTASIA",
    start: "2025-12-20",
    end: "2026-02-21",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://anastasiathemusical.com.au/tickets/melbourne/",
      },
    ],
    location: "Regent Theatre",
  },
  {
    title: "CATS the Musical",
    start: "2025-12-21",
    end: "2026-02-01",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://catsthemusical.com.au/",
      },
    ],
    location: "Hamer Hall",
  },
  {
    title: "Vision Australia's Carols by Candlelight",
    start: "2025-12-24T20:00+11:00",
    end: "2025-12-24T23:30+11:00",
    description: "",
    tags: ["Performance", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://www.artscentremelbourne.com.au/whats-on/2025/contemporary-music/vision-australias-carols-by-candlelight",
      },
    ],
    location: "Sidney Myer Music Bowl",
  },
  {
    title: "Idols of Musical Theatre",
    start: "2025-12-27",
    end: "2025-12-29",
    description: "",
    tags: ["Performance"],
    links: [
      {
        label: "Website",
        url: "https://www.melbournerecital.com.au/whats-on/current-productions/idols-of-musical-theatre",
      },
    ],
    location: "Melbourne Recital Centre",
  },
  {
    title: "Outdoor Cinema: Lord of the Rings Trilogy",
    startRecur: "2025-12-27",
    endRecur: "2025-12-30",
    startTime: "18:00:00+11:00",
    endTime: "22:00:00+11:00",
    description: "",
    tags: ["Free", "Film", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://fedsquare.com/events/outdoor-cinema-lord-of-the-rings-trilogy",
      },
    ],
    location: "Fed Square",
  },
  {
    title: "Bluey's Big Play The Stage Show",
    start: "2025-12-30",
    end: "2026-01-05",
    description: "",
    tags: ["Play", "Theatre", "Family and kids"],
    links: [
      {
        label: "Website",
        url: "https://www.artscentremelbourne.com.au/whats-on/2025/kids-and-families/blueys-big-play-the-stage-show",
      },
    ],
    location: "Playhouse Theatre",
  },
];

export default events;
