const events = [
  {
    title: 'Midsumma Carnival',
    start: '2025-01-19T11:00:00+11:00',
    end: '2025-01-19T21:00:00+11:00',
    description: `[Website](https://www.midsumma.org.au/whats-on/events/midsumma-carnival/)`,
    tags: ["Free", "Festival"],
    location: {
      address: "Alexandra Gardens, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/CafM2SaHPRGiHL6y7",
    },
  },
  {
    title: 'Midsumma Festival',
    start: '2025-01-19',
    end: '2025-02-10',
    description: `[Website](https://www.midsumma.org.au/)`,
    tags: ["Festival"],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'Shirley Valentine',
    start: '2025-01-30',
    end: '2025-02-17',
    description: '[Website](https://shirleyvalentine.com.au/)',
    tags: ["Performance", "Theatre"],
    location: {
      address: "Athenaeum Theatre, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/AVtdpTiQgA9uhugx7",
    },
  },
  {
    title: 'BMW Opera for All',
    start: '2025-02-01T17:00:00+11:00',
    end: '2025-02-01T19:00:00+11:00',
    description: `[Website](https://opera.org.au/events/bmw-opera-for-all/)`,
    tags: ["Free", "Music", "Outdoor"],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
    },
  },
  {
    title: 'Melbourne Chinese Lunar New Year Festival',
    start: '2025-02-02T10:00:00+11:00',
    end: '2025-02-02T20:00:00+11:00',
    description: `[What's On Melbourne listing](https://whatson.melbourne.vic.gov.au/things-to-do/melbourne-chinese-lunar-new-year-festival)`,
    tags: ["Free", "Festival"],
    location: {
      address: "Chinatown, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/kRbNsNdCBxDXZtur9",
    },
  },
  {
    title: 'Soli by Candlelight',
    start: '2025-02-04T20:30:00+11:00',
    end: '2025-02-04T21:30:00+11:00',
    description: `[Website](https://fedsquare.com/events/soli-by-candlelight)`,
    tags: ["Free", "Music", "Outdoor"],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
    },
  },
  {
    title: 'Sidney Myer Free Concert: Journeys and Adventures',
    start: '2025-02-05T19:30:00+11:00',
    end: '2025-02-05T21:30:00+11:00',
    description: `[Website](https://www.mso.com.au/performance/2025-smmb-journeys-and-adventures)`,
    tags: ["Free", "Music", "Outdoor"],
    location: {
      address: "Sidney Myer Music Bowl, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/LAHceVEECBY9uF9E8",
    },
  },
  {
    title: 'Ross Wilson and The Peaceniks by Candlelight',
    start: '2025-02-05T20:30:00+11:00',
    end: '2025-02-05T21:30:00+11:00',
    description: `[Website](https://fedsquare.com/events/ross-wilson-and-the-peaceniks-by-candlelight)`,
    tags: ["Free", "Music", "Outdoor"],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
    },
  },
  {
    title: 'Teeks by Candlelight',
    start: '2025-02-06T20:30:00+11:00',
    end: '2025-02-06T21:30:00+11:00',
    description: `[Website](https://fedsquare.com/events/teeks-by-candlelight)`,
    tags: ["Free", "Music", "Outdoor"],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
    },
  },
  {
    title: 'Bruce Lee Bonanza',
    startRecur: '2025-02-07',
    endRecur: '2025-02-09',
    startTime: '20:30:00+10:00',
    endTime: '22:30:00+10:00',
    description: '[Website](https://fedsquare.com/events/bruce-lee-bonanza)',
    tags: ["Free", "Film", "Outdoor"],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
    },
  },
  {
    title: 'Afro-Caribbean Carnival',
    start: '2025-02-15T16:00:00+11:00',
    end: '2025-02-15T23:00:00+11:00',
    description: `[Website](https://fedsquare.com/events/afro-caribbean-carnival)`,
    tags: ["Free", "Festival", "Outdoor"],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
    },
  },
  {
    title: 'Sidney Myer Free Concert: Dvořák, Gershwin and Ravel',
    start: '2025-02-15T19:30:00+11:00',
    end: '2025-02-15T21:30:00+11:00',
    description: `[Website](https://www.mso.com.au/performance/2025-smmb-dvorak-gershwin-and-ravel)`,
    tags: ["Free", "Music", "Outdoor"],
    location: {
      address: "Sidney Myer Music Bowl, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/LAHceVEECBY9uF9E8",
    },
  },
  {
    title: 'Asia TOPA',
    start: '2025-02-20',
    end: '2025-03-11',
    description: '[Website](https://www.asiatopa.com.au/)',
    tags: ["Festival", "Performance"],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'Science Fiction Film Festival',
    start: '2025-02-21',
    end: '2025-02-24',
    description: '[Website](https://www.cinemanova.com.au/events/science-fiction-film-festival)',
    tags: ["Film", "Festival"],
    location: {
      address: "Cinema Nova, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/bXjuLQeDPA3SyWar7",
    },
  },
  {
    title: 'Melbourne Fashion Festival',
    start: '2025-02-21',
    end: '2025-03-09',
    description: '[Website](https://melbournefashionfestival.com.au/)',
    tags: ["Festival"],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'Nature Obituary',
    startRecur: '2025-02-22',
    endRecur: '2025-02-24',
    startTime: '13:00:00+10:00',
    endTime: '16:00:00+10:00',
    description: '[Website](https://www.rbg.vic.gov.au/melbourne-gardens/whats-on-melbourne/nature-obituary/)',
    tags: ["Outdoor", "Free"],
    location: {
      address: "Royal Botanic Gardens Victoria, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/t6BCr59sBJc6BJXG9",
    },
  },
  {
    title: 'Antipodes Festival',
    start: '2025-02-22',
    end: '2025-02-24',
    description: '[Website](https://www.antipodesfestival.com.au/)',
    tags: ["Festival", "Free", "Outdoor"],
    location: {
      address: "Lonsdale Street precinct, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/E5Qy5T75z8AQ5utM8",
    },
  },
  {
    title: 'Sidney Myer Free Concert: Symphonic Showcase',
    start: '2025-02-22T19:30:00+11:00',
    end: '2025-02-22T21:30:00+11:00',
    description: `[Website](https://www.mso.com.au/performance/2025-smmb-symphonic-showcase)`,
    tags: ["Free", "Music", "Outdoor"],
    location: {
      address: "Sidney Myer Music Bowl, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/LAHceVEECBY9uF9E8",
    },
  },
  {
    title: 'Avenue Q',
    start: '2025-02-22',
    end: '2025-03-17',
    description: '[Website](https://nationaltheatre.org.au/avenue-q/)',
    tags: ["Musical", "Theatre"],
    location: {
      address: "The National Theatre Melbourne, St Kilda",
      googleMapsUrl: "https://maps.app.goo.gl/cJmKJYA6atXmSdqy5",
    },
  },
  {
    title: 'Moomba Festival',
    start: '2025-03-06',
    end: '2025-03-11',
    description: '[Website](https://moomba.melbourne.vic.gov.au/)',
    tags: ["Festival", "Free"],
    location: {
      address: "Birrarung Marr and Alexandra Gardens",
      googleMapsUrl: "https://maps.app.goo.gl/DcvDP1rhNmLtzivq6",
    },
  },
  {
    title: 'Live at the Gardens',
    startRecur: '2025-03-07',
    endRecur: '2025-03-16',
    startTime: '17:00:00+10:00',
    endTime: '22:00:00+10:00',
    daysOfWeek: [0, 5, 6],
    description: `End time TBD

  [Website](https://www.liveatthegardens.com.au/)`,
    tags: ["Outdoor", "Music", "Performance"],
    location: {
      address: "Royal Botanic Gardens Victoria, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/t6BCr59sBJc6BJXG9",
    },
  },
  {
    title: 'Top Arts 2025',
    start: '2025-03-14',
    end: '2025-07-21',
    description: `[Website](https://www.ngv.vic.gov.au/exhibition/top-arts-2025/)`,
    tags: ["Exhibition", "Art", "Free"],
    location: {
      address: "The Ian Potter Centre: NGV Australia, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/V1kcEp4pUCf2iKi46",
    },
  },
  {
    title: 'Jesus Christ Superstar',
    start: '2025-03-16',
    end: '2025-06-09',
    description: '[Website](https://jesuschristsuperstarmusical.com.au/)',
    tags: ["Musical", "Theatre"],
    location: {
      address: "The Princess Theatre, 163 Spring St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/bP7GfWWjxJAb4NKn9",
    },
  },
  {
    title: 'Melbourne Food and Wine Festival',
    start: '2025-03-21',
    end: '2025-03-31',
    description: '[Website](https://www.melbournefoodandwine.com.au//)',
    tags: ["Festival", "Food"],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'The Finders Keepers Food Market',
    start: '2025-03-22',
    end: '2025-03-24',
    description: '[Website](https://www.thefinderskeepers.com/food-market/)',
    tags: ["Market", "Food"],
    location: {
      address: "Meat Market, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/z8zhzx5ss7qYua1D6",
    },
  },
  {
    title: 'Melbourne International Comedy Festival',
    start: '2025-03-26',
    end: '2025-04-21',
    description: '[Website](https://www.comedyfestival.com.au/)',
    tags: ["Festival", "Comedy"],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'Melbourne International Flower & Garden Show',
    start: '2025-03-26',
    end: '2025-03-31',
    description: '[Website](https://melbflowershow.com.au/)',
    tags: ["Exhibition", "Outdoor"],
    location: {
      address: "Royal Exhibition Building, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
    },
  },
  {
    title: "Baker's Dozen",
    startRecur: '2025-03-29',
    endRecur: '2025-03-31',
    startTime: '10:00:00+10:00',
    endTime: '15:00:00+10:00',
    description: `Part of Melbourne Food and Wine Festival

[Details](https://www.melbournefoodandwine.com.au/events/bakers-dozen/)`,
    tags: ["Food", "Market", "Free", "Outdoor"],
    location: {
      address: "Fed Square, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
    },
  },
  {
    title: 'Lightfall Cranbourne',
    startRecur: '2025-04-06',
    endRecur: '2025-04-21',
    startTime: '18:00:00+10:00',
    endTime: '21:00:00+10:00',
    description: '[Website](https://www.rbg.vic.gov.au/cranbourne-gardens/whats-on-cranbourne/lightfall/)',
    tags: ["Outdoor"],
    location: {
      address: "Royal Botanic Gardens, Cranbourne",
      googleMapsUrl: "https://maps.app.goo.gl/1saD7PtYgKLqazjw5",
    },
  },
  {
    title: 'The Lord of the Rings – A Musical Tale',
    start: '2025-04-26',
    end: '2025-05-31',
    description: '[Website](https://lotronstage.com/)',
    tags: ["Musical", "Theatre"],
    location: {
      address: "Comedy Theatre, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/hNN1LcomqSEXCrHe6",
    },
  },
  {
    title: 'Beetlejuice The Musical',
    start: '2025-05-07',
    end: '2025-06-30',
    description: '[Website](https://beetlejuicethemusical.com.au/)',
    tags: ["Musical", "Theatre"],
    location: {
      address: "Regent Theatre, 191 Collins St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/8gYHTCG7sANgjwWA6",
    },
  },
  {
    title: 'Les Misérables The Arena Spectacular',
    start: '2025-05-14',
    end: '2025-05-24',
    description: '[Website](https://lesmisarenatour.com.au/)',
    tags: ["Musical", "Theatre"],
    location: {
      address: "Rod Laver Arena, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/WigqQq1jwkYBoBYp9",
    },
  },
  {
    title: 'RISING: Melbourne',
    start: '2025-06-04',
    end: '2025-06-16',
    description: '[Website](https://2025.rising.melbourne/)',
    tags: ["Festival"],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'Kimono',
    start: '2025-06-04',
    end: '2025-10-06',
    description: `[Website](https://www.ngv.vic.gov.au/exhibition/kimono/)`,
    tags: ["Exhibition", "Art"],
    location: {
      address: "National Gallery of Victoria, 180 St Kilda Rd, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/ZrR1RKjyPGWyZ8qh9",
    },
  },
  {
    title: 'French Impressionism',
    start: '2025-06-06',
    end: '2025-10-06',
    description: `From the Museum of Fine Arts, Boston. Part of Melbourne Winter Masterpieces

[Website](https://www.ngv.vic.gov.au/exhibition/french-impressionism/)
    `,
    tags: ["Exhibition", "Art"],
    location: {
      address: "National Gallery of Victoria, 180 St Kilda Rd, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/ZrR1RKjyPGWyZ8qh9",
    },
  },
  {
    title: 'Annie the Musical',
    start: '2025-07-10',
    end: '2025-08-04',
    description: '[Website](https://anniemusical.com.au/)',
    tags: ["Musical", "Theatre"],
    location: {
      address: "The Princess Theatre, 163 Spring St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/bP7GfWWjxJAb4NKn9",
    },
  },
  {
    title: 'Kimberly Akimbo: A Musical',
    start: '2025-07-26',
    end: '2025-08-31',
    description: '[Website](https://www.mtc.com.au/plays-and-tickets/whats-on/season-2025/kimberly-akimbo-a-musical/)',
    tags: ["Musical", "Theatre"],
    location: {
      address: "Playhouse Theatre, Arts Centre, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/oF5TDshryjzAo6WV9",
    },
  },
]

export default events