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
    location: {
      address: "National Gallery of Victoria, 180 St Kilda Rd, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/ZrR1RKjyPGWyZ8qh9",
    },
  },
  {
    title: `Disney's Beauty and the Beast the Musical`,
    start: '2024-06-29',
    end: '2024-12-30',
    description: '[Website](https://beautyandthebeastmusical.com.au/)',
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
    location: {
      address: "Queen Victoria Market, Queen St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/XL5zduSz3zMnbkEy8",
    },
  },
  {
    title: 'Tina: The Tina Turner Musical',
    start: '2024-09-21',
    end: '2024-12-30',
    description: '[Website](https://tinathemusical.com.au/)',
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
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'The Finders Keepers Design Market',
    start: '2024-10-11',
    end: '2024-10-14',
    description: '[Website](https://www.thefinderskeepers.com/melbourne-markets/)',
    location: {
      address: "Royal Exhibition Building, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
    },
  },
  {
    title: 'Melbourne International Jazz Festival',
    start: '2024-10-18',
    end: '2024-10-28',
    description: '[Website](https://www.melbournejazz.com/)',
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
    location: {
      address: "Royal Exhibition Building, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
    },
  },
  {
    title: 'Victorian Festival of Diwali',
    start: '2024-10-26T12:30:00+11:00',
    end: '2024-10-26T22:00:00+11:00',
    description: `[What's On Melbourne listing](https://whatson.melbourne.vic.gov.au/things-to-do/victorian-festival-of-diwali)`,
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
    },
  },
  {
    title: 'Sister Act the Musical',
    start: '2024-11-03',
    end: '2025-01-20',
    description: '[Website](https://sisteractthemusical.com.au/)',
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
    location: {
      address: "Victoria State Rose Garden, Werribee South",
      googleMapsUrl: "https://maps.app.goo.gl/uqx4KanuLxzBkERr8",
    },
  },
  {
    title: 'A Christmas Carol',
    start: '2024-11-22',
    end: '2024-12-30',
    description: '[Website](https://christmascarolaustralia.com.au/)',
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
    location: {
      address: "Royal Exhibition Building, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
    },
  },
  {
    title: 'Dear Evan Hansen Musical',
    start: '2024-12-14',
    end: '2025-02-03',
    description: '[Website](https://www.dearevanhansenmusical.com.au/)',
    location: {
      address: "Playhouse Theatre, 100 St Kilda Rd, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/oF5TDshryjzAo6WV9",
    },
  },
  {
    title: 'Yayoi Kusama',
    startRecur: '2024-12-15',
    endRecur: '2025-04-22',
    startTime: '10:00:00+10:00',
    endTime: '17:00:00+10:00',
    description: '[Website](https://www.ngv.vic.gov.au/exhibition/yayoi-kusama/)',
    location: {
      address: "National Gallery of Victoria, 180 St Kilda Rd, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/ZrR1RKjyPGWyZ8qh9",
    },
  },
  {
    title: 'Jesus Christ Superstar',
    start: '2025-03-16',
    end: '2025-05-12',
    description: '[Website](https://jesuschristsuperstarmusical.com.au/)',
    location: {
      address: "The Princess Theatre, 163 Spring St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/bP7GfWWjxJAb4NKn9",
    },
  },
  {
    title: 'Melbourne International Comedy Festival',
    start: '2025-03-26',
    end: '2025-04-21',
    description: '[Website](https://www.comedyfestival.com.au/)',
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
    location: {
      address: "Royal Exhibition Building, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
    },
  },
]

export default events
