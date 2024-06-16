// Available properties for events defined in https://fullcalendar.io/docs/event-object
// Note that end date is exclusive
/* Example events
{
  title: 'All day event',
  start: '2024-06-14',
  end: '2024-06-15',
  description: 'Description',
},

{
  title: 'Event with times included',
  start: '2024-06-14T10:30:00+11:00',
  end: '2024-06-15T11:30:00+11:00',
  description: 'Description',
},

{
  title: 'Recurring event',
  startTime: '09:00:00+11:00',
  endTime: '23:00:00+11:00',
  startRecur: '2024-06-01',
  endRecur: '2024-07-15',
  description: 'Description',
  daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
},
*/

const events = [
  {
    title: 'RISING: Melbourne',
    start: '2024-06-01',
    end: '2024-06-17',
    description: '[Website](https://2024.rising.melbourne/)',
  },
  {
    title: 'Lightscape',
    start: '2024-06-14',
    end: '2024-08-05',
    description: '[Website](https://www.lightscapeaustralia.com/city/melbourne.html)',
  },
  {
    title: 'Firelight Festival',
    start: '2024-06-28',
    end: '2024-07-01',
    description: '[Website](https://firelight.melbourne.vic.gov.au/festival/)',
  },
  {
    title: 'Firelight Labyrinth',
    start: '2024-06-28',
    end: '2024-07-15',
    description: '[Website](https://firelight.melbourne.vic.gov.au/labyrinth/)',
  },
  {
    title: 'Winter Night Market | Queen Victoria Market',
    startTime: '17:00:00+11:00',
    endTime: '22:00:00+11:00',
    startRecur: '2024-06-05',
    endRecur: '2024-08-29',
    description: '[Website](https://thenightmarket.com.au/)',
    daysOfWeek: [3]
  },
]