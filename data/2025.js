const events = [
  {
    title: 'Midsumma Carnival',
    start: '2025-01-19T11:00:00+11:00',
    end: '2025-01-19T21:00:00+11:00',
    description: '',
    tags: ["Free", "Festival"],
    links: [
      {
        label: "Website",
        url: "https://www.midsumma.org.au/whats-on/events/midsumma-carnival/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/CafM2SaHPRGiHL6y7",
      },
    ],
    location: {
      address: "Alexandra Gardens, Melbourne",
    },
  },
  {
    title: 'Midsumma Festival',
    start: '2025-01-19',
    end: '2025-02-10',
    description: '',
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://www.midsumma.org.au/",
      },
    ],
    location: {
      address: "Various locations around Melbourne",
    },
  },
  {
    title: 'Shirley Valentine',
    start: '2025-01-30',
    end: '2025-02-17',
    description: '',
    tags: ["Performance", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://shirleyvalentine.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/AVtdpTiQgA9uhugx7",
      },
    ],
    location: {
      address: "Athenaeum Theatre, Melbourne",
    },
  },
  {
    title: 'BMW Opera for All',
    start: '2025-02-01T17:00:00+11:00',
    end: '2025-02-01T19:00:00+11:00',
    description: '',
    tags: ["Free", "Music", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://opera.org.au/events/bmw-opera-for-all/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
      },
    ],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
    },
  },
  {
    title: 'Melbourne Chinese Lunar New Year Festival',
    start: '2025-02-02T10:00:00+11:00',
    end: '2025-02-02T20:00:00+11:00',
    description: '',
    tags: ["Free", "Festival"],
    links: [
      {
        label: "What's On Melbourne listing",
        url: "https://whatson.melbourne.vic.gov.au/things-to-do/melbourne-chinese-lunar-new-year-festival",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/kRbNsNdCBxDXZtur9",
      },
    ],
    location: {
      address: "Chinatown, Melbourne",
    },
  },
  {
    title: 'Soli by Candlelight',
    start: '2025-02-04T20:30:00+11:00',
    end: '2025-02-04T21:30:00+11:00',
    description: '',
    tags: ["Free", "Music", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://fedsquare.com/events/soli-by-candlelight",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
      },
    ],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
    },
  },
  {
    title: 'Sidney Myer Free Concert: Journeys and Adventures',
    start: '2025-02-05T19:30:00+11:00',
    end: '2025-02-05T21:30:00+11:00',
    description: '',
    tags: ["Free", "Music", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://www.mso.com.au/performance/2025-smmb-journeys-and-adventures",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/LAHceVEECBY9uF9E8",
      },
    ],
    location: {
      address: "Sidney Myer Music Bowl, Melbourne",
    },
  },
  {
    title: 'Ross Wilson and The Peaceniks by Candlelight',
    start: '2025-02-05T20:30:00+11:00',
    end: '2025-02-05T21:30:00+11:00',
    description: '',
    tags: ["Free", "Music", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://fedsquare.com/events/ross-wilson-and-the-peaceniks-by-candlelight",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
      },
    ],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
    },
  },
  {
    title: 'Teeks by Candlelight',
    start: '2025-02-06T20:30:00+11:00',
    end: '2025-02-06T21:30:00+11:00',
    description: '',
    tags: ["Free", "Music", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://fedsquare.com/events/teeks-by-candlelight",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
      },
    ],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
    },
  },
  {
    title: 'Bruce Lee Bonanza',
    startRecur: '2025-02-07',
    endRecur: '2025-02-09',
    startTime: '20:30:00+10:00',
    endTime: '22:30:00+10:00',
    description: '',
    tags: ["Free", "Film", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://fedsquare.com/events/bruce-lee-bonanza",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
      },
    ],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
    },
  },
  {
    title: 'Afro-Caribbean Carnival',
    start: '2025-02-15T16:00:00+11:00',
    end: '2025-02-15T23:00:00+11:00',
    description: '',
    tags: ["Free", "Festival", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://fedsquare.com/events/afro-caribbean-carnival",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
      },
    ],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
    },
  },
  {
    title: 'Sidney Myer Free Concert: Dvořák, Gershwin and Ravel',
    start: '2025-02-15T19:30:00+11:00',
    end: '2025-02-15T21:30:00+11:00',
    description: '',
    tags: ["Free", "Music", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://www.mso.com.au/performance/2025-smmb-dvorak-gershwin-and-ravel",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/LAHceVEECBY9uF9E8",
      },
    ],
    location: {
      address: "Sidney Myer Music Bowl, Melbourne",
    },
  },
  {
    title: 'Asia TOPA',
    start: '2025-02-20',
    end: '2025-03-11',
    description: '',
    tags: ["Festival", "Performance"],
    links: [
      {
        label: "Website",
        url: "https://www.asiatopa.com.au/",
      },
    ],
    location: {
      address: "Various locations around Melbourne",
    },
  },
  {
    title: 'Science Fiction Film Festival',
    start: '2025-02-21',
    end: '2025-02-24',
    description: '',
    tags: ["Film", "Festival"],
    links: [
      {
        label: "Website",
        url: "https://www.cinemanova.com.au/events/science-fiction-film-festival",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/bXjuLQeDPA3SyWar7",
      },
    ],
    location: {
      address: "Cinema Nova, Carlton",
    },
  },
  {
    title: 'Melbourne Fashion Festival',
    start: '2025-02-21',
    end: '2025-03-09',
    description: '',
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://melbournefashionfestival.com.au/",
      },
    ],
    location: {
      address: "Various locations around Melbourne",
    },
  },
  {
    title: 'Nature Obituary',
    startRecur: '2025-02-22',
    endRecur: '2025-02-24',
    startTime: '13:00:00+10:00',
    endTime: '16:00:00+10:00',
    description: '',
    tags: ["Outdoor", "Free"],
    links: [
      {
        label: "Website",
        url: "https://www.rbg.vic.gov.au/melbourne-gardens/whats-on-melbourne/nature-obituary/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/t6BCr59sBJc6BJXG9",
      },
    ],
    location: {
      address: "Royal Botanic Gardens Victoria, Melbourne",
    },
  },
  {
    title: 'Antipodes Festival',
    start: '2025-02-22',
    end: '2025-02-24',
    description: '',
    tags: ["Festival", "Free", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://www.antipodesfestival.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/E5Qy5T75z8AQ5utM8",
      },
    ],
    location: {
      address: "Lonsdale Street precinct, Melbourne",
    },
  },
  {
    title: 'Sidney Myer Free Concert: Symphonic Showcase',
    start: '2025-02-22T19:30:00+11:00',
    end: '2025-02-22T21:30:00+11:00',
    description: '',
    tags: ["Free", "Music", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://www.mso.com.au/performance/2025-smmb-symphonic-showcase",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/LAHceVEECBY9uF9E8",
      },
    ],
    location: {
      address: "Sidney Myer Music Bowl, Melbourne",
    },
  },
  {
    title: 'Avenue Q',
    start: '2025-02-22',
    end: '2025-03-23',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://nationaltheatre.org.au/avenue-q/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/cJmKJYA6atXmSdqy5",
      },
    ],
    location: {
      address: "The National Theatre Melbourne, St Kilda",
    },
  },
  {
    title: 'Moomba Festival',
    start: '2025-03-06',
    end: '2025-03-11',
    description: '',
    tags: ["Festival", "Free"],
    links: [
      {
        label: "Website",
        url: "https://moomba.melbourne.vic.gov.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/DcvDP1rhNmLtzivq6",
      },
    ],
    location: {
      address: "Birrarung Marr and Alexandra Gardens",
    },
  },
  {
    title: 'Live at THE LUME: Symphony in Motion',
    start: '2025-03-07T19:00:00+11:00',
    end: '2025-03-07T21:00:00+11:00',
    description: '',
    tags: ["Music", "Art", "Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://www.thelumemelbourne.com/live-at-the-lume",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/jUsZvqXhu88nLFUG9",
      },
    ],
    location: {
      address: "THE LUME, Melbourne",
    },
  },
  {
    title: 'Live at the Gardens',
    startRecur: '2025-03-07',
    endRecur: '2025-03-16',
    startTime: '17:00:00+10:00',
    endTime: '22:00:00+10:00',
    daysOfWeek: [0, 5, 6],
    description: '',
    tags: ["Outdoor", "Music", "Performance"],
    links: [
      {
        label: "Website",
        url: "https://www.liveatthegardens.com.au",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/t6BCr59sBJc6BJXG9",
      },
    ],
    location: {
      address: "Royal Botanic Gardens Victoria, Melbourne",
    },
  },
  {
    title: 'The Dirty Dozen',
    start: '2025-03-13',
    end: '2025-08-30',
    description: '',
    tags: ["Food", "Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://www.melbourne.vic.gov.au/event/dirty-dozen",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/Z67Ez6iGw4G8ziK69",
      },
    ],
    location: {
      address: "City Gallery, Melbourne Town Hall, Melbourne",
    },
  },
  {
    title: 'Top Arts 2025',
    start: '2025-03-14',
    end: '2025-07-21',
    description: '',
    tags: ["Exhibition", "Art", "Free"],
    links: [
      {
        label: "Website",
        url: "https://www.ngv.vic.gov.au/exhibition/top-arts-2025/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/V1kcEp4pUCf2iKi46",
      },
    ],
    location: {
      address: "The Ian Potter Centre: NGV Australia, Melbourne",
    },
  },
  {
    title: 'Jesus Christ Superstar',
    start: '2025-03-16',
    end: '2025-06-09',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://jesuschristsuperstarmusical.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/bP7GfWWjxJAb4NKn9",
      },
    ],
    location: {
      address: "The Princess Theatre, 163 Spring St, Melbourne",
    },
  },
  {
    title: 'Melbourne Food and Wine Festival',
    start: '2025-03-21',
    end: '2025-03-31',
    description: '',
    tags: ["Festival", "Food"],
    links: [
      {
        label: "Website",
        url: "https://www.melbournefoodandwine.com.au/",
      },
    ],
    location: {
      address: "Various locations around Melbourne",
    },
  },
  {
    title: 'The Finders Keepers Food Market',
    start: '2025-03-22',
    end: '2025-03-24',
    description: '',
    tags: ["Market", "Food"],
    links: [
      {
        label: "Website",
        url: "https://www.thefinderskeepers.com/food-market/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/z8zhzx5ss7qYua1D6",
      },
    ],
    location: {
      address: "Meat Market, Melbourne",
    },
  },
  {
    title: 'Melbourne International Comedy Festival',
    start: '2025-03-26',
    end: '2025-04-21',
    description: '',
    tags: ["Festival", "Comedy"],
    links: [
      {
        label: "Website",
        url: "https://www.comedyfestival.com.au/",
      },
    ],
    location: {
      address: "Various locations around Melbourne",
    },
  },
  {
    title: 'Melbourne International Flower & Garden Show',
    start: '2025-03-26',
    end: '2025-03-31',
    description: '',
    tags: ["Exhibition", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://melbflowershow.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
      },
    ],
    location: {
      address: "Royal Exhibition Building, Carlton",
    },
  },
  {
    title: "Baker's Dozen",
    startRecur: '2025-03-29',
    endRecur: '2025-03-31',
    startTime: '10:00:00+10:00',
    endTime: '15:00:00+10:00',
    description: 'Part of Melbourne Food and Wine Festival',
    tags: ["Food", "Market", "Free", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://www.melbournefoodandwine.com.au/events/bakers-dozen/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
      },
    ],
    location: {
      address: "Fed Square, Melbourne",
    },
  },
  {
    title: 'Live at THE LUME: French Jazz Soirée',
    start: '2025-04-04T19:00:00+11:00',
    end: '2025-04-04T21:00:00+11:00',
    description: '',
    tags: ["Music", "Art", "Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://www.thelumemelbourne.com/live-at-the-lume",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/jUsZvqXhu88nLFUG9",
      },
    ],
    location: {
      address: "THE LUME, Melbourne",
    },
  },
  {
    title: 'The Makers and Shakers Market',
    start: '2025-04-05',
    end: '2025-04-07',
    description: '',
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://themakersandshakers.com.au/melbourne/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
      },
    ],
    location: {
      address: "Royal Exhibition Building, Carlton",
    },
  },
  {
    title: 'Lightfall Cranbourne',
    startRecur: '2025-04-06',
    endRecur: '2025-04-21',
    startTime: '18:00:00+10:00',
    endTime: '21:00:00+10:00',
    description: '',
    tags: ["Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://www.rbg.vic.gov.au/cranbourne-gardens/whats-on-cranbourne/lightfall/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/1saD7PtYgKLqazjw5",
      },
    ],
    location: {
      address: "Royal Botanic Gardens, Cranbourne",
    },
  },
  {
    title: 'Hawker 88 Night Market | Queen Victoria Market',
    startTime: '17:00:00+10:00',
    endTime: '22:00:00+10:00',
    startRecur: '2025-04-09',
    endRecur: '2025-05-08',
    daysOfWeek: [3],
    description: '',
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://thenightmarket.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/XL5zduSz3zMnbkEy8",
      },
    ],
    location: {
      address: "Queen Victoria Market, Queen St, Melbourne",
    },
  },
  {
    title: 'The Lord of the Rings – A Musical Tale',
    start: '2025-04-26',
    end: '2025-05-31',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://lotronstage.com/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/hNN1LcomqSEXCrHe6",
      },
    ],
    location: {
      address: "Comedy Theatre, Melbourne",
    },
  },
  {
    title: 'YIRRAMBOI Festival',
    start: '2025-05-01',
    end: '2025-05-12',
    description: '',
    tags: ["Festival", "Art"],
    links: [
      {
        label: "Website",
        url: "https://yirramboi.com.au/",
      },
    ],
    location: {
      address: "Various locations around Melbourne",
    },
  },
  {
    title: 'Live at THE LUME: Ethereal Opera',
    start: '2025-05-02T19:00:00+10:00',
    end: '2025-05-02T21:00:00+10:00',
    description: '',
    tags: ["Music", "Art", "Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://www.thelumemelbourne.com/live-at-the-lume",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/jUsZvqXhu88nLFUG9",
      },
    ],
    location: {
      address: "THE LUME, Melbourne",
    },
  },
  {
    title: "Buddha's Day and Multicultural Festival",
    start: '2025-05-02',
    end: '2025-05-05',
    description: '',
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://whatson.melbourne.vic.gov.au/things-to-do/buddhas-day-and-multicultural-festival/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/SzEY2NiFdHyprSCH6",
      },
    ],
    location: {
      address: "Golden Square Car Park, Melbourne",
    },
  },
  {
    title: 'LEGO® Star Wars: The Exhibition',
    start: '2025-05-04',
    end: '2026-01-27',
    description: '',
    tags: ["Exhibition", "Art"],
    links: [
      {
        label: "Website",
        url: "https://museumsvictoria.com.au/melbournemuseum/whats-on/lego-star-wars/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/swBLScA46YegEVtH8",
      },
    ],
    location: {
      address: "Melbourne Museum, 11 Nicholson St, Carlton",
    },
  },
  {
    title: 'Beetlejuice The Musical',
    start: '2025-05-07',
    end: '2025-06-30',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://beetlejuicethemusical.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/8gYHTCG7sANgjwWA6",
      },
    ],
    location: {
      address: "Regent Theatre, 191 Collins St, Melbourne",
    },
  },
  {
    title: 'Hadestown',
    start: '2025-05-08',
    end: '2025-07-07',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://hadestown.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/usjgPTW2Y9QaPm3k6",
      },
    ],
    location: {
      address: "Her Majesty's Theatre, Melbourne",
    },
  },
  {
    title: 'Mother’s Day High Tea at Melbourne’s Royal Exhibition Building',
    start: '2025-05-11T10:00:00+10:00',
    end: '2025-05-11T16:30:00+10:00',
    description: '',
    tags: ["Food"],
    links: [
      {
        label: "Website",
        url: "https://museumsvictoria.com.au/melbournemuseum/whats-on/mothers-day-high-tea-royal-exhibition-building/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
      },
    ],
    location: {
      address: "Royal Exhibition Building, Carlton",
    },
  },
  {
    title: 'Les Misérables The Arena Spectacular',
    start: '2025-05-14',
    end: '2025-05-24',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://lesmisarenatour.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/WigqQq1jwkYBoBYp9",
      },
    ],
    location: {
      address: "Rod Laver Arena, Melbourne",
    },
  },
  {
    title: 'Melbourne Design Week',
    start: '2025-05-15',
    end: '2025-05-26',
    description: '',
    tags: ["Festival", "Free", "Art"],
    links: [
      {
        label: "Website",
        url: "https://designweek.melbourne/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ZrR1RKjyPGWyZ8qh9",
      },
    ],
    location: {
      address: "National Gallery of Victoria, 180 St Kilda Rd, Melbourne",
    },
  },
  {
    title: 'Fondue Chalet',
    start: '2025-05-15',
    end: '2025-06-23',
    description: '',
    tags: ["Food"],
    links: [
      {
        label: "Website",
        url: "https://fonduechalet.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
      },
    ],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
    },
  },
  {
    title: 'Footloose The Musical',
    start: '2025-05-16',
    end: '2025-06-02',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://footloosethemusical.com/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/AVtdpTiQgA9uhugx7",
      },
    ],
    location: {
      address: "Athenaeum Theatre, Melbourne",
    },
  },
  {
    title: 'Korea Festival',
    start: '2025-05-24',
    end: '2025-05-26',
    description: '',
    tags: ["Festival", "Free", "Outdoor"],
    links: [
      {
        label: "What's On Melbourne listing",
        url: "https://whatson.melbourne.vic.gov.au/things-to-do/korea-festival",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
      },
    ],
    location: {
      address: "Fed Square, Melbourne",
    },
  },
  {
    title: 'RISING: Melbourne',
    start: '2025-06-04',
    end: '2025-06-16',
    description: '',
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://2025.rising.melbourne/",
      },
    ],
    location: {
      address: "Various locations around Melbourne",
    },
  },
  {
    title: 'Kimono',
    start: '2025-06-04',
    end: '2025-10-06',
    description: '',
    tags: ["Exhibition", "Art"],
    links: [
      {
        label: "Website",
        url: "https://www.ngv.vic.gov.au/exhibition/kimono/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ZrR1RKjyPGWyZ8qh9",
      },
    ],
    location: {
      address: "National Gallery of Victoria, 180 St Kilda Rd, Melbourne",
    },
  },
  {
    title: 'French Impressionism',
    start: '2025-06-06',
    end: '2025-10-06',
    description: 'From the Museum of Fine Arts, Boston. Part of Melbourne Winter Masterpieces',
    tags: ["Exhibition", "Art"],
    links: [
      {
        label: "Website",
        url: "https://www.ngv.vic.gov.au/exhibition/french-impressionism/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ZrR1RKjyPGWyZ8qh9",
      },
    ],
    location: {
      address: "National Gallery of Victoria, 180 St Kilda Rd, Melbourne",
    },
  },
  {
    title: 'Hedwig and the Angry Inch',
    start: '2025-06-13',
    end: '2025-06-27',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://www.hedwig.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/AVtdpTiQgA9uhugx7",
      },
    ],
    location: {
      address: "Athenaeum Theatre, Melbourne",
    },
  },
  {
    title: 'Lightscape',
    startRecur: '2025-06-20',
    endRecur: '2025-08-11',
    startTime: '17:00:00+11:00',
    endTime: '22:00:00+11:00',
    daysOfWeek: [0, 3, 4, 5, 6],
    description: '',
    tags: ["Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://www.lightscape.com/melbourne",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/t6BCr59sBJc6BJXG9",
      },
    ],
    location: {
      address: "Royal Botanic Gardens Victoria, Melbourne",
    },
  },
  {
    title: 'Annie the Musical',
    start: '2025-07-10',
    end: '2025-08-04',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://anniemusical.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/bP7GfWWjxJAb4NKn9",
      },
    ],
    location: {
      address: "The Princess Theatre, 163 Spring St, Melbourne",
    },
  },
  {
    title: 'Here You Come Again',
    start: '2025-07-12',
    end: '2025-10-27',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://marrinergroup.com.au/shows/here-you-come-again",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/hNN1LcomqSEXCrHe6",
      },
    ],
    location: {
      address: "Comedy Theatre, Melbourne",
    },
  },
  {
    title: 'Open House Melbourne Weekend',
    start: '2025-07-26',
    end: '2025-07-28',
    description: '',
    tags: ["Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://openhousemelbourne.org/",
      },
    ],
    location: {
      address: "Various locations around Melbourne",
    },
  },
  {
    title: 'Kimberly Akimbo: A Musical',
    start: '2025-07-26',
    end: '2025-08-31',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2025/kimberly-akimbo-a-musical/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/oF5TDshryjzAo6WV9",
      },
    ],
    location: {
      address: "Playhouse Theatre, Arts Centre, Melbourne",
    },
  },
  {
    title: 'In the Heights',
    start: '2025-08-01',
    end: '2025-08-18',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://intheheightsmusical.com/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/hNN1LcomqSEXCrHe6",
      },
    ],
    location: {
      address: "Comedy Theatre, Melbourne",
    },
  },
  {
    title: 'Melbourne International Film Festival',
    start: '2025-08-07',
    end: '2025-08-25',
    description: '',
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://miff.com.au/",
      },
    ],
    location: {
      address: "Various locations around Melbourne",
    },
  },
  {
    title: 'The Makers and Shakers Market',
    start: '2025-09-06',
    end: '2025-09-08',
    description: '',
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://themakersandshakers.com.au/melbourne/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
      },
    ],
    location: {
      address: "Royal Exhibition Building, Carlton",
    },
  },
  {
    title: 'CATS the Musical',
    start: '2025-12-21',
    end: '2026-01-12',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://catsthemusical.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/F4BKNvr2TTTNa6VT9",
      },
    ],
    location: {
      address: "Hamer Hall, Melbourne",
    },
  },
]

export default events