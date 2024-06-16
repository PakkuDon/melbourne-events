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
    title: 'RISING: Melbourne',
    start: '2024-06-01',
    end: '2024-06-17',
    description: '[Website](https://2024.rising.melbourne/)',
    location: {
      address: "Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'Lightscape',
    start: '2024-06-14',
    end: '2024-08-05',
    description: '[Website](https://www.lightscapeaustralia.com/city/melbourne.html)',
    location: {
      address: "Royal Botanic Gardens Victoria, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/t6BCr59sBJc6BJXG9",
    },
  },
  {
    title: 'Firelight Festival',
    start: '2024-06-28',
    end: '2024-07-01',
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
    description: '[Website](https://openhousemelbourne.org/',
    location: {
      address: "Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
]