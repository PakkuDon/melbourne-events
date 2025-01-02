// Available properties for events defined in https://fullcalendar.io/docs/event-object
// Note that end date is exclusive
/* Example events
{
  title: 'All day event',
  start: '2024-06-14',
  end: '2024-06-15',
  description: 'Description',
  location: {
    address: "",
    googleMapsUrl: "",
  },
},

{
  title: 'Event with times included',
  start: '2024-06-14T10:30:00+11:00',
  end: '2024-06-15T11:30:00+11:00',
  description: 'Description',
  location: {
    address: "",
    googleMapsUrl: "",
  },
},

{
  title: 'Recurring event',
  startTime: '09:00:00+11:00',
  endTime: '23:00:00+11:00',
  startRecur: '2024-06-01',
  endRecur: '2024-07-15',
  daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
  description: 'Description',
  location: {
    address: "",
    googleMapsUrl: "",
  },
},
*/

const events = [
  {
    title: 'Joy',
    startRecur: '2024-03-01',
    endRecur: '2025-08-30',
    startTime: '10:00:00+11:00',
    endTime: '17:00:00+11:00',
    description: '[Website](https://museumsvictoria.com.au/immigrationmuseum/whats-on/joy/)',
    tags: ["Exhibition"],
    location: {
      address: "Immigration Museum, 400 Flinders St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/ahS9e1yDSvFZcueq7",
    },
  },
  {
    title: 'WICKED the Musical',
    start: '2024-03-02',
    end: '2024-08-26',
    description: '[Website](https://wickedthemusical.com.au/tickets/melbourne/)',
    tags: ["Musical", "Theatre"],
    location: {
      address: "Regent Theatre, 191 Collins St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/8gYHTCG7sANgjwWA6",
    },
  },
  {
    title: 'Sunset Boulevard',
    start: '2024-05-21',
    end: '2024-08-11',
    description: '[Website](https://sunsetmusical.com.au/)',
    tags: ["Musical", "Theatre"],
    location: {
      address: "The Princess Theatre, 163 Spring St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/bP7GfWWjxJAb4NKn9",
    },
  },
  {
    title: 'Beings by Universal Everything',
    startRecur: '2024-05-22',
    endRecur: '2024-09-30',
    startTime: '10:00:00+11:00',
    endTime: '17:00:00+11:00',
    description: '[Website](https://www.acmi.net.au/whats-on/beings/)',
    tags: ["Exhibition"],
    location: {
      address: "ACMI, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/BUCXHx6a2VHVbkev8",
    },
  },
  {
    title: 'RISING: Melbourne',
    start: '2024-06-01',
    end: '2024-06-17',
    description: '[Website](https://2024.rising.melbourne/)',
    tags: ["Festival"],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'Lightscape',
    startRecur: '2024-06-14',
    endRecur: '2024-08-05',
    startTime: '17:00:00+11:00',
    endTime: '22:00:00+11:00',
    daysOfWeek: [0, 3, 4, 5, 6],
    description: '[Website](https://www.lightscapeaustralia.com/city/melbourne.html)',
    tags: ["Outdoor"],
    location: {
      address: "Royal Botanic Gardens Victoria, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/t6BCr59sBJc6BJXG9",
    },
  },
  {
    title: 'Pharoah',
    start: '2024-06-14',
    end: '2024-10-07',
    description: `Exhibition celebrating ancient Egyptian art and culture

[Website](https://www.ngv.vic.gov.au/exhibition/pharaoh/)
    `,
    tags: ["Exhibition"],
    location: {
      address: "National Gallery of Victoria, 180 St Kilda Rd, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/ZrR1RKjyPGWyZ8qh9",
    },
  },
  {
    title: `Disney's Beauty and the Beast the Musical`,
    start: '2024-06-29',
    end: '2025-02-17',
    description: '[Website](https://beautyandthebeastmusical.com.au/)',
    tags: ["Musical", "Theatre"],
    location: {
      address: "Her Majesty's Theatre, 219 Exhibition St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/nh9yT4LmafjFLAt86",
    },
  },
  {
    title: 'Firelight Festival',
    startRecur: '2024-06-28',
    endRecur: '2024-07-01',
    startTime: '17:00:00+11:00',
    endTime: '22:00:00+11:00',
    description: '[Website](https://firelight.melbourne.vic.gov.au/festival/)',
    tags: ["Festival", "Outdoor", "Free"],
    location: {
      address: "Harbour Esplanade, Docklands",
      googleMapsUrl: "https://maps.app.goo.gl/PXUGSVipCtXtwEyUA",
    },
  },
  {
    title: 'Firelight Labyrinth',
    start: '2024-06-28',
    end: '2024-07-15',
    description: '[Website](https://firelight.melbourne.vic.gov.au/labyrinth/)',
    tags: ["Installation"],
    location: {
      address: "Marvel Stadium, 740 Bourke St, Docklands",
      googleMapsUrl: "https://maps.app.goo.gl/Piozzipi77WBatUx5",
    },
  },
  {
    title: 'Victoria the T. rex',
    startTime: '09:00:00+11:00',
    endTime: '17:00:00+11:00',
    startRecur: '2024-06-28',
    endRecur: '2024-10-21',
    description: '[Website](https://museumsvictoria.com.au/melbournemuseum/whats-on/victoria-the-t-rex/)',
    tags: ["Exhibition"],
    location: {
      address: "Melbourne Museum, 11 Nicholson St, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/swBLScA46YegEVtH8",
    },
  },
  {
    title: 'Winter Night Market | Queen Victoria Market',
    startTime: '17:00:00+11:00',
    endTime: '22:00:00+11:00',
    startRecur: '2024-06-05',
    endRecur: '2024-08-29',
    daysOfWeek: [3],
    description: '[Website](https://thenightmarket.com.au/)',
    tags: ["Market"],
    location: {
      address: "Queen Victoria Market, Queen St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/XL5zduSz3zMnbkEy8",
    },
  },
  {
    title: 'Replay Festival',
    start: '2024-07-02',
    end: '2024-08-04',
    description: `- [Shows playing at Comedy Republic](https://www.comedyrepublic.com.au/events/?season=REPLAY24)
- [Shows playing at Arts Centre Melbourne](https://www.artscentremelbourne.com.au/festival-and-series/replay-festival)
    `,
    tags: ["Festival", "Comedy"],
    location: {
      address: "Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'The Finders Keepers Design Market',
    start: '2024-07-12',
    end: '2024-07-15',
    description: '[Website](https://www.thefinderskeepers.com/melbourne-markets/)',
    tags: ["Market"],
    location: {
      address: "Royal Exhibition Building, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
    },
  },
  {
    title: 'The Little Food Market',
    start: '2024-07-19',
    end: '2024-07-22',
    description: '[Website](https://thelittlefoodmarket.com/)',
    tags: ["Market"],
    location: {
      address: "Royal Exhibition Building, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
    },
  },
  {
    title: 'Open House Melbourne',
    start: '2024-07-27',
    end: '2024-07-29',
    description: '[Website](https://openhousemelbourne.org/)',
    tags: ["Exhibition"],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'SIX the Musical',
    start: '2024-08-02',
    end: '2024-10-21',
    description: '[Website](https://sixthemusical.com.au/)',
    tags: ["Musical", "Theatre"],
    location: {
      address: "Comedy Theatre, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/hNN1LcomqSEXCrHe6",
    },
  },
  {
    title: 'Melbourne International Film Festival',
    start: '2024-08-08',
    end: '2024-08-26',
    description: '[Website](https://miff.com.au/)',
    tags: ["Festival"],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'Now or Never',
    start: '2024-08-22',
    end: '2024-09-01',
    description: '[Website](https://nowornever.melbourne.vic.gov.au/)',
    tags: ["Festival"],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'Affordable Art Fair Melbourne',
    start: '2024-08-29',
    end: '2024-09-02',
    description: '[Website](https://affordableartfair.com/fairs/melbourne/)',
    tags: ["Market"],
    location: {
      address: "Royal Exhibition Building, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
    },
  },
  {
    title: 'South East Asia Festival | Queen Victoria Market',
    startRecur: '2024-09-07',
    endRecur: '2024-09-09',
    startTime: '09:00:00+10:00',
    endTime: '16:00:00+10:00',
    description: '[Website](https://qvm.com.au/whats-on/south-east-asia-festival/)',
    tags: ["Festival"],
    location: {
      address: "Queen Victoria Market, Queen St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/XL5zduSz3zMnbkEy8",
    },
  },
  {
    title: 'CherryHill Orchards Blossom Festival',
    start: '2024-09-09',
    end: '2024-09-30',
    description: '[Website](https://cherryhill.com.au/events/blossom-festival/)',
    tags: ["Festival", "Outdoor"],
    location: {
      address: "CherryHill Orchards, Coldstream",
      googleMapsUrl: "https://maps.app.goo.gl/p5ty9KjNDiQbSqRj7",
    },
  },
  {
    title: 'Honk! Untitled Goose Exhibition',
    startRecur: '2024-09-17',
    endRecur: '2025-02-17',
    startTime: '10:00:00+11:00',
    endTime: '17:00:00+11:00',
    description: '[Website](https://www.acmi.net.au/whats-on/honk-untitled-goose-exhibition/)',
    tags: ["Exhibition", "Free"],
    location: {
      address: "ACMI, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/BUCXHx6a2VHVbkev8",
    },
  },
  {
    title: 'Accidentally Wes Anderson: The Exhibition',
    startRecur: '2024-09-18',
    endRecur: '2024-11-04',
    startTime: '10:00:00+11:00',
    endTime: '17:30:00+11:00',
    daysOfWeek: [0, 3, 4, 5, 6],
    description: '[Website](https://awaexhibition.com/melbourne/)',
    tags: ["Exhibition"],
    location: {
      address: "Level 1, 360 Bourke St, Melbourne 3000",
      googleMapsUrl: "https://maps.app.goo.gl/zJ32Vm8iZKsYEofN9",
    },
  },
  {
    title: 'Fringe Flavours Night Market | Queen Victoria Market',
    startTime: '17:00:00+11:00',
    endTime: '22:00:00+11:00',
    startRecur: '2024-09-18',
    endRecur: '2024-10-17',
    daysOfWeek: [3],
    description: '[Website](https://thenightmarket.com.au/)',
    tags: ["Market"],
    location: {
      address: "Queen Victoria Market, Queen St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/XL5zduSz3zMnbkEy8",
    },
  },
  {
    title: 'CherryHill Orchards Blossom By Light',
    start: '2024-09-20',
    end: '2024-09-23',
    description: '[Website](https://cherryhill.com.au/events/blossom-festival/)',
    tags: ["Outdoor"],
    location: {
      address: "CherryHill Orchards, Wandin East",
      googleMapsUrl: "https://maps.app.goo.gl/uP2zxbn8rqjL2Uow7",
    },
  },
  {
    title: 'Mid-Autumn Moon Festival | Queen Victoria Market',
    startRecur: '2024-09-21',
    endRecur: '2024-09-23',
    startTime: '09:00:00+10:00',
    endTime: '16:00:00+10:00',
    description: '[Website](https://qvm.com.au/whats-on/mid-autumn-moon-festival/)',
    tags: ["Festival"],
    location: {
      address: "Queen Victoria Market, Queen St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/XL5zduSz3zMnbkEy8",
    },
  },
  {
    title: 'Tina: The Tina Turner Musical',
    start: '2024-09-21',
    end: '2025-03-03',
    description: '[Website](https://tinathemusical.com.au/)',
    tags: ["Musical", "Theatre"],
    location: {
      address: "The Princess Theatre, 163 Spring St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/bP7GfWWjxJAb4NKn9",
    },
  },
  {
    title: 'Melbourne Royal Show',
    start: '2024-09-26',
    end: '2024-10-07',
    description: '[Website](https://royalshow.com.au/)',
    tags: ["Festival", "Outdoor"],
    location: {
      address: "Melbourne Showgrounds, Ascot Vale",
      googleMapsUrl: "https://maps.app.goo.gl/apnjgN8oXs1KwwDd8",
    },
  },
  {
    title: 'Melbourne Fringe Festival',
    start: '2024-10-01',
    end: '2024-10-21',
    description: '[Website](https://melbournefringe.com.au/)',
    tags: ["Festival"],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'Melbourne International Games Week (MIGW)',
    start: '2024-10-05',
    end: '2024-10-14',
    description: '[Website](https://gamesweek.melbourne/)',
    tags: ["Festival"],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'Big Games Night Out',
    start: '2024-10-10 15:00',
    end: '2024-10-10 23:55',
    description: '[Website](https://gamesweek.melbourne/BGNO)',
    tags: ["Gaming", "Free"],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
    },
  },
  {
    title: 'The Finders Keepers Design Market',
    start: '2024-10-11',
    end: '2024-10-14',
    description: '[Website](https://www.thefinderskeepers.com/melbourne-markets/)',
    tags: ["Market"],
    location: {
      address: "Royal Exhibition Building, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
    },
  },
  {
    title: 'PAX Aus',
    start: '2024-10-11',
    end: '2024-10-14',
    description: '[Website](https://aus.paxsite.com/en-us.html)',
    tags: ["Convention", "Gaming"],
    location: {
      address: "Melbourne Convention and Exhibition Centre (MCEC), South Wharf",
      googleMapsUrl: "https://maps.app.goo.gl/GnGf5rSD8pAWTA4d7",
    },
  },
  {
    title: 'REKOSPECTIVE: The Art of Reko Rennie',
    start: '2024-10-11',
    end: '2025-01-28',
    description: '[Website](https://www.ngv.vic.gov.au/exhibition/rekospective-the-art-of-reko-rennie/)',
    tags: ["Exhibition", "Art"],
    location: {
      address: "The Ian Potter Centre: NGV Australia, Fed Square",
      googleMapsUrl: "https://maps.app.goo.gl/tfHEWQphQBBaVqR99",
    },
  },
  {
    title: '100 Years Film Festival',
    start: '2024-10-13',
    end: '2024-11-06',
    description: '[Website](https://www.rmit.edu.au/thecapitol/100years)',
    tags: ["Festival"],
    location: {
      address: "The Capitol, 113 Swanston St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/NUUWnKPS3RvUXXfb8",
    },
  },
  {
    title: 'Melbourne International Jazz Festival',
    start: '2024-10-18',
    end: '2024-10-28',
    description: '[Website](https://www.melbournejazz.com/)',
    tags: ["Festival"],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'The Big Vegan Market',
    start: '2024-10-19',
    end: '2024-10-21',
    description: '[Website](https://bigveganmarket.com.au/)',
    tags: ["Market"],
    location: {
      address: "Royal Exhibition Building, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
    },
  },
  {
    title: 'Melbourne Fashion Week',
    start: '2024-10-21',
    end: '2024-10-28',
    description: '[Website](https://mfw.melbourne.vic.gov.au/)',
    tags: ["Festival"],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'Asia Oasis Street Food Festival',
    start: '2024-10-24',
    end: '2024-10-28',
    description: '[Website](https://asiaoasis.com.au/)',
    tags: ["Festival", "Food", "Free"],
    location: {
      address: "Alexandra Gardens, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/CafM2SaHPRGiHL6y7",
    },
  },
  {
    title: 'Victorian Festival of Diwali',
    start: '2024-10-26T12:30:00+11:00',
    end: '2024-10-26T22:00:00+11:00',
    description: `[What's On Melbourne listing](https://whatson.melbourne.vic.gov.au/things-to-do/victorian-festival-of-diwali)`,
    tags: ["Festival"],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
    },
  },
  {
    title: 'Sister Act the Musical',
    start: '2024-11-03',
    end: '2025-01-27',
    description: '[Website](https://sisteractthemusical.com.au/)',
    tags: ["Musical", "Theatre"],
    location: {
      address: "Regent Theatre, 191 Collins St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/8gYHTCG7sANgjwWA6",
    },
  },
  {
    title: 'Peter and the Starcatcher',
    start: '2024-11-08',
    end: '2024-12-01',
    description: '[Website](https://peterandthestarcatcher.com.au/)',
    tags: ["Musical", "Theatre"],
    location: {
      address: "Playhouse Theatre, 100 St Kilda Rd, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/oF5TDshryjzAo6WV9",
    },
  },
  {
    title: 'State Rose & Garden Show',
    start: '2024-11-09',
    end: '2024-11-11',
    description: '[Website](https://www.wyndham.vic.gov.au/events-experiences/wyndham-citys-major-events/state-rose-garden-show)',
    tags: ["Exhibition", "Outdoor"],
    location: {
      address: "Victoria State Rose Garden, Werribee South",
      googleMapsUrl: "https://maps.app.goo.gl/uqx4KanuLxzBkERr8",
    },
  },
  {
    title: 'Polish Festival',
    start: '2024-11-10T10:00:00+11:00',
    end: '2024-11-10T18:00:00+11:00',
    description: `[What's On Melbourne listing](https://whatson.melbourne.vic.gov.au/things-to-do/polish-festival-2024)`,
    tags: ["Festival", "Free"],
    location: {
      address: "Fed Square, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
    },
  },
  {
    title: 'African Music and Cultural Festival',
    start: '2024-11-15',
    end: '2024-11-18',
    description: `[What's On Melbourne listing](https://whatson.melbourne.vic.gov.au/things-to-do/african-music-and-cultural-festival)`,
    tags: ["Festival", "Free"],
    location: {
      address: "Fed Square, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
    },
  },
  {
    title: 'Summer Night Market | Queen Victoria Market',
    startTime: '17:00:00+11:00',
    endTime: '22:00:00+11:00',
    startRecur: '2024-11-20',
    endRecur: '2025-03-13',
    daysOfWeek: [3],
    description: '[Website](https://thenightmarket.com.au/)',
    tags: ["Market"],
    location: {
      address: "Queen Victoria Market, Queen St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/XL5zduSz3zMnbkEy8",
    },
  },
  {
    title: 'Always Live',
    start: '2024-11-22',
    end: '2024-12-09',
    description: '[Website](https://www.alwayslive.com.au/)',
    tags: ["Festival"],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'A Christmas Carol',
    start: '2024-11-22',
    end: '2024-12-30',
    description: '[Website](https://christmascarolaustralia.com.au/)',
    tags: ["Musical", "Theatre"],
    location: {
      address: "Comedy Theatre, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/hNN1LcomqSEXCrHe6",
    },
  },
  {
    title: 'The Big Design Market',
    start: '2024-11-29',
    end: '2024-12-02',
    description: '[Website](https://melbourne.thebigdesignmarket.com/)',
    tags: ["Market"],
    location: {
      address: "Royal Exhibition Building, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
    },
  },
  {
    title: 'Moonlight Cinema',
    startTime: '19:30:00+11:00',
    endTime: '23:00:00+11:00',
    startRecur: '2024-11-29',
    endRecur: '2025-03-31',
    daysOfWeek: [0, 2, 3, 4, 5, 6],
    description: "[Website](https://melbourne.moonlight.com.au/)",
    tags: ["Film", "Outdoor"],
    location: {
      address: "Royal Botanic Gardens Victoria, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/t6BCr59sBJc6BJXG9",
    },
  },
  {
    title: 'DARKFIELD',
    start: '2024-12-13',
    end: '2025-02-17',
    description: `Featuring SÉANCE and FLIGHT
  
[Website](https://www.darkfield.com.au/melbourne)`,
    tags: ["Theatre"],
    location: {
      address: "Arts Centre Melbourne, 100 St Kilda Rd",
      googleMapsUrl: "https://maps.app.goo.gl/5uJJAiDw8H8kCt3L7",
    },
  },
  {
    title: 'Dear Evan Hansen Musical',
    start: '2024-12-14',
    end: '2025-02-03',
    description: '[Website](https://www.dearevanhansenmusical.com.au/)',
    tags: ["Musical", "Theatre"],
    location: {
      address: "Playhouse Theatre, 100 St Kilda Rd, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/oF5TDshryjzAo6WV9",
    },
  },
  {
    title: 'Antopia',
    startTime: '09:00:00+11:00',
    endTime: '17:00:00+11:00',
    startRecur: '2024-12-14',
    endRecur: '2025-03-11',
    description: "[Website](https://museumsvictoria.com.au/melbournemuseum/whats-on/antopia/)",
    tags: ["Exhibition"],
    location: {
      address: "Melbourne Museum, 11 Nicholson St, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/swBLScA46YegEVtH8",
    },
  },
  {
    title: 'Yayoi Kusama',
    startRecur: '2024-12-15',
    endRecur: '2025-04-22',
    startTime: '10:00:00+10:00',
    endTime: '17:00:00+10:00',
    description: '[Website](https://www.ngv.vic.gov.au/exhibition/yayoi-kusama/)',
    tags: ["Exhibition"],
    location: {
      address: "National Gallery of Victoria, 180 St Kilda Rd, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/ZrR1RKjyPGWyZ8qh9",
    },
  },
  {
    title: 'Christmas Outdoor Cinema',
    start: '2024-12-16',
    end: '2024-12-24',
    description: 'See [program](https://fedsquare.com/events/christmas-outdoor-cinema) for movies and times',
    tags: ["Free", "Film", "Outdoor"],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
    },
  },
  {
    title: 'As Camp as Christmas',
    start: '2024-12-20T18:00:00+11:00',
    end: '2024-12-20T22:00:00+11:00',
    description: `[Website](https://fedsquare.com/events/as-camp-as-christmas/)`,
    tags: ["Free", "Performance"],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
    },
  },
  {
    title: "Vision Australia's Carols by Candlelight",
    start: '2024-12-24T20:00+11:00',
    end: '2024-12-24T23:30+11:00',
    description: '[Website](https://www.artscentremelbourne.com.au/whats-on/2024/contemporary-music/carols-by-candlelight)',
    tags: ["Performance", "Outdoor"],
    location: {
      address: "Sidney Myer Music Bowl, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/LAHceVEECBY9uF9E8",
    },
  },
  {
    title: 'Van Gogh at THE LUME',
    start: '2024-12-26',
    end: '2025-06-02',
    description: '[Website](https://www.thelumemelbourne.com/van-gogh)',
    tags: ["Art", "Exhibition"],
    location: {
      address: "THE LUME, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/jUsZvqXhu88nLFUG9",
    },
  },
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
    title: 'BMW Opera for All',
    start: '2025-02-01T17:00:00+11:00',
    end: '2025-02-01T19:00:00+11:00',
    description: `[Website](https://opera.org.au/events/bmw-opera-for-all/)`,
    tags: ["Free", "Music"],
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
    tags: ["Free", "Music"],
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
    tags: ["Free", "Music"],
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
    tags: ["Free", "Music"],
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
    title: 'Antipodes Festival',
    start: '2025-02-22',
    end: '2025-02-24',
    description: '[Website](https://www.antipodesfestival.com.au/)',
    tags: ["Festival", "Free"],
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
    title: 'Top Arts 2025',
    start: '2025-03-14',
    end: '2025-07-21',
    description: `[Website](https://www.ngv.vic.gov.au/exhibition/top-arts-2025/)`,
    tags: ["Exhibition", "Free"],
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
    tags: ["Food", "Market", "Free"],
    location: {
      address: "Fed Square, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
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
    tags: ["Exhibition"],
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
    tags: ["Exhibition"],
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
]

export default events
